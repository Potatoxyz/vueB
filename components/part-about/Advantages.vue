<template>
    <div class="container part advantages">
        <h3 class="part-title title-text text-center">Our Advantages</h3>
        <p class="light-black-text  text-center pb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        <div class="row firstRow pb-5">
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">1</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">2</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">3</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pb-5">
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">4</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">5</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 ad-wrap">
                <div class="row">
                    <div class="col-lg-2 indexIcon-wrap">
                        <span class="indexIcon">6</span>
                    </div>
                    <div class="col-lg-10 text-wrap">
                        <h4 class="title-text ">voluptate velit esse quam pariatur</h4>
                        <p class="light-black-text ">Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur eum iure reprehenderit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Advantages'
    }
</script>
<style lang="scss">
    @import "../common.scss";
        .advantages{
            .ad-wrap {
                .indexIcon-wrap{
                    padding-bottom: 15px;
                    .indexIcon{
                        display: inline-block;
                        @include size(50px,50px);
                        border-radius: 50%;
                        background: $primary;
                        @include flex-center;
                        color:white;
                    }
                }
                .text-wrap{
                    p{
                        line-height: 2;
                        font-size: 14px;
                    }
                    h4{
                        font-size: 18px;
                    }
                }
            }
            @media (max-width: 992px) {
                .indexIcon-wrap{
                    display: flex;
                    justify-content: center;
                }
                .text-wrap{
                    text-align: center;
                }
                .firstRow{
                    padding-bottom: 0!important;
                }
            }
        }
</style>