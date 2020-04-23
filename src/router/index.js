//导入路由插件
import Vue from 'vue'
 import VueRouter from "vue-router";
const Home = ()=>import('../views/home/Home')
const Category =()=>import('../views/category/Category')
const Cart =()=>import('../views/cart/Cart')
const Profile =()=>import('../views/profile/Profile')
//引用路由

Vue.use(VueRouter)

//配置路由对象
const routes =[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        component:Home
    },
    {
        path: '/category',
        component:Category
    },
    {
        path: '/cart',
        component:Cart
    },
    {
        path: '/profile',
        component:Profile
    }

]
const  router =new VueRouter({
    routes
})

export default router


