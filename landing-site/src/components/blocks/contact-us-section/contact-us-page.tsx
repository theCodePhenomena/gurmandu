import { Clock8Icon, MapPinIcon, Mail, PhoneIcon, ShoppingBagIcon } from 'lucide-react'

import type { ContactIcon, ContactItem } from '@/assets/data/contact-us'
import { ui, type Locale } from '@/i18n/ui'

const ICONS: Record<ContactIcon, typeof Clock8Icon> = {
  clock: Clock8Icon,
  map: MapPinIcon,
  mail: Mail,
  phone: PhoneIcon,
  delivery: ShoppingBagIcon
}

const ContactUs = ({ contactInfo, lang = 'ro' }: { contactInfo: ContactItem[]; lang?: Locale }) => {
  const t = (key: keyof typeof ui.ro) => ui[lang][key]

  const renderValue = (info: ContactItem) => {
    const description = info.description[lang]
    const lines = description.split('\n')

    if (info.icon === 'phone') {
      const href = `tel:${description.replace(/\s+/g, '')}`

      return (
        <a href={href} className='underline underline-offset-4 transition-colors hover:text-primary'>
          {description}
        </a>
      )
    }

    if (info.icon === 'mail') {
      const href = `mailto:${description.trim()}`

      return (
        <a href={href} className='underline underline-offset-4 transition-colors hover:text-primary'>
          {description}
        </a>
      )
    }

    if (info.icon === 'map') {
      const href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
        description.replace(/\n/g, ', ')
      )}`

      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='underline underline-offset-4 transition-colors hover:text-primary'
        >
          {lines.map((line, idx) => (
            <span key={idx} className='block'>
              {line}
            </span>
          ))}
        </a>
      )
    }

    return lines.map((line, idx) => (
      <span key={idx} className='block'>
        {line}
      </span>
    ))
  }

  return (
    <section id='contact-us' className='scroll-mt-40 bg-muted/40 py-8 sm:py-16 lg:scroll-mt-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{t('contact.title')}</h2>
          <p className='text-xl text-muted-foreground'>{t('contact.subtitle')}</p>
        </div>

        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md max-lg:max-h-80'>
            <iframe
              title='GurMANDU location'
              src='https://www.google.com/maps?q=Bulevardul+Decebal+20,+Bucure%C8%99ti&hl=ro&z=17&output=embed'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='h-full w-full border-0'
              allowFullScreen
            />
          </div>

          <div>
            <h3 className='mb-2 text-2xl'>{lang === 'ro' ? 'Suntem aici pentru tine' : "We're here to serve you"}</h3>
            <p className='mb-8 text-lg text-muted-foreground'>{t('contact.note')}</p>

            <dl className='space-y-5'>
              {contactInfo.map((info, index) => {
                const Icon = ICONS[info.icon]

                return (
                  <div key={index} className='flex items-start gap-3'>
                    <Icon className='mt-1 size-5 shrink-0 text-primary' aria-hidden='true' />
                    <div className='flex flex-col gap-1'>
                      <dt className='text-sm font-semibold uppercase tracking-wide text-foreground'>
                        {info.title[lang]}
                      </dt>
                      <dd className='text-base text-muted-foreground'>{renderValue(info)}</dd>
                    </div>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
