import Vue from '../assets/js/vue.js';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css';

import 'swiper/dist/css/swiper.css';


import Index from '../components/part/index.vue';
new Vue({
    el:'#app',
    mounted:function () {
        console.log('init success');
    },
    template:"<Index></Index>",
    components:{
        Index
    }
});