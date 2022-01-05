import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
require('vue-ionicons/ionicons.css')

createApp(App)
    .use(store)
    .use(router)
    .use(AllIosIcon)
    .mount("#app");
