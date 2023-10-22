import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faMoon, faSun, faUserSecret, faLink} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

import customIcon from './dvic.png'


library.add(faUserSecret,faFacebook,faLinkedin,faInstagram,faGithub,faTwitter, faMoon, faSun, faEnvelope, faLink)


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

