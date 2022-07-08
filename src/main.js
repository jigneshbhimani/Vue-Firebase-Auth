import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCJ0CyvLRfDNV85381s3f3oX4qcGf05x08",
  authDomain: "vue-firebase-auth-50a19.firebaseapp.com",
  projectId: "vue-firebase-auth-50a19",
  storageBucket: "vue-firebase-auth-50a19.appspot.com",
  messagingSenderId: "124042734641",
  appId: "1:124042734641:web:d608f7fc23ab8ce3f33910",
  measurementId: "G-Q7B4W0DZ84",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
