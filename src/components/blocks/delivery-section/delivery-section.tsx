import { PhoneIcon, ShoppingBagIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ui, type Locale } from '@/i18n/ui'

type DeliveryOption = {
  id: number
  name: string
  logo: string
  description: string
  link: string
  color: string
}[]

const TAKEAWAY_PHONE = '+40730376165'

const DeliverySection = ({ deliveryOptions, lang = 'ro' }: { deliveryOptions: DeliveryOption; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]
  const providers = deliveryOptions.filter(o => o.name !== 'Take Away')

  return (
    <section
      id='delivery'
      className='relative scroll-mt-40 py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 before:bg-muted sm:py-16 lg:scroll-mt-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('delivery.title')}</h2>
          <p className='text-xl text-muted-foreground'>{t('delivery.subtitle')}</p>
        </div>

        <div className='mx-auto grid max-w-4xl items-stretch gap-6 md:grid-cols-2'>
          {/* Order via apps (Glovo etc.) */}
          <div className='flex flex-col items-center gap-6 rounded-2xl bg-background p-6 text-center shadow-md ring-1 ring-border/60 sm:p-8'>
            <div className='flex flex-nowrap items-center justify-center gap-4 sm:gap-6'>
              {providers.map(option => (
                <a
                  key={option.id}
                  href={option.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={option.name}
                  className='group rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                >
                  <div
                    className='flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-background shadow-md ring-1 ring-border/60 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-primary'
                    style={{ width: 96, height: 96 }}
                  >
                    <img
                      src={option.logo}
                      alt={option.name}
                      width={96}
                      height={96}
                      style={{ width: 96, height: 96 }}
                      className='block rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                  </div>
                </a>
              ))}
            </div>

            <div className='mt-auto space-y-1'>
              <p className='text-sm text-muted-foreground'>{t('delivery.hours.delivery.week')}</p>
              <p className='text-sm text-muted-foreground'>{t('delivery.hours.delivery.weekend')}</p>
            </div>
          </div>

          {/* Home delivery (direct, by phone) */}
          <div className='flex flex-col items-center gap-6 rounded-2xl bg-background p-6 text-center shadow-md ring-1 ring-border/60 sm:p-8'>
            <span className='inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20'>
              <ShoppingBagIcon className='size-4' aria-hidden='true' /> {t('delivery.free')}
            </span>

            <div className='space-y-1'>
              <p className='text-sm text-muted-foreground'>{t('delivery.home.hours.week')}</p>
              <p className='text-sm text-muted-foreground'>{t('delivery.home.hours.weekend')}</p>
            </div>

            <Button asChild className='mt-auto px-10 has-[>svg]:px-10'>
              <a href={`tel:${TAKEAWAY_PHONE}`}>
                <PhoneIcon aria-hidden='true' /> {t('delivery.cta.order')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliverySection
