<template>
    <div class="container part part2">
        <div class="row">
            <h3 class="title-text w-100 text-center p-3">WE SPECIALIZE IN</h3>
            <p class="w-100 text-center p-2">Lorem Ipsum is simply dummy text <span class="primary-text">type setting industry</span>
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
        </div>
        <div class="row">
            <b-card class="text-center  col-md-4 fix-3w">
                <div class="icon-wrap p-5 mb-2">
                    <span class="fa fa-plane"></span>
                </div>
                <h3 class="card-title">Planing</h3>
                <p class="card-text">
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                </p>
            </b-card>
            <b-card class="text-center  col-md-4 fix-3w">
                <div class="icon-wrap p-5 mb-2">
                    <span class="fa fa-plane"></span>
                </div>
                <h4 class="card-title">Planing</h4>
                <p class="card-text">
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                </p>
            </b-card>
            <b-card class="text-center  col-md-4 fix-3w">
                <div class="icon-wrap p-5 mb-2">
                    <span class="fa fa-plane"></span>
                </div>
                <h4 class="card-title">Planing</h4>
                <p class="card-text">
                    Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                    content.
                </p>
            </b-card>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'part2'
    }
</script>
<style lang="scss">
    @import "../public";
    .fix-3w{
        margin: 1.5% 0;
    }
    @media  (min-width:768px) {
        .fix-3w{
            margin: 1.5%;
            flex-basis: 30.3333%;
        }
    }
    .part2{
        .card-title{
            color:$title;
        }
        .card{
            .icon-wrap {
                background: $primary;
                display: inline-block;
                width: 120px;
                height: 120px;
                border-radius: 50%;
                text-align: center;
                span {
                    color: white;
                    font-size: 30px;
                }
            }
        }
    }
</style>