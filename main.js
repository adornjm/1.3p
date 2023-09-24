import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from './components/Home.vue';
import Projects from './components/Projects.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp({});
app.use(router);
app.mount('#app');
