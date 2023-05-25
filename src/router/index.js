import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Rate from '../components/Rate.vue'
import Popular from '../components/Popular.vue'
import Page404 from '../components/Page404.vue'
import Canvas from '../components/Canvas.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component : Home,
            name: 'home'
        },
    
        {
            path: '/about/:movieid',
            component: About,
            name: 'about',
            props: true
        },

        {
            path: '/rate',
            component : Rate,
            name: 'rate'
        },
    
        {
            path: '/popular',
            component : Popular,
            name: 'popular'
        },

        {
            path: '/:path(.*)*',
            component : Page404,
            name:'page404'
        },
        
        {
            path: '/canvas',
            component : Canvas,
            name:'canvas'
        },

    ]
})

export default router;