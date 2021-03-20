import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Basic from '../views/Basic.vue';
import DataBindingHtml from '../views/DataBindingHtml.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/basic',
        name: 'Basic',
        component: Basic,
    },
    {
        path: '/dataBindingHtml',
        name: 'DataBindingHtml',
        component: DataBindingHtml,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },

    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import(/* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Contact.vue'),
    },
    {
        path: '/example',
        name: 'Example',
        component: () =>
            import(/* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Example.vue'),
    },
    {
        path: '/example2',
        name: 'Example2',
        component: () =>
            import(/* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Example2.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
