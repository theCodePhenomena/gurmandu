import { Card, CardContent } from '@/components/ui/card'
import { ui, type Locale } from '@/i18n/ui'

const IMAGES = [
  {
    src: '/images/location-interior.webp',
    alt: { ro: 'Interior GurMANDU Decebal', en: 'GurMANDU Decebal interior' }
  },
  {
    src: '/images/location-exterior.webp',
    alt: { ro: 'Exterior GurMANDU Decebal', en: 'GurMANDU Decebal exterior' }
  }
] as const

const LocationSection = ({ lang = 'ro' }: { lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  return (
    <section
      id='location'
      className='relative scroll-mt-40 py-8 before:absolute before:inset-0 before:-z-10 before:bg-muted/40 before:skew-y-3 sm:py-16 lg:scroll-mt-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center'>
          <div className='mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 text-center'>
            <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('location.title')}</h2>
          </div>

          <div className='grid gap-6 sm:grid-cols-2'>
            {IMAGES.map(image => (
              <div key={image.src} className='group block h-full focus:outline-none'>
                <Card className='hover:border-primary group-focus-visible:ring-primary group-hover:border-primary h-full overflow-hidden rounded-2xl py-0 shadow-none transition-colors duration-300 group-focus-visible:ring-2'>
                  <CardContent className='px-0'>
                    <div className='bg-muted overflow-hidden'>
                      <img
                        src={image.src}
                        alt={image.alt[lang]}
                        className='aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
