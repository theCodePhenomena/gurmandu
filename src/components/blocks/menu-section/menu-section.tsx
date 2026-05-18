import { useEffect, useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { PlateCategory } from '@/assets/data/menu'
import { siteLang, siteCurrency } from '@/assets/data/menu'

type MenuSectionProps = {
  plateCategories: PlateCategory[]
}

const MenuSection = ({ plateCategories }: MenuSectionProps) => {
  const [activeSlug, setActiveSlug] = useState<string>(plateCategories[0]?.slug ?? '')
  const navRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const isNavigatingByClick = useRef(false)
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const formatter = new Intl.NumberFormat(siteLang.replace('_', '-'), {
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

    const hash = window.location.hash.substring(1)

    if (hash && plateCategories.some(c => c.slug === hash)) {
      setActiveSlug(hash)
    }

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
            Menu
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>Our menu</h2>
          <p className='text-muted-foreground text-xl'>
            We offer a variety of dishes, from traditional to modern, that are sure to satisfy your cravings.
          </p>
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
                      {cat.prettyName}
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
                <h3 className='text-primary/80 text-2xl font-semibold md:text-3xl'>{cat.prettyName}</h3>
                <p className='text-muted-foreground'>{cat.description}</p>
              </div>

              <dl className='mx-auto max-w-5xl'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-32'>
                  {cat.plates.map(item => (
                    <div key={item.name}>
                      <dt>
                        <div className='flex items-center justify-between'>
                          <span className='text-2xl font-bold tracking-wide'>{item.name}</span>
                          <span className='text-lg font-medium'>{formatter.format(item.price)}</span>
                        </div>
                      </dt>
                      <dd>
                        <p className='text-muted-foreground mt-2 leading-normal tracking-wide text-balance'>
                          {item.description}
                        </p>
                      </dd>
                    </div>
                  ))}
                </div>
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
