<template>
    <div>
        <a @click="toTop" v-bind:class="{'d-none':hide}" id="to-top" href="javascript:;"></a>
    </div>
</template>
<script>
    export default {
        name: 'arrow',
        data:function () {
          return{
              hide:false
          }
        },
        methods: {
            toTop:function () {
                $('html,body').animate({scrollTop:'0'},1000,'swing')
            }
        },
        mounted:function () {
            $(window).on('scroll', ()=> {
                let scrollTop=document.documentElement.scrollTop;
                if(scrollTop>=800){
                    this.hide=false;
                }
                else{
                    this.hide=true;
                }
            })
        }
    }
</script>
<style lang="scss">
    #to-top{
        position: fixed;
        bottom:2rem;
        right:2rem;
        background: url("../../assets/img/top-arrow.png") no-repeat;
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
</style>