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
const TAKEAWAY_LABEL = { ro: 'Comenzi cu ridicare:', en: 'Pickup orders:' } as const

const DeliverySection = ({ deliveryOptions, lang = 'ro' }: { deliveryOptions: DeliveryOption; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]
  const providers = deliveryOptions.filter(o => o.name !== 'Take Away')

  return (
    <section
      id='delivery'
      className='before:bg-muted relative py-8 before:absolute before:inset-0 before:-z-10 before:skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('delivery.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('delivery.subtitle')}</p>
        </div>

        <div className='flex flex-nowrap items-center justify-center gap-4 sm:gap-8'>
          {providers.map(option => (
            <a
              key={option.id}
              href={option.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={option.name}
              className='group focus-visible:ring-primary rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
            >
              <div
                className='bg-background ring-border/60 group-hover:ring-primary flex shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-md ring-1 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl'
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

        <p className='text-muted-foreground mt-10 text-center text-base'>
          {TAKEAWAY_LABEL[lang]}{' '}
          <a
            href={`tel:${TAKEAWAY_PHONE}`}
            className='text-primary font-semibold underline underline-offset-4 hover:opacity-80'
          >
            {TAKEAWAY_PHONE}
          </a>
        </p>
      </div>
    </section>
  )
}

export default DeliverySection
