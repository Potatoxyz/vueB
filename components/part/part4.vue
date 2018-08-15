<template>

    <div class="container part part4">
        <h3 class="title-text w-100 text-center p-3">Our News</h3>
        <p class="w-100 text-center p-2">Duis aute irure dolor reprehenderit <span class="primary-text">in voluptate velit</span>
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
        <div class="row new-wrap">
            <div class="col-lg-6 new new-l fix-w2">
                <div class="box row p-4">
                    <h4 class="col-4 new-title">22 july</h4>
                    <div class="col-8">
                        <h4>News post-1</h4>
                        <p class="new-text">Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 new new-r fix-w2">
                <div class="box row p-4">
                    <h4 class="col-4 new-title">22 july</h4>
                    <div class="col-8">
                        <h4>News post-1</h4>
                        <p class="new-text">Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row new-wrap">
            <div class="col-lg-6 new new-l-2 fix-w2">
                <div class="box row p-4">
                    <h4 class="col-4 new-title">22 july</h4>
                    <div class="col-8">
                        <h4>News post-1</h4>
                        <p class="new-text">Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 new new-r-2 fix-w2">
                <div class="box row p-4">
                    <h4 class="col-4 new-title">22 july</h4>
                    <div class="col-8">
                        <h4>News post-1</h4>
                        <p class="new-text">Duis aute irure dolor reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'part4'
    }
</script>
<style lang="scss">
    @import "../public.scss";
    .part4{
        .new-wrap{
            .new-l{
                padding:0 100px 100px 0;
                background: url("../../assets/img/n1.jpg") no-repeat;
                background-size: auto;
                background-position: right bottom;
                border-bottom: 2px solid $primary;
            }
            .new-r{
                padding:0 0 100px 100px;
                background: url("../../assets/img/n2.jpg") no-repeat;
                background-size: auto;
                background-position: left bottom;
                border-bottom: 2px solid $title;
            }
            .new-l-2{
                padding:0 100px 100px 0;
                background: url("../../assets/img/n3.jpg") no-repeat;
                background-size: auto;
                background-position: right bottom;
                border-bottom: 2px solid $primary;
            }
            .new-r-2{
                padding:0 0 100px 100px;
                background: url("../../assets/img/n4.jpg") no-repeat;
                background-size: auto;
                background-position: left bottom;
                border-bottom: 2px solid $title;
            }
            .box{
                background: rgba(0,0,0,.54);
                color:white;
                margin: 0;
            }
            .new-title{
                color:#FF9036;
            }
            .new-text{
                color:#dcffff;
            }
            .fix-w2{
                margin: 1.5% 0;
            }
            @media (min-width: 992px) {
                .fix-w2{
                    margin: 1.5%;
                    flex-basis: 47%;
                }
            }
        }
    }
</style>