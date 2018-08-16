<template>
    <div class="container-fluid part part5">
        <h3 class="text-center text-white part-title">SOME OF OUR CLIENTS</h3>
        <div class="swiper-container" id="banner2">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide ">
                    <img src="../../assets/img/c1.png" alt="">
                </div>
                <div class="swiper-slide ">
                    <img src="../../assets/img/c2.png" alt="">
                </div>
                <div class="swiper-slide ">
                    <img src="../../assets/img/c3.png" alt="">
                </div>
                <div class="swiper-slide ">
                    <img src="../../assets/img/c4.png" alt="">
                </div>
            </div>
            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper/dist/js/swiper';
    export default {
        name: 'part5',
        mounted:function () {
            new Swiper('#banner2', {
                slidesPerView: 4,
                loop:true,
                autoplay:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    992: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 1,
                    }
                }
            })
        }
    }
</script>
<style lang="scss">
    @import "../common.scss";
    .part5{
        height: auto;
        background: url("../../assets/img/clients-bg.jpg");
        background-attachment: fixed;
        background-size: 100%;
        #banner2{
            width: 85%;
            .swiper-wrapper{
                .swiper-slide{
                    height: 300px;
                    background: transparent;
                    @include flex-center;
                }
            }
        }
    }
</style>