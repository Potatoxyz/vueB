<template>
    <div class="container part history">
        <h3 class="primary-text text-center part-title">About Us</h3>
        <div class="row">
            <div class="col-lg-6 hpart">
                <img class="w-100 pb-2" src="../../assets/img-1/abt.jpg" alt="">
                <h5 class="primary-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</h5>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea consectetur, adipisci velit, sed quia non numquam eius modi commodi consequatur</p>
            </div>
            <div class="col-lg-6 hpart">
                <h4 class="pb-2 font-weight-bold">Our History</h4>
                <div class="row">
                    <div class="col-lg-3"><h5>1999 -</h5></div>
                    <div class="col-lg-9">
                        <p>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3"><h5>1999 -</h5></div>
                    <div class="col-lg-9">
                        <p>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3"><h5>1999 -</h5></div>
                    <div class="col-lg-9">
                        <p>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3"><h5>1999 -</h5></div>
                    <div class="col-lg-9">
                        <p>
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'about'
    }
</script>
<style lang="scss">
    @import "../common.scss";
    .history{
        .hpart{
            p{
               color:$light-black;
                font-size:0.9rem;
            }
            h5{
                color:$primary;
            }
        }
    }
</style>