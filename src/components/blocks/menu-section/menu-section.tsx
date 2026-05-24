import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Plate, PlateCategory } from '@/assets/data/menu'
import { siteLang, siteCurrency } from '@/assets/data/menu'
import type { Locale } from '@/i18n/ui'
import { ui } from '@/i18n/ui'
import { XIcon } from 'lucide-react'

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
  const [selectedItem, setSelectedItem] = useState<{ plate: Plate; category: PlateCategory } | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(0)
  const closeTimeoutRef = useRef<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

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

  const closeModal = (options?: { preserveOffset?: boolean }) => {
    setIsModalVisible(false)
    if (!options?.preserveOffset) setDragOffset(0)
    if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = window.setTimeout(() => {
      setSelectedItem(null)
      setDragOffset(0)
      closeTimeoutRef.current = null
    }, 250)
  }

  useEffect(() => {
    if (!selectedItem) return

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKey)

    return () => document.removeEventListener('keydown', handleKey)
  }, [selectedItem])

  useEffect(() => {
    if (!selectedItem) return

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    requestAnimationFrame(() => setIsModalVisible(true))
  }, [selectedItem])

  useEffect(() => {
    if (!selectedItem) return
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [selectedItem])

  useEffect(() => {
    const updateScreen = () => {
      if (typeof window === 'undefined') return
      setIsMobile(window.matchMedia('(max-width: 639px)').matches)
    }

    updateScreen()
    window.addEventListener('resize', updateScreen)

    return () => window.removeEventListener('resize', updateScreen)
  }, [])

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current)
    },
    []
  )

  const handleSelectItem = (plate: Plate, category: PlateCategory) => {
    setSelectedItem({ plate, category })
    setDragOffset(0)
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!isMobile) return
    const touch = event.touches[0]

    dragStartRef.current = touch.clientY
    setIsDragging(true)
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!isMobile || !isDragging) return
    const touch = event.touches[0]
    const delta = touch.clientY - dragStartRef.current

    if (delta > 0) {
      event.preventDefault()
      setDragOffset(delta)
    } else {
      setDragOffset(0)
    }
  }

  const finishTouch = (shouldClose: boolean) => {
    if (shouldClose) {
      closeModal({ preserveOffset: true })
    } else {
      setDragOffset(0)
    }

    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return
    finishTouch(dragOffset > 100)
  }

  const handleTouchCancel = () => {
    if (!isMobile || !isDragging) return
    finishTouch(false)
  }

  const mobileModalTransform = isMobile
    ? isModalVisible
      ? `translateY(${dragOffset}px)`
      : 'translateY(100%)'
    : undefined

  return (
    <section id='menu' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl md:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('menu.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('menu.subtitle')}</p>
        </div>

        {/* Sticky category nav */}
        <div className='sticky top-16 z-40 mb-20 md:top-20'>
          <div aria-hidden='true' className='bg-background pointer-events-none absolute inset-x-0 -top-20 bottom-0' />
          <div
            aria-hidden='true'
            className='from-background from-0 pointer-events-none absolute inset-x-0 top-full h-10 bg-linear-to-b to-transparent'
          />
          <nav className='bg-primary/5 text-muted-foreground relative mx-auto max-w-5xl shadow-sm sm:rounded-full'>
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
                        isActive ? 'text-primary' : ''
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
        <div className='grid grid-cols-1 gap-y-16 px-4 sm:px-6 lg:px-0'>
          {plateCategories.map(cat => (
            <div key={cat.slug} id={cat.slug} className='scroll-mt-40 space-y-8 divide-y'>
              <div className='mx-auto flex max-w-4xl flex-col items-start gap-2 py-6 text-center text-balance'>
                <h3 className='text-primary/80 text-2xl font-semibold md:text-4xl'>{cat.prettyName[lang]}</h3>
              </div>

              <dl className='mx-auto flex max-w-4xl flex-col divide-y'>
                {cat.plates.map(item => {
                  const hasImage = Boolean(item.image)
                  const priceLabel = formatter.format(item.price)

                  return (
                    <button
                      type='button'
                      key={item.name.ro}
                      onClick={() => handleSelectItem(item, cat)}
                      className={cn(
                        'group flex w-full items-stretch justify-between gap-4 py-6 text-left transition',
                        !hasImage && 'items-center'
                      )}
                    >
                      <div className='flex min-w-0 flex-1 flex-col'>
                        <dt className='text-lg font-bold sm:text-2xl'>
                          <span className='flex items-baseline justify-between gap-4'>
                            <span className='flex min-w-0 items-baseline gap-2'>
                              <span className='truncate'>{item.name[lang]}</span>
                              {item.weight && (
                                <span className='text-muted-foreground text-base font-normal'>{item.weight}</span>
                              )}
                            </span>
                            {!hasImage && (
                              <span className='text-primary font-semibold whitespace-nowrap sm:text-lg'>
                                {priceLabel}
                              </span>
                            )}
                          </span>
                        </dt>
                        <dd className='mt-1 flex flex-1 flex-col'>
                          <p className='text-muted-foreground line-clamp-2 text-sm sm:text-base'>
                            {item.description[lang]}
                            {allergenLabel(item.allergens, lang)}
                          </p>
                          {hasImage && (
                            <p className='text-primary mt-auto font-bold sm:text-lg md:pt-2'>{priceLabel}</p>
                          )}
                        </dd>
                      </div>
                      {hasImage && (
                        <div className='bg-muted shrink-0 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl'>
                          <img
                            src={item.image}
                            alt={item.name[lang]}
                            loading='lazy'
                            className='max-h-24 w-full transition-transform duration-200 group-hover:scale-105 md:max-h-40'
                          />
                        </div>
                      )}
                    </button>
                  )
                })}
              </dl>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className='bg-background/80 fixed inset-0 z-100 flex items-end justify-center backdrop-blur-sm md:items-center'
          role='dialog'
          aria-modal='true'
          onClick={() => closeModal()}
        >
          <div
            className={cn(
              'bg-card relative max-h-full w-full max-w-2xl overflow-hidden rounded-t-3xl shadow-2xl transition-transform duration-300 md:rounded-3xl',
              isModalVisible ? 'translate-y-0' : 'translate-y-full sm:translate-y-0'
            )}
            style={{ transform: mobileModalTransform, transition: isDragging ? 'none' : undefined }}
            onClick={event => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
          >
            <Button
              variant='secondary'
              size='icon'
              onClick={() => closeModal()}
              aria-label={t('menu.modal.close')}
              className='bg-background/80 absolute top-5 right-5 rounded-full shadow-lg backdrop-blur transition hover:scale-105'
            >
              <XIcon className='size-5' />
            </Button>
            <div className='h-auto max-h-[90vh] overflow-y-scroll'>
              <div className='w-full overflow-hidden'>
                {selectedItem.plate.image && (
                  <img
                    src={selectedItem.plate.image}
                    alt={selectedItem.plate.name[lang]}
                    className='h-full w-full object-cover'
                    loading='lazy'
                  />
                )}
              </div>
              <div className='flex flex-1 flex-col gap-4 p-6 pb-12 md:pb-8'>
                <div className='space-y-1'>
                  <h3 className='max-w-[90%] text-2xl font-semibold sm:text-3xl'>{selectedItem.plate.name[lang]}</h3>

                  <div className='flex justify-between'>
                    <span className='text-primary text-xl font-semibold'>
                      {formatter.format(selectedItem.plate.price)}
                    </span>
                    <span className='text-muted-foreground font-normal'> {selectedItem.plate.weight}</span>
                  </div>
                  <p className='text-muted-foreground text-base sm:text-lg'>{selectedItem.plate.description[lang]}</p>
                  {selectedItem.plate.nutrition && (
                    <p className='text-muted-foreground/80 text-xs leading-relaxed'>{selectedItem.plate.nutrition}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
