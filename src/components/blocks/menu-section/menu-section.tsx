import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { PlateCategory } from '@/assets/data/menu'
import { siteLang, siteCurrency } from '@/assets/data/menu'
import type { Locale } from '@/i18n/ui'
import { ui } from '@/i18n/ui'

type MenuSectionProps = {
  plateCategories: PlateCategory[]
  lang?: Locale
}

const ALLERGEN_NAMES: Record<Locale, Record<string, string>> = {
  ro: {
    '1': 'gluten',
    '2': 'crustacee',
    '3': 'ouă',
    '4': 'pește',
    '5': 'arahide',
    '6': 'soia',
    '7': 'lapte',
    '8': 'fructe cu coajă',
    '9': 'țelină',
    '10': 'muștar',
    '11': 'susan',
    '12': 'sulfiți',
    '13': 'lupin',
    '14': 'moluște'
  },
  en: {
    '1': 'gluten',
    '2': 'crustaceans',
    '3': 'eggs',
    '4': 'fish',
    '5': 'peanuts',
    '6': 'soy',
    '7': 'milk',
    '8': 'tree nuts',
    '9': 'celery',
    '10': 'mustard',
    '11': 'sesame',
    '12': 'sulfites',
    '13': 'lupin',
    '14': 'molluscs'
  }
}

const allergenLabel = (codes: string | undefined, lang: Locale) => {
  if (!codes) return ''

  const map = ALLERGEN_NAMES[lang]
  const names = codes
    .split(',')
    .map(c => map[c.trim()])
    .filter(Boolean)

  return names.length ? ` ${ui[lang]['menu.allergens']}: ${names.join(', ')}` : ''
}

const MenuSection = ({ plateCategories, lang = 'ro' }: MenuSectionProps) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]
  const [imageSizes, setImageSizes] = useState<Record<string, { width: number; height: number }>>({})
  const [activeSlug, setActiveSlug] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1)

      if (hash && plateCategories.some(c => c.slug === hash)) return hash
    }

    return plateCategories[0]?.slug ?? ''
  })

  const navRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const isNavigatingByClick = useRef(false)
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const formatter = new Intl.NumberFormat(siteLang[lang], {
    style: 'currency',
    currency: siteCurrency
  })

  const MAX_IMAGE_WIDTH = 192
  const MAX_IMAGE_HEIGHT = 168
  const DEFAULT_IMAGE_WIDTH = 120
  const DEFAULT_IMAGE_HEIGHT = 152

  const getImageKey = (category: PlateCategory, itemName: string) => `${category.slug}-${itemName}`

  const clampImageSize = (naturalWidth: number, naturalHeight: number) => {
    if (!naturalWidth || !naturalHeight) return undefined

    const ratio = naturalWidth / naturalHeight

    let width = Math.min(naturalWidth, MAX_IMAGE_WIDTH)
    let height = width / ratio

    if (height > MAX_IMAGE_HEIGHT) {
      height = MAX_IMAGE_HEIGHT
      width = height * ratio
    }

    return { width, height }
  }

  const handleImageLoad = (key: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget
    const size = clampImageSize(naturalWidth, naturalHeight)

    if (!size) return

    setImageSizes(prev => {
      const current = prev[key]
      if (current && current.width === size.width && current.height === size.height) return prev

      return { ...prev, [key]: size }
    })
  }

  useEffect(() => {
    const sections = plateCategories.map(c => document.getElementById(c.slug)).filter((el): el is HTMLElement => !!el)

    const observer = new IntersectionObserver(
      entries => {
        if (isNavigatingByClick.current) return
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id

            if (id) setActiveSlug(id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(s => observer.observe(s))

    return () => observer.disconnect()
  }, [plateCategories])

  useEffect(() => {
    const link = linkRefs.current[activeSlug]
    const nav = navRef.current

    if (!link || !nav) return
    const linkRect = link.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()
    const offset = link.offsetLeft - nav.clientWidth / 2 + linkRect.width / 2

    nav.scrollTo({ left: offset, behavior: 'smooth' })
    void navRect
  }, [activeSlug])

  const handleClick = (slug: string) => {
    isNavigatingByClick.current = true
    setActiveSlug(slug)
    if (clickTimeout.current) clearTimeout(clickTimeout.current)
    clickTimeout.current = setTimeout(() => {
      isNavigatingByClick.current = false
    }, 1000)
  }

  return (
    <section id='menu' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='text-sm font-normal'>
            {t('menu.badge')}
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('menu.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('menu.subtitle')}</p>
        </div>

        {/* Sticky category nav */}
        <div className='sticky top-20 z-40 mb-20'>
          <div aria-hidden='true' className='bg-background pointer-events-none absolute inset-x-0 -top-20 bottom-0' />
          <div
            aria-hidden='true'
            className='from-background from-0 pointer-events-none absolute inset-x-0 top-full h-10 bg-linear-to-b to-transparent'
          />
          <nav className='bg-primary text-primary-foreground relative mx-auto max-w-5xl sm:rounded-full'>
            <ul ref={navRef} className='no-scrollbar flex gap-8 overflow-x-auto px-2.5 py-3'>
              {plateCategories.map(cat => {
                const isActive = activeSlug === cat.slug

                return (
                  <li key={cat.slug} className='shrink-0'>
                    <a
                      ref={el => {
                        linkRefs.current[cat.slug] = el
                      }}
                      href={`#${cat.slug}`}
                      onClick={() => handleClick(cat.slug)}
                      className={cn(
                        'rounded-full px-3 py-1 font-medium transition select-none',
                        isActive ? 'bg-background text-primary' : 'hover:bg-background/10'
                      )}
                    >
                      {cat.prettyName[lang]}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Category sections */}
        <div className='grid grid-cols-1 gap-y-32'>
          {plateCategories.map(cat => (
            <div key={cat.slug} id={cat.slug} className='scroll-mt-40 space-y-16'>
              <div className='mx-auto flex max-w-lg flex-col items-center gap-2 text-center text-balance'>
                <h3 className='text-primary/80 text-2xl font-semibold md:text-3xl'>{cat.prettyName[lang]}</h3>
                <p className='text-muted-foreground'>{cat.description[lang]}</p>
              </div>

              <dl className='mx-auto flex max-w-2xl flex-col divide-y'>
                {cat.plates.map(item => {
                  const hasImage = Boolean(item.image)
                  const priceLabel = formatter.format(item.price)
                  const imageKey = item.image ? item.image : getImageKey(cat, item.name.ro)
                  const size = imageKey ? imageSizes[imageKey] : undefined
                  const displayWidth = size?.width ?? DEFAULT_IMAGE_WIDTH
                  const displayHeight = size?.height ?? DEFAULT_IMAGE_HEIGHT

                  return (
                    <div
                      key={item.name.ro}
                      className={cn(
                        'flex items-stretch justify-between gap-4 py-6',
                        !hasImage && 'items-center'
                      )}
                    >
                      <div className='flex min-w-0 flex-1 flex-col'>
                        <dt className='text-xl font-bold sm:text-2xl'>
                          <span className='flex items-baseline justify-between gap-4'>
                            <span className='flex items-baseline gap-2 min-w-0'>
                              <span className='truncate'>{item.name[lang]}</span>
                              {item.weight && (
                                <span className='text-muted-foreground text-base font-normal'>{item.weight}</span>
                              )}
                            </span>
                            {!hasImage && (
                              <span className='text-primary text-lg font-semibold sm:text-xl whitespace-nowrap'>{priceLabel}</span>
                            )}
                          </span>
                        </dt>
                        <dd className='mt-1 flex flex-1 flex-col'>
                          <p className='text-muted-foreground line-clamp-2 text-base'>
                            {item.description[lang]}
                            {allergenLabel(item.allergens, lang)}
                          </p>
                          {hasImage && <p className='text-primary mt-auto pt-2 text-lg font-bold'>{priceLabel}</p>}
                        </dd>
                      </div>
                      {hasImage && imageKey && (
                        <div
                          className='bg-muted shrink-0 overflow-hidden rounded-xl'
                          style={{ width: `${displayWidth}px`, height: `${displayHeight}px` }}
                        >
                          <img
                            src={item.image}
                            alt={item.name[lang]}
                            loading='lazy'
                            className='h-full w-full object-cover'
                            onLoad={handleImageLoad(imageKey)}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </dl>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 640px) {
          #menu .sticky > nav {
            border-radius: 0;
          }
        }
      `}</style>
    </section>
  )
}

export default MenuSection
