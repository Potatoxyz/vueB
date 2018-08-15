<template>
    <div class="c-container">
    <div id="banner-top">
        <div class="row">
            <div class="col-lg-3 lh icon-wrap flex-center">
                <span class="fa fa-qq mr-2 "></span>
                <span class="fa fa-quora mr-2 "></span>
                <span class="fa fa-github mr-2 "></span>
                <span class="fa fa-opera mr-2 "></span>
            </div>
            <div class="col-lg-6">
                <h3 class="lh text-center title">BUSINESS STRATEGY</h3>
            </div>
            <div class="col-lg-3 flex-center right-info">
                <div class="row justify-content-end">
                        <span class="fa fa-phone mr-2 lh primary-text"></span>
                        <p class="d-inline lh mr-3">123-456789</p>
                        <span class="fa fa-envelope mr-2 lh primary-text"></span>
                        <p class="d-inline lh">mail.example.com</p>

                </div>
            </div>
        </div>
    </div>
    <div class="banner-wrap">
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide slide1">
                    <div class="overlay-wrap">
                        <h3>Good</h3>
                        <p>good good</p>
                    </div>
                </div>
                <div class="swiper-slide slide2">
                    <div class="overlay-wrap">
                        <h3>Luck</h3>
                        <p>good good</p>
                    </div>
                </div>
                <div class="swiper-slide slide3">
                    <div class="overlay-wrap">
                        <h3>You</h3>
                        <p>good good</p>
                    </div>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
        <b-navbar toggleable="md" type="dark" variant="dark">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-collapse is-nav id="nav_collapse" class="justify-content-center">
                <b-navbar-nav>
                    <!--<b-nav-item href="#" v-bind:class="{'active':true}">Link</b-nav-item>-->
                    <b-nav-item href="#"  v-for="(item ,index) in Nav"
                                v-bind:key="item.id"
                                @click="doLink(index)"
                                :class="{'active':index==activeNav}">{{item.title}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
    import Swiper from 'swiper/dist/js/swiper';

    export default {
        name: 'banner',
        data () {
            return{
                Nav:[
                    {id:1,title:'Home'},
                    {id:2,title:'About'},
                ],
                activeNav:0
            }
        },
        methods: {
            doLink:function (index) {
                this.activeNav=index;
            }
        },
        mounted:function () {
            new Swiper('.swiper-container', {
                // Optional parameters
                loop: true,
                speed: 800,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                effect: 'fade'
            })
        }
    }
</script>
<style lang="scss">
    @import "../public";
    .c-container{
        .swiper-button-prev, .swiper-button-next{
            width: 40px;
        }
        .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
            background: url("../../assets/img/left.png") no-repeat;
            left: 20px;
        }
        .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
            background: url("../../assets/img/right.png") no-repeat;
            right: 20px;
        }
        .swiper-slide{
            height: 800px;
            width:100%;
            position: relative;
            .overlay-wrap{
                position: absolute;
                left:15%;
                right: 15%;
                bottom:30%;
                color: white;
                p{
                    margin-bottom: 0;
                    text-align: center;
                    background: rgba(0,0,0,.5);
                    border-radius: 5px;
                    padding: 15px;
                }
                h3{
                    color: #ffffff;
                    font-size: 40px;
                    background: rgba(20, 82, 82, 0.49);
                    padding: 10px;
                    width: 30%;
                    margin: 0 auto;
                    letter-spacing: 6px;
                    text-align: center;
                }
            }
            @for $i from 1 through 3{
                &.slide#{$i}{
                    background: url("../../assets/img/#{$i}.jpg") no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            }
        }
    }
    #banner-top{
        position: absolute;
        top:0;
        width: 100%;
        height: auto;
        z-index: 999;
        padding:0.5rem;
        background: rgba(255,255,255,.6);
        .right-info{
            .fa{
                line-height: 24px;
            }
        }
        .row{
            margin: 0;
        }
        .lh{
            margin-bottom: 0;
        }
        .title{
            font-family: 'Philosopher', sans-serif;
            font-size: 43px;
            text-decoration: none;
            color: #005858;
            letter-spacing: 4px;
        }
        p{
            margin-bottom: 0;
        }
        .icon-wrap{
            span{
                display: inline-block;
                color:white;
                padding: 8px;
                font-size: 15px;
                background: $title;
                transition: all ease 0.8s;
                border:1px solid transparent;
                cursor: pointer;
                &:hover{
                    background: white;
                    color:black;
                    border:1px solid $title;
                }
            }
        }
    }
    .navbar{
        padding:0;
    }
    #nav_collapse  .nav-item{
        padding:5px 25px;
        letter-spacing: 2px;
        a{
            color:$title;
        }
        &.active{
            background: $primary;
            a{
                color:white;
            }
        }
    }
</style>