import "@babel/polyfill";
import "mutationobserver-shim";
import {createApp} from 'vue'
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/styles.css";

createApp(App).use(router).mount('#app');

