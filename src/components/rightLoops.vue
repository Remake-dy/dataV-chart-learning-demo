<template>
    <div id="rightLoops">
        <dv-border-box-10 style="">
            <div class="bg-color-black">
                <div class="title">
                    <i class="el-icon-data-board" style="padding-top:4px;padding-right:10px"> </i> 
                    <div class="d-flex">
                        <span class="fs-xl text mx-2">区县上报情况</span>
                    </div>
                </div>
                <div class="d-flex jc-center body-box">
                    <dv-scroll-board class="leftLoop" :config="config" @click="onCountyRowClick" style="width: 100%;height:250px"/>
                </div>
            </div>
        </dv-border-box-10>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                countyCheckData: [],
                config: {
                    header: ["区县", "提交情况"],
                    rowNum: 6, //表格行数
                    headerHeight: 35,
                    headerBGC: "#0f1325", //表头
                    oddRowBGC: "#0f1325", //奇数行
                    evenRowBGC: "#171c33", //偶数行
                    index: true,
                    columnWidth: [60],
                    align: ["center"],
                    data: [],
                }
            };
        },
        mounted() {
            this.setData();
        },
        methods: {
            setData() {
                this.config.data = [
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                    ['县级名称', "<span class=" + 'color' + Math.round(Math.random()) + ">" + (Math.round(Math.random()) ? '已提交' : '未提交') + "</span>"],
                ];

            },
            onCountyRowClick(row){
                console.log(row);
            }
        }
    };
</script>

<style lang="less" scoped>
    ::v-deep#rightLoops {
        padding:10px;
        height: 300px;
        border-radius: 0.0625rem;
        .bg-color-black {
            height: 250px;
            border-radius: 0.125rem;
        }
        .title {
            display: flex;
            justify-content: center;
        }
        .d-flex {
        }
        .text {
            color: #c3cbde;
        }

        .color0 {
            color: #ff5722;
        }

        .color1 {
            color: #409EFF;
        }
    }

</style>
