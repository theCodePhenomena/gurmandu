import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ui, type Locale } from '@/i18n/ui'
import type { FeaturedDish } from '@/assets/data/popular-dishes'

const PopularDishes = ({
  popularDishes,
  lang = 'ro'
}: {
  popularDishes: FeaturedDish[]
  lang?: Locale
}) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]
  return (
    <section
      id='popular-dishes'
      className='before:bg-muted relative py-8 before:absolute before:inset-0 before:-z-10 before:-skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <Badge variant='outline' className='text-sm font-normal'>
            {t('featured.badge')}
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('featured.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('featured.subtitle')}</p>
        </div>

        {/* Dishes */}
        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3'>
          {popularDishes.map(dish => (
            <Card
              key={dish.name.ro}
              className='hover:border-primary overflow-hidden rounded-lg py-0 shadow-none transition-colors duration-300'
            >
              <CardContent className='px-0'>
                <div className='bg-muted'>
                  <img src={dish.image} alt={dish.alt} className='aspect-[4/3] w-full object-cover' loading='lazy' />
                </div>
                <div className='space-y-3 px-6 py-5'>
                  <div className='flex items-baseline justify-between gap-2'>
                    <CardTitle className='text-lg'>{dish.name[lang]}</CardTitle>
                    <span className='text-muted-foreground text-sm'>{dish.weight}</span>
                  </div>
                  <Separator />
                  <p className='text-muted-foreground line-clamp-4 text-sm'>{dish.description[lang]}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDishes
