import { createApp } from 'vue'
import mdi from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import App from './App.vue'

createApp(App).use(mdi, {
  icons: mdijs
}).mount('#app')
