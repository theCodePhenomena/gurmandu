import { Separator } from '@/components/ui/separator'
import { ANPC_LINKS } from '@/consts'
import { ui, type Locale } from '@/i18n/ui'

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
          <a href='#home' className='hover:underline'>
            GurMANDU®
          </a>
          . {t('footer.rights')}
        </p>
      </div>

      <div className='border-t bg-white'>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:px-6'>
          <a href={ANPC_LINKS.sal} target='_blank' rel='nofollow noopener noreferrer'>
            <img
              src='https://kitamaru.ro/images/anpc/anpc-sal.svg'
              alt='Soluționarea Alternativă a Litigiilor'
              className='inline-block w-50 sm:w-[250px]'
              loading='lazy'
            />
          </a>
          <a href={ANPC_LINKS.sol} target='_blank' rel='nofollow noopener noreferrer'>
            <img
              src='https://kitamaru.ro/images/anpc/anpc-sol.svg'
              alt='Soluționarea Online a Litigiilor'
              className='inline-block w-50 sm:w-[250px]'
              loading='lazy'
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
