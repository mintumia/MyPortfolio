import './bootstrap';

//import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css'
import '../css/app.css';





import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

//import Lara from '@/presets/lara';



import {createPinia} from 'pinia';

//const prime = usePrimeVue();
//prime.config.pt = Lara;

const appName = import.meta.env.VITE_APP_NAME || 'MintuApps';
const pinia = createPinia();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
           //.use(PrimeVue,{unstyled:true})
          .use(PrimeVue,{unstyled:false})
            .use(ToastService)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#a70fc7',
    },
});
