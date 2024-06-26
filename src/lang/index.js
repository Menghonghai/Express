
import { createI18n } from 'vue-i18n'
import kh from './locales/kh.json'
import en from './locales/en.json'

function loadLocale() {
    const locale = [
        {English:en},
        {ភាសាខ្មែរ:kh}
    ]
    const messages={}
    locale.forEach(lang =>{
        const key = Object.keys(lang)
        messages[key]=lang[key]
    })
    return messages
}
const lang = localStorage.getItem('lang')
const i18n = createI18n({
    legacy: false,
    locale: lang ? 'English':'ភាសាខ្មែរ',
    globalInjection: true,
    messages: loadLocale()
})
export default i18n