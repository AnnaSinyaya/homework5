import Vue from 'vue'
import Router from 'vue-router'

import bookCatalog from '../components/book-catalog.vue'
import bookCreate from '../components/book-create.vue'
import bookSearch from '../components/book-search.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: bookCatalog
        },
        {
            path: '/create',
            name: 'add',
            component: bookCreate
        },
        {
            path: '/search',
            name: 'search',
            component: bookSearch
        }
    ]
});

export default router;
