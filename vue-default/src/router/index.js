import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Basic from '../views/Basic/Basic.vue';
import DataBindingHtml from '../views/Basic/DataBindingHtml.vue';

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
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Contact.vue'
            ),
    },
    {
        path: '/example',
        name: 'Example',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Example.vue'
            ),
    },
    {
        path: '/example2',
        name: 'Example2',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Example2.vue'
            ),
    },
    {
        path: '/example3',
        name: 'Example3',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Example3.vue'
            ),
    },
    {
        path: '/listRender',
        name: 'ListRender',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/ListRender.vue'
            ),
    },
    {
        path: '/render',
        name: 'Render',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Render.vue'
            ),
    },
    {
        path: '/event',
        name: 'Event',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Event.vue'
            ),
    },
    {
        path: '/computed',
        name: 'Computed',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Computed.vue'
            ),
    },
    {
        path: '/watch',
        name: 'Watch',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Basic/Watch.vue'
            ),
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/BasicLastPage/Search.vue'
            ),
    },
    {
        path: '/save',
        name: 'Save',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/BasicLastPage/Save.vue'
            ),
    },
    {
        path: '/serverData',
        name: 'ServerData',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/ApiCall/ServerData.vue'
            ),
    },
    {
        path: '/example4',
        name: 'Example4',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Component/Example4.vue'
            ),
    },
    {
        path: '/slot',
        name: 'SlotModalUse',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Slot/SlotModalUse.vue'
            ),
    },
    {
        path: '/provide',
        name: 'ProvideInject',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Provide/ProvideInject.vue'
            ),
    },
    {
        path: '/mixin',
        name: 'MixinTest',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Mixin/MixinTest.vue'
            ),
    },
    {
        path: '/directive',
        name: 'CustomDirective',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/CustomDirectives/CustomDirective.vue'
            ),
    },
    {
        path: '/plugin',
        name: 'Plugins',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Plugins/Plugins.vue'
            ),
    },
    {
        path: '/calcul',
        name: 'Calculator',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/Calculator.vue'
            ),
    },
    {
        path: '/composition',
        name: 'Composition',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/Composition.vue'
            ),
    },
    {
        path: '/composition2',
        name: 'Composition2',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/Composition2.vue'
            ),
    },
    {
        path: '/composition3',
        name: 'Composition3',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/Composition3.vue'
            ),
    },
    {
        path: '/composition4',
        name: 'Composition4',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/Composition4.vue'
            ),
    },
    {
        path: '/compositionProvide',
        name: 'CompositionProvide',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Composition/CompositionProvide.vue'
            ),
    },
    {
        path: '/vuex',
        name: 'StoreAccess',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Store/StoreAccess.vue'
            ),
    },
    {
        path: '/kakaologin',
        name: 'KaKaoLogin',
        component: () =>
            import(
                /* webpackChunkName: "contact" , webpackPrefetch:true*/ '../views/Login/KaKaoLogin.vue'
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
