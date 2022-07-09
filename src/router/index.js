import { createRouter,createWebHistory } from "vue-router";

import Home from '../page/Home'
import Bangumi from '../page/Bangumi'
import Article from '../page/Article'

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component: Home,
        },
        {
            path:'/logo',
            redirect: '/'
        },
        {
            path:'/home',
            redirect: '/'
        },
        {
            path:'/article',
            component: Article,
        },
        {
            path:'/bangumi',
            component: Bangumi,
        },
    ]
})

