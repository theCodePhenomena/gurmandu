'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'

import { Button } from '@/components/ui/button'
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { ui, type Locale } from '@/i18n/ui'

export type MenuData = {
  id: number
  img: string
  imgAlt: string
  userAvatar: string
  userComment: string
}

const HeroSection = ({ menudata, lang = 'ro' }: { menudata: MenuData[]; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!mainApi) {
      return
    }

    setCurrent(mainApi.selectedScrollSnap())
    mainApi.on('select', () => {
      const selectedIndex = mainApi.selectedScrollSnap()

      setCurrent(selectedIndex)
      thumbApi?.scrollTo(selectedIndex)
    })
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!thumbApi) {
      return
    }

    thumbApi.on('select', () => {
      const selectedIndex = thumbApi.selectedScrollSnap()

      setCurrent(selectedIndex)
      mainApi?.scrollTo(selectedIndex)
    })
  }, [thumbApi, mainApi])

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index)
    },
    [mainApi]
  )

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section
      id='home'
      className='before:border-primary/20 relative flex-1 scroll-mt-40 py-12 before:absolute before:inset-0 before:-z-10 before:-skew-y-3 before:border-b sm:py-16 lg:scroll-mt-16 lg:py-24'
    >
      <div className='mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='grid grid-cols-1 lg:grid-cols-5'>
          <div className='flex w-full flex-col justify-center gap-5 max-lg:items-center lg:col-span-3 lg:h-95.5'>
            <h1 className='text-3xl leading-[1.29167] font-semibold text-balance max-lg:text-center sm:text-4xl lg:text-5xl'>
              {t('hero.title')}
            </h1>

            <p className='text-muted-foreground max-w-xl text-xl max-lg:text-center'>{t('hero.subtitle')}</p>

            <div className='flex items-center gap-3.5'>
              <Button
                asChild
                size='lg'
                className='group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              >
                <a href='#menu'>
                  {t('hero.cta.menu')}
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
            </div>
          </div>

          <Carousel
            className='w-full lg:col-span-2'
            setApi={setMainApi}
            plugins={[plugin.current]}
            opts={{
              loop: true
            }}
          >
            <CarouselContent>
              {menudata.map(item => (
                <CarouselItem key={item.id} className='flex w-full items-center justify-center'>
                  <img src={item.img} alt={item.imgAlt} className='size-95 object-contain' loading='lazy' />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <Carousel
          className='relative w-full'
          setApi={setThumbApi}
          opts={{
            loop: true
          }}
        >
          <div className='pointer-events-none absolute inset-y-0 -left-px z-[1] w-25 bg-[linear-gradient(to_right,rgb(var(--background))_0%,rgb(var(--background))_85%,transparent_100%)]' />
          <div className='pointer-events-none absolute inset-y-0 -right-px z-[1] w-25 bg-[linear-gradient(to_left,rgb(var(--background))_0%,rgb(var(--background))_85%,transparent_100%)]' />
          <CarouselContent className='my-1 flex'>
            {menudata.map((item, index) => (
              <CarouselItem
                key={item.id}
                className={cn('basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5')}
                onClick={() => handleThumbClick(index)}
              >
                <div className='relative flex h-33 items-center justify-center'>
                  <div className={cn('absolute bottom-0 -z-[1]', current === index ? 'text-primary' : 'text-border')}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='161' height='92' viewBox='0 0 161 92' fill='none'>
                      <path
                        d='M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z'
                        stroke='currentColor'
                      />
                    </svg>
                  </div>
                  <img src={item.img} alt={item.imgAlt} className='aspect-[12/9] h-5/6' loading='lazy' />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

export default HeroSection
