<template>
    <div class="container-fluid part part5">
        <h3 class="text-center text-white">SOME OF OUR CLIENTS</h3>
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
            new Swiper('.part5 .swiper-container', {
                virtualTranslate:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        }
    }
</script>
<style lang="scss">
    .part5{
        height: auto;
        background: url("../../assets/img/clients-bg.jpg");
        background-attachment: fixed;
        background-size: 100%;
        .swiper-slide{
            height: 300px;
        }
    }
</style>