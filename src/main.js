import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import store from './store/index.js';
// Before you create app
// window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue.config.devtools = true;

var app = createApp(App).use(store).mount('#app');

// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor;
