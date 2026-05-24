import { ArrowRightIcon } from 'lucide-react'

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ui, type Locale } from '@/i18n/ui'
import type { FeaturedDish } from '@/assets/data/popular-dishes'

const PopularDishes = ({ popularDishes, lang = 'ro' }: { popularDishes: FeaturedDish[]; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  return (
    <section
      id='popular-dishes'
      className='relative py-8 before:absolute before:inset-0 before:-z-10 before:-skew-y-3 sm:py-16 lg:py-24'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('featured.title')}</h2>
          <p className='text-muted-foreground text-xl'>{t('featured.subtitle')}</p>
        </div>

        {/* Dishes */}
        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3'>
          {popularDishes.map(dish => (
            <a
              key={dish.name.ro}
              href={`#${dish.category.slug}`}
              aria-label={`${dish.category.name[lang]} — ${dish.name[lang]}`}
              className='group block focus:outline-none'
            >
              <Card className='hover:border-primary group-focus-visible:ring-primary flex h-full flex-col overflow-hidden rounded-2xl py-0 shadow-none transition-colors duration-300 group-focus-visible:ring-2'>
                <CardContent className='flex h-full flex-col px-0'>
                  <div className='bg-muted overflow-hidden'>
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      className='aspect-3/2 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      loading='lazy'
                    />
                  </div>
                  <div className='flex flex-1 flex-col space-y-3 px-6 py-5'>
                    <div className='flex items-baseline justify-between gap-2'>
                      <CardTitle className='text-lg'>{dish.name[lang]}</CardTitle>
                      <span className='text-muted-foreground text-sm'>{dish.weight}</span>
                    </div>
                    <Separator />
                    <p className='text-muted-foreground line-clamp-4 text-sm'>{dish.description[lang]}</p>
                    <span className='text-primary mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium'>
                      {`${t('about.cta')}: ${dish.category.name[lang]}`}
                      <ArrowRightIcon className='size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDishes
