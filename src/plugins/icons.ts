import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Solo iconos que realmente necesites globalmente (si los hay)
import {
  faEnvelope,
  faUser,
  faCodeBranch,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

// Agrega solo iconos globales
library.add(
  faEnvelope,
  faUser,
  faCodeBranch,
  faLaptopCode,
  faGithub,
  faLinkedin,
  faTwitter
)

// Crea un plugin instalable
export default {
  install(app: App) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  },
}
