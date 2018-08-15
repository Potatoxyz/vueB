<template>
    <div class="part part-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 content">
                    <h4>Address</h4>
                    <p>BS Business Strategy</p>
                    <p>4111 Deer Haven Drive Greenville, SC 29601</p>
                    <p>Hours: Mon-Fri 9am - 6:00pm</p>
                </div>
                <div class="col-lg-4 content">
                    <h4>GET IN TOUCH</h4>
                    <p>Tel: +1 234-567-890</p>
                    <p>Fax: +1 646-216-9789</p>
                    <p>Email: info@yourdomain.com</p>
                </div>
                <div class="col-lg-4 content">
                    <h4>Copy Rights</h4>
                    <p>Copyright © 2016</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'partfooter'
    }
</script>
<style lang="scss">
    .part-footer{
        background: black;
        color:white;
        .content{
            h4{
                margin-bottom: 1rem;
            }
            p{
                margin-bottom: 0.15rem;
                font-size: 0.8rem;
                color:#ababab;
            }
        }
    }
</style>