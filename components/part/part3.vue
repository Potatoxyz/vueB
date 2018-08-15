<template>
    <div class="part part3">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h3 class="text-white">Happy & excited about company</h3>
                <h5 class="text-black-50">Happy & excited about company</h5>
                <p class="text-white-50">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of existence.
                </p>
                <div class="quote blockquote">
                    <span class="fa fa-quote-left mr-4 ml-4"></span>
                    <p>There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. Ray Goforth</p>
                </div>
                <p class="ptext">Over the past 11 years we've worked with some amazing small businesses, non-profits, academic institutions and even Fortune 100 companies.</p>
            </div>
            <div class="col-md-6"></div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "part3"
    }
</script>

<style lang="scss">
    @import "../public.scss";
    .part3{
        background: $primary;
        .quote{
            display: flex;
            border-left: 3px solid black;
            .fa{
                font-size: 30px;
            }
        }
        .ptext{
            font-size: 1.2rem;
            color:mix(black,saddlebrown,10%);
        }
    }
</style>