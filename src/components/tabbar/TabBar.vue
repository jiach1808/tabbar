<template>
    <div id="tab-bar">
<!--        <div class="tab-bar-item">-->
<!--            <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--            <div>首页</div>-->
<!--        </div>-->
<!--        <div class="tab-bar-item">-->
<!--            <img src="../../assets/img/tabbar/category.png" alt="">-->
<!--            <div>分类</div>-->
<!--        </div>-->
<!--        <div class="tab-bar-item">-->
<!--            <img src="../../assets/img/tabbar/cart.png" alt="">-->
<!--            <div>购物车</div>-->
<!--        </div>-->
<!--        <div class="tab-bar-item">-->
<!--            <img src="../../assets/img/tabbar/profile.png" alt="">-->
<!--            <div>我的</div>-->
<!--        </div>-->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {}
    }
</script>


<style scoped>
@import "../../assets/css/base.css";
    #tab-bar{
        display: flex;
        position:fixed;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #ddd;
        height: 49px;
        text-align: center;
    }
/*   .tab-bar-item{*/
/*       flex:1;*/
/*   }*/
/*.tab-bar-item img{*/
/*    width:24;*/
/*    height: 24px;*/
/*}*/
</style>
