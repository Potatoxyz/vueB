<template>
    <div>
        <Banner></Banner>
        <Part2></Part2>
        <Part3></Part3>
    </div>
</template>
<script>
    import Banner from './banner.vue';
    import Part2 from './part2.vue';
    import Part3 from './part3.vue';
    export default {
        name: 'index',
        components:{
            Banner,
            Part2,
            Part3,
        }
    }
</script>
<style lang="scss">

</style>