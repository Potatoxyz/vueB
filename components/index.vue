<template>
    <div>
        <Banner></Banner>
        <Part2></Part2>
        <Part3></Part3>
        <Part4></Part4>
        <Part5></Part5>
        <Concat></Concat>
        <PartFoot></PartFoot>
    </div>
</template>
<script>
    import Banner from './part/banner.vue';
    import Part2 from './part/part2.vue';
    import Part3 from './part/part3.vue';
    import Part4 from './part/part4.vue';
    import Part5 from './part/part5.vue';
    import Concat from './part/concat.vue';
    import PartFoot from './part/footer.vue';
    export default {
        name: 'index',
        components:{
            Banner,
            Part2,
            Part3,
            Part4,
            Part5,
            Concat,
            PartFoot
        }
    }
</script>
<style lang="scss">

</style>