import { defaultLang, locales, ui, type Locale, type UIKey } from './ui'

export function getLangFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1]
  if ((locales as readonly string[]).includes(seg)) return seg as Locale
  return defaultLang
}

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

export function localizedPath(path: string, lang: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (lang === defaultLang) return clean
  return `/${lang}${clean === '/' ? '' : clean}`
}

export function alternateLangPath(url: URL, target: Locale): string {
  let path = url.pathname
  for (const l of locales) {
    if (path.startsWith(`/${l}/`)) {
      path = path.slice(l.length + 1)
      break
    }
    if (path === `/${l}`) {
      path = '/'
      break
    }
  }
  return localizedPath(path || '/', target)
}
