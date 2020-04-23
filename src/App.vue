<template>
  <div id="app">
    <TabBar>
        <TabBarItem path="/home">
            <div slot="item-icon"><img src="./assets/img/tabbar/home.png" alt=""></div>
            <div slot="item-icon_active"><img src="./assets/img/tabbar/home_active.png" alt=""></div>
            <div slot="tem-text">首页</div>
        </TabBarItem>
        <TabBarItem path="/category">
            <div slot="item-icon"><img src="./assets/img/tabbar/category.png" alt=""></div>
            <div slot="item-icon_active"><img src="./assets/img/tabbar/category_active.png" alt=""></div>
            <div slot="tem-text">分类</div>
        </TabBarItem>
        <TabBarItem path="/cart">
            <div slot="item-icon"><img src="./assets/img/tabbar/cart.png" alt=""></div>
            <div slot="item-icon_active"><img src="./assets/img/tabbar/cart_active.png" alt=""></div>
            <div slot="tem-text">购物车</div>
        </TabBarItem>
        <TabBarItem path="/profile">
            <div slot="item-icon"><img src="./assets/img/tabbar/profile.png" alt=""></div>
            <div slot="item-icon_active"><img src="./assets/img/tabbar/profile_active.png" alt=""></div>
            <div slot="tem-text">我的</div>
        </TabBarItem>
    </TabBar>
     <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
