<template>
    <div class="team">
    <div class="container part">
        <h3 class="part-title text-white text-center">Our Team</h3>
        <p class="light-white-text pb-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
        <div class="row">
            <div class="col-lg-4 part-team">
                <img src="../../assets/img-1/mem1.jpg" alt="">
                <p class="text-white">Michael Clerk</p>
                <p class="text-white font-weight-bold bdb">CEO</p>
                <p class="quote"><span class="fa fa-quote-left"></span></p>
                <p class="light-white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>
            <div class="col-lg-4 part-team">
                <img src="../../assets/img-1/mem2.jpg" alt="">
                <p class="text-white">Michael Clerk</p>
                <p class="text-white font-weight-bold bdb">CEO</p>
                <p class="quote"><span class="fa fa-quote-left"></span></p>
                <p class="light-white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>
            <div class="col-lg-4 part-team">
                <img src="../../assets/img-1/mem3.jpg" alt="">
                <p class="text-white">Michael Clerk</p>
                <p class="text-white font-weight-bold bdb">CEO</p>
                <p class="quote"><span class="fa fa-quote-left"></span></p>
                <p class="light-white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'team'
    }
</script>
<style lang="scss">
    .team{
        background: url("../../assets/img-1/team-bg.jpg") no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        .part-team{
            text-align: center;
            margin-bottom: 1rem;
            img{
                padding-bottom: 0.25rem;
            }
            p{
                margin-bottom: 0;
                padding:0.35rem;
                &.bdb{
                    border-bottom: 2px solid white;
                }
                &.quote{
                    padding: 1.5rem;
                    span.fa{
                        font-size: 2rem;
                        color:#e5f332;
                    }
                }
                &.light-white-text{
                    font-size: 13px;
                    text-indent: 26px;
                }
            }
        }
    }
</style>