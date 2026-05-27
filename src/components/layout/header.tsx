'use client'

import { useEffect, useMemo, useState } from 'react'

import { FacebookIcon, InstagramIcon, MapPinIcon, MenuIcon, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MobileMenu from '@/components/blocks/mobile-menu'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'
import type { LocalizedNavItem } from '@/assets/data/header'

import { SOCIAL_LINKS } from '@/consts'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
    <path d='M21 8.5a8.5 8.5 0 0 1-5-1.6V16a6 6 0 1 1-6-6c.34 0 .68.03 1 .09v3.16a2.9 2.9 0 1 0 2 2.75V2h3a5.5 5.5 0 0 0 5 5.5z' />
  </svg>
)

import { cn } from '@/lib/utils'
import { locales, type Locale } from '@/i18n/ui'

const getHeaderOffset = () => (window.matchMedia('(min-width: 1024px)').matches ? 84 : 160)

const useScrollSpy = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (sectionIds.length === 0) return

    const calculateActiveSection = () => {
      const offset = getHeaderOffset()
      const scrollPosition = window.scrollY + offset + 1
      let current = sectionIds[0]

      sectionIds.forEach(id => {
        const element = document.getElementById(id)

        if (!element) return

        if (scrollPosition >= element.offsetTop) {
          current = id
        }
      })

      setActive(current)
    }

    calculateActiveSection()
    const onScroll = () => calculateActiveSection()
    const onResize = () => calculateActiveSection()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [sectionIds])

  return active
}

type HeaderProps = {
  navigationData: LocalizedNavItem[]
  className?: string
  lang?: Locale
}

const Header = ({ navigationData, className, lang = 'ro' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const prefix = lang === 'ro' ? '' : `/${lang}`

  const localizeHref = (href: string) => {
    if (!href || href.startsWith('#') || href.startsWith('http')) return href
    if (href === '/') return prefix || '/'
    if (href.startsWith('/#')) return `${prefix}${href}`

    return `${prefix}${href}`
  }

  const localizedNav: NavigationSection[] = useMemo(
    () =>
      navigationData.map(item => ({
        title: item.title[lang],
        href: localizeHref(item.href)
      })),
    [navigationData, lang]
  )

  const sectionIds = useMemo(
    () =>
      localizedNav
        .map(item => {
          if (!item.href) return undefined
          if (item.href.startsWith('#')) return item.href.slice(1)
          const hashIndex = item.href.indexOf('#')

          if (hashIndex === -1) return undefined

          return item.href.slice(hashIndex + 1)
        })
        .filter(Boolean) as string[],
    [localizedNav]
  )

  const activeSection = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!activeSection) return
    const hash = `#${activeSection}`

    if (window.location.hash === hash) return
    history.replaceState(null, '', hash)
  }, [activeSection])

  const phoneHref = 'tel:+40730376165'
  const mapHref = 'https://www.google.com/maps/dir/?api=1&destination=Bulevardul+Decebal+20%2C+Bucure%C8%99ti'

  return (
    <header
      className={cn(
        'bg-background fixed top-0 z-50 w-full border-b transition-all duration-300',
        {
          'shadow-md': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between gap-3 pt-2 pb-0.5 lg:hidden'>
          <div className='flex items-center gap-2'>
            <a
              href={SOCIAL_LINKS.instagram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='bg-muted/60 text-foreground hover:bg-muted focus-visible:ring-primary rounded-full p-2.5 transition focus:outline-none focus-visible:ring-2'
            >
              <InstagramIcon className='size-[18px]' />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className='bg-muted/60 text-foreground hover:bg-muted focus-visible:ring-primary rounded-full p-2.5 transition focus:outline-none focus-visible:ring-2'
            >
              <FacebookIcon className='size-[18px]' />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='TikTok'
              className='bg-muted/60 text-foreground hover:bg-muted focus-visible:ring-primary rounded-full p-2.5 transition focus:outline-none focus-visible:ring-2'
            >
              <TikTokIcon className='size-[18px]' />
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <a
              href={phoneHref}
              aria-label='Call GurMANDU'
              className='bg-muted/60 text-foreground hover:bg-muted focus-visible:ring-primary rounded-full p-2.5 transition focus:outline-none focus-visible:ring-2'
            >
              <PhoneIcon className='size-[18px]' />
            </a>
            <a
              href={mapHref}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Get directions to GurMANDU'
              className='bg-muted/60 text-foreground hover:bg-muted focus-visible:ring-primary rounded-full p-2.5 transition focus:outline-none focus-visible:ring-2'
            >
              <MapPinIcon className='size-[18px]' />
            </a>
          </div>
        </div>

        <div className='flex h-28 items-center justify-between gap-6'>
          {/* Logo */}
          <a href='#home' className='-ml-4 flex items-center md:ml-0'>
            <img src='/images/gurmandu-logo.png' alt='GurMANDU' className='h-28 w-auto' />
          </a>

          {/* Navigation */}
          <MenuNavigation
            navigationData={localizedNav}
            activeSection={activeSection}
            className='**:data-[slot=navigation-menu-list]:gap-1 max-lg:hidden'
          />

          {/* Actions */}
          <div className='flex items-center gap-2'>
            <div
              aria-label='Language'
              className='bg-muted/60 flex items-center gap-0.5 rounded-full p-0.5 text-xs font-semibold'
            >
              {locales.map(loc => {
                const isCurrent = loc === lang
                const href = loc === 'ro' ? '/' : `/${loc}/`

                return (
                  <a
                    key={loc}
                    href={href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-2.5 py-1 tracking-wide uppercase transition select-none',
                      isCurrent
                        ? 'bg-background text-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {loc}
                  </a>
                )
              })}
            </div>
            {/* Mobile menu button */}
            <MobileMenu
              navigationData={localizedNav}
              activeSection={activeSection}
              trigger={
                <Button variant='outline' size='icon' className='ml-3 rounded-full lg:hidden'>
                  <MenuIcon />
                  <span className='sr-only'>Menu</span>
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
