<template>
    <div>
        <!--@navigate="handleNavigate"-->
        <Banner  v-model="activeNavId"></Banner>
        <div :ref="Nav[0].title" style="display: none">
            <Part2></Part2>
            <Part3></Part3>
            <Part4></Part4>
            <Part5 :navItem="Nav[0]" :activeNavId="activeNavId"></Part5>
            <Concat></Concat>
        </div>
        <div :ref="Nav[1].title" style="display: none">
            <History></History>
            <Team></Team>
            <Advantages></Advantages>
            <Part5 :navItem="Nav[1]" :activeNavId="activeNavId"></Part5>
        </div>

        <div :ref="Nav[2].title" style="display: none">
            <Profile></Profile>
        </div>
        <div :ref="Nav[3].title" style="display: none">
            <Concat></Concat>
        </div>
        <PartFoot></PartFoot>
        <TopArrow></TopArrow>
    </div>
</template>
<script>
    import Banner from './part-index/banner.vue';
    import Part2 from './part-index/part2.vue';
    import Part3 from './part-index/part3.vue';
    import Part4 from './part-index/part4.vue';
    import Part5 from './part-index/part5.vue';
    import Concat from './part-index/concat.vue';
    import PartFoot from './part-index/footer.vue';
    import TopArrow from './part-index/top-arrow.vue';
    import History from './part-about/history.vue';
    import Team from './part-about/team.vue';
    import Advantages from './part-about/Advantages.vue';
    import Profile from './part-profile/profile.vue'
    import {Nav} from './navMenu.js';
    export default {
        name: 'index',
        data:function () {
            return{
                activeNavId:1,
                Nav:Nav
            }
        },
        methods:{
            handleNavigate:function (value) {
                this.activeNavId=value;
                let index=this.Nav.findIndex(v=>v.id===value);
                let target=Nav[index].title;
                this.Nav.forEach(v=>{
                    $(this.$refs[v.title]).css({"display":"none"});
                });
                $(this.$refs[target]).fadeIn();
                console.log(Nav[index].title);
            }
        },
        mounted:function () {
            this.handleNavigate(this.activeNavId);
            console.log('父值'+this.activeNavId)
        },
        watch:{
            //双向绑定监听值发生变化时的处理方法
            activeNavId:function (val) {
                this.handleNavigate(val);
            }
        },
        components:{
            Banner,
            Part2,
            Part3,
            Part4,
            Part5,
            Concat,
            PartFoot,
            TopArrow,
            History,
            Team,
            Advantages,
            Profile
        }
    }
</script>
<style lang="scss">

</style>