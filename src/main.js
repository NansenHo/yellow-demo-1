import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import {Button, Icon, ButtonGroup} from 'yellow'
import 'yellow/dist/index.css'

Vue.config.productionTip = false
Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);

new Vue({
  render: h => h(App),
}).$mount('#app')
