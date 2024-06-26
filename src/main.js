import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang'
// import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara'
import { gsap } from 'gsap'
// import WOW from 'wowjs'



import './vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/templatemo-chain-app-dev.css'
import './assets/css/animated.css'
import './assets/css/owl.css'
import './assets/css/fontawesome.css'
import './assets/css/card.css'
import './lang/index'
// import './vendor/bootstrap/js/bootstrap.min.js'
import './assets/vendor/jquery/jquery.min.js'
import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './assets/js/owl-carousel'
import './assets/js/imagesloaded'
import './assets/js/popup'
import './assets/js/isotope'
import './assets/js/custom'
import './assets/js/animation'
import './assets/js/card'
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(gsap)
// app.use(PrimeVue, {
//     unstyled: true,
//     pt: Lara  
// })
app.mount('#app')
