import {createRouter,createWebHistory} from 'vue-router'
import layout from '../src/layout.vue'
import bookscomponent from '../src/components/bookscomponent.vue'
import wishlistcomponent from '../src/components/wishlistcomponent.vue'
let routes=[
    {path:"/",component:layout},
    {path:"/books",component:bookscomponent},
    {path:"/wishlist",component:wishlistcomponent},
];
export let router=createRouter({
    history:createWebHistory(),
    routes,
});
 