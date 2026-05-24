import { FacebookIcon, InstagramIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SOCIAL_LINKS } from '@/consts'
import { ui, type Locale } from '@/i18n/ui'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className} aria-hidden='true'>
    <path d='M21 8.5a8.5 8.5 0 0 1-5-1.6V16a6 6 0 1 1-6-6c.34 0 .68.03 1 .09v3.16a2.9 2.9 0 1 0 2 2.75V2h3a5.5 5.5 0 0 0 5 5.5z' />
  </svg>
)

const links = [
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: FacebookIcon },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: TikTokIcon }
]

const SocialSection = ({ lang = 'ro' }: { lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  return (
    <section id='social' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('social.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('social.subtitle')}</p>
        </div>

        <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
          {links.map(({ label, href, Icon }) => (
            <Button key={label} asChild variant='outline' size='lg' className='rounded-full'>
              <a href={href} target='_blank' rel='noopener noreferrer'>
                <Icon className='size-5' />
                {label}
              </a>
            </Button>
          ))}
        </div>

        <p className='text-muted-foreground mt-6 text-sm'>{t('social.hashtag')}</p>
      </div>
    </section>
  )
}

export default SocialSection
