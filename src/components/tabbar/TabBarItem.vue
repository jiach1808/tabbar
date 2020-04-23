<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon_active"></slot>
        </div>
        <div :style="activeStyle">
            <slot :class="{active:isActive}" name="tem-text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: '',
        data(){
            return{
              //  isActive:true
            }
        },

        props:{
            path:String,
            activeColor:{
                type:String,
                default:'#f00'
            }
        },
        methods:{
          itemClick(){
             // console.log('itemClick');
              this.$router.replace(this.path)
          }
        },
        computed:{
            isActive(){
            return   this.$route.path.indexOf(this.path) !==-1
          },
            activeStyle(){
             //  return this.isActive ? {color:this.activeColor} : {}
                return this.isActive ? {color:this.activeColor}:{}
            }
        },

        components: {}
    }
</script>


<style scoped>
    .tab-bar-item{
        flex: 1;
    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        padding-top: 5px;
    }

</style>
