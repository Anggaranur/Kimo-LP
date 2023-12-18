import './assets/main.css'
import './assets/style.css'

import VueSmoothScroll from 'vue3-smooth-scroll'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)


app.use(router);
app.use(VueSmoothScroll, {
  duration: 1000000,
  updateHistory: false
})

app.mount('#myApp');
