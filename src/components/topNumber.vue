<template>
    <dv-border-box-8 :reverse="true" style="height: 150px;">
        <div class="bigBox">
        <div class="left-dig">
            <p class="colorBlue">{{numberConfig.title}}</p>
            <dv-digital-flop :config="numberConfig" style="width:200px;height:50px;margin-left:-50px" />
        </div>
        <div class="left-dig">
            <p class="colorBlue">{{numberConfig.name}}</p>
            <dv-digital-flop :config="numberConfig" style="width:200px;height:50px;margin-left:-50px" />
        </div>
        </div>
    </dv-border-box-8>
</template>

<script>
    export default {
        name: "topNumber",
        data(){
            return {
            numberConfig: {
                        title:'总用户数',
                        name:'在线用户数',
                        number:[100],
                        content: '{nt}个',
                        style:{fontSize: 20}
                    },
            totalUserCount: {
                default: 0,
            }
        }
    }
    }
</script>

<style scoped>
.bigBox {
    width:100%;
    height: 150px;
    display:flex;  
    justify-content: space-between!important
}
.left-dig {
    width: 50%;
    height: 100%;
    
}
.colorBlue{
    margin-top: 0px;
    font-size:20px;
    color: #257dff;
}
</style>

