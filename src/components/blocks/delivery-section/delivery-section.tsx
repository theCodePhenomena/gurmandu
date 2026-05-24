import { Card, CardContent } from '@/components/ui/card'
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

const DeliverySection = ({ deliveryOptions, lang = 'ro' }: { deliveryOptions: DeliveryOption; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

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

        {/* Delivery Options Grid */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {deliveryOptions.map(option => (
            <Card
              key={option.id}
              className='hover:border-primary flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md'
            >
              <CardContent className='flex flex-col justify-between p-6'>
                <div className='mb-4'>
                  <div className='mb-4 inline-flex items-center justify-center rounded-lg p-3'>
                    <img src={option.logo} alt={option.name} className='h-16 w-16 object-contain' />
                  </div>
                  <h3 className='text-xl font-semibold'>{option.name}</h3>
                  <p className='text-muted-foreground mt-2 text-sm'>{option.description}</p>
                </div>

                <Button
                  asChild
                  className='w-full rounded-lg'
                  variant={option.name === 'Take Away' ? 'default' : 'outline'}
                >
                  <a
                    href={option.link}
                    target={option.name !== 'Take Away' ? '_blank' : '_self'}
                    rel='noopener noreferrer'
                  >
                    {option.name === 'Take Away' ? t('delivery.cta.call') : t('delivery.cta.order')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeliverySection
