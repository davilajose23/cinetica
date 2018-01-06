// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'


// var firebase = require("firebase");

// var config = {
//   apiKey: "AIzaSyDD8VJ9Q808e68EMRCp0KebZJtp-xePf3k",
//   authDomain: "cinetica-be7df.firebaseapp.com",
//   databaseURL: "https://cinetica-be7df.firebaseio.com",
//   projectId: "cinetica-be7df",
//   storageBucket: "cinetica-be7df.appspot.com",
//   messagingSenderId: "838452908084"
// };

// firebase.initializeApp(config);

var VueFire = require('vuefire')
var firebase = require('firebase')



Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueFire)

import routes from './routes'
const router = new VueRouter({ routes, mode:'history' })

const app = new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
  router
})
