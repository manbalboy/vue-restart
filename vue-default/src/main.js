import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import mixin from './mixin.js';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2);
app.mixin(mixin);
app.directive('focus', {
    mounted(el) {
        el.focus();
    },
});

app.mount('#app');
