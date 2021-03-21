import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import mixin from './mixin.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import i18nPlugin from './plugins/i18n.js';
import store from './store.js';

const i18nPluginString = {
    en: {
        hi: 'Hello!',
    },

    ko: {
        hi: '안녕',
    },
};

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.use(i18nPlugin, i18nPluginString);
app.use(store);
app.mixin(mixin);
app.directive('focus', {
    mounted(el) {
        el.focus();
    },
});

app.mount('#app');
