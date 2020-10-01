import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBAUL-Ke945wMBaqW_YlnaPUXOEeIFFc88",
  authDomain: "subscription-managment.firebaseapp.com",
  databaseURL: "https://subscription-managment.firebaseio.com",
  projectId: "subscription-managment",
  storageBucket: "subscription-managment.appspot.com",
  messagingSenderId: "553337859743",
  appId: "1:553337859743:web:678540ea0f205468de7caa",
  measurementId: "G-1J80CG0ZPF",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
