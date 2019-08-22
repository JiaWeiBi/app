import Vue from 'vue'

import waterfall from 'vue-waterfall2'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './plugins/router';

Vue.config.productionTip = false

Vue.use(waterfall)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
