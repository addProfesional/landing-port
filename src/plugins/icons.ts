import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa los íconos que quieras usar globalmente
import {
  faSun,
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

// Agrega todos a la librería global
library.add(
  faSun,
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
