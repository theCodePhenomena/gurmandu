import { FacebookIcon, InstagramIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { footerData } from '@/assets/data/footer'
import { ui, type Locale } from '@/i18n/ui'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
    <path d='M21 8.5a8.5 8.5 0 0 1-5-1.6V16a6 6 0 1 1-6-6c.34 0 .68.03 1 .09v3.16a2.9 2.9 0 1 0 2 2.75V2h3a5.5 5.5 0 0 0 5 5.5z' />
  </svg>
)

const Footer = ({ lang = 'ro' }: { lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <Separator />

      <div className='mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-8 text-center sm:px-6'>
        <p className='text-foreground text-base font-medium text-balance'>{t('footer.tagline')}</p>
        <p className='text-muted-foreground text-sm'>{t('footer.cuisines')}</p>
        <p className='text-muted-foreground mt-4 max-w-3xl text-xs text-balance'>{t('footer.legal')}</p>
        <p className='text-muted-foreground mt-2 text-xs'>
          {`© ${new Date().getFullYear()} `}
          <a href='/#home' className='hover:underline'>
            GurMANDU®
          </a>
          . {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
