<template>
    <div class="container part profile">
        <h3 class="primary-text part-title text-center pb-4">Portfolio</h3>
        <div class="fex-wrap">
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/1.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/2.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/3.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/4.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/5.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
            <div class="item-wrap">
                <a href="javascript:;" class="img-wrap"><img src="../../assets/img/6.jpg" alt=""/></a>
                <p class="item-text">Project File</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'profile'
    }
</script>
<style lang="scss">
    @import "../common.scss";
    .profile{
        .fex-wrap{
            display: flex;
            flex-wrap: wrap;
            .item-wrap{
                width: 33.33%;
                padding: 20px;
            }
        }
        @media (max-width: 992px) {
            .item-wrap{
                width: 50%!important;
            }
        }
        @media (max-width: 576px) {
            .item-wrap{
                width: 100%!important;
            }
        }
        .item-wrap{
            a.img-wrap{
                display: block;
                overflow: hidden;
                width: 100%;
                img{
                    width: 100%;
                    cursor: pointer;
                    transition: all ease 0.5s;
                    &:hover{
                        transform:scale(1.25);
                    }
                }
            }
            .item-text{
                margin-bottom: 0;
                padding:10px 15px;
                background: rgba($title,0.7);
                color:white;
                letter-spacing: 3px;
                text-transform: uppercase;
            }
        }
    }
</style>