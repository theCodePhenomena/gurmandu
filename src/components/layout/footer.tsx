import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

import { Separator } from '@/components/ui/separator'

import { footerData } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <a href='/#home' className='flex items-center'>
          <img src='/images/gurmandu-logo.png' alt='GurMANDU' className='h-12 w-auto' />
        </a>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          {footerData.map(item => (
            <a
              key={item.title}
              href={item.href}
              className='text-foreground hover:text-primary text-base! hover:bg-transparent'
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* TODO: replace `#` placeholders with real social profile URLs (Facebook, Instagram, Twitter/X, YouTube) once the client provides them. */}
        <div className='flex items-center gap-4'>
          <a href='#' aria-label='Facebook' className='hover:text-primary'>
            <FacebookIcon className='size-5' />
          </a>
          <a href='#' aria-label='Instagram' className='hover:text-primary'>
            <InstagramIcon className='size-5' />
          </a>
          <a href='#' aria-label='Twitter' className='hover:text-primary'>
            <TwitterIcon className='size-5' />
          </a>
          <a href='#' aria-label='YouTube' className='hover:text-primary'>
            <YoutubeIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6'>
        <p className='text-muted-foreground text-center text-balance'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#home' className='hover:underline'>
            GurMANDU
          </a>
          , Made with ❤️ for better web.
        </p>
      </div>
    </footer>
  )
}

export default Footer
