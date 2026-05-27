'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { FacebookIcon, InstagramIcon, MapPinIcon, PhoneIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { COMPANY_INFO, SOCIAL_LINKS } from '@/consts'
import { cn } from '@/lib/utils'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
    <path d='M21 8.5a8.5 8.5 0 0 1-5-1.6V16a6 6 0 1 1-6-6c.34 0 .68.03 1 .09v3.16a2.9 2.9 0 1 0 2 2.75V2h3a5.5 5.5 0 0 0 5 5.5z' />
  </svg>
)

type Props = {
  trigger: ReactNode
  navigationData: NavigationSection[]
  activeSection?: string
}

const MobileMenu = ({ trigger, navigationData, activeSection }: Props) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const handleNavClick = () => {
    setOpen(false)
  }

  const { telephone } = COMPANY_INFO.contactPoint
  const { streetAddress, postalCode, addressLocality } = COMPANY_INFO.address
  const addressLines = `${streetAddress}, ${postalCode} ${addressLocality}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLines)}`

  const socials = [
    { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
    { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
    { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon }
  ]

  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      />

      <aside
        role='dialog'
        aria-modal='true'
        aria-label='Mobile menu'
        className={cn(
          'bg-background fixed top-0 right-0 z-[70] flex h-dvh w-[min(88vw,420px)] flex-col shadow-2xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center justify-between border-b px-5 py-4'>
          <a href='#home' className='flex items-center' onClick={() => setOpen(false)}>
            <img src='/images/gurmandu-logo.png' alt='GurMANDU' className='h-10 w-auto' />
          </a>
          <Button variant='ghost' size='icon' className='rounded-full' onClick={() => setOpen(false)}>
            <XIcon />
            <span className='sr-only'>Close</span>
          </Button>
        </div>

        <nav className='flex-1 overflow-y-auto px-3 py-4'>
          <ul className='flex flex-col gap-1'>
            {navigationData.map(item => {
              if (!item.href) return null
              const sectionId = item.href.replace('#', '').replace(/^\//, '')
              const isActive = !!activeSection && activeSection === sectionId

              return (
                <li key={item.title}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick()}
                    className={cn(
                      'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className='border-t px-5 py-4'>
          <div className='flex flex-col gap-3 text-sm'>
            <a
              href={mapsHref}
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary flex items-start gap-2 transition-colors'
            >
              <MapPinIcon className='mt-0.5 size-4 shrink-0' />
              <span>{addressLines}</span>
            </a>
            <a
              href={`tel:${telephone}`}
              className='text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors'
            >
              <PhoneIcon className='size-4 shrink-0' />
              <span>{telephone}</span>
            </a>
          </div>

          <div className='mt-4 flex items-center gap-2'>
            {socials.map(({ label, href, Icon }) => (
              <Button key={label} asChild variant='outline' size='icon' className='rounded-full'>
                <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
                  <Icon className='size-4' />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default MobileMenu
