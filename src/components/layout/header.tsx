'use client'

import { useEffect, useState } from 'react'

import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'
import type { LocalizedNavItem } from '@/assets/data/header'

import { cn } from '@/lib/utils'
import { locales, type Locale } from '@/i18n/ui'

// Inline active section hook
const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersectingSections = entries.filter(entry => entry.isIntersecting)

        if (intersectingSections.length === 0) {
          setActiveSection('')
        } else {
          const mostVisible = intersectingSections.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          )

          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}

type HeaderProps = {
  navigationData: LocalizedNavItem[]
  className?: string
  lang?: Locale
}

const Header = ({ navigationData, className, lang = 'ro' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const localizedNav: NavigationSection[] = navigationData.map(item => ({
    title: item.title[lang],
    href: item.href
  }))

  // Extract section IDs from navigation data - only include valid sections
  const sectionIds = localizedNav.map(item => item.href?.replace('#', '')).filter(Boolean) as string[]

  // Only use active section if it's actually in our navigation list
  const detectedActiveSection = useActiveSection(sectionIds)
  const activeSection = sectionIds.includes(detectedActiveSection) ? detectedActiveSection : ''

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

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-16 w-full border-b transition-all duration-300',
        {
          'bg-background shadow-md': isScrolled
        },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a href='/#home' className='flex items-center'>
          <img src='/images/gurmandu-logo.png' alt='GurMANDU' className='h-16 w-auto' />
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
          <MenuDropdown
            align='end'
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
    </header>
  )
}

export default Header
