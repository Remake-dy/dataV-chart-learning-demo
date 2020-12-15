<template>
    <div class="chart">
         <dv-charts :option="option1"/>
        <dv-decoration-2 style="height:10px;" />
    </div>
</template>
<script>
export default {
    name: 'leftPart1',
    data() {
        return {
           option1: {
                title: {
                    text: '周销售额趋势',
                    style: {
                        fill: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textBaseline: 'bottom'
                    }
                },
                legend: {
                    data: ['系列A', '系列B', '系列C'],
                    textStyle: {
                        fill: '#fff'
                        }
                },
                xAxis: {
                    name: '第一周',
                    nameTextStyle: {
                        fill: '#fff',
                        },
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLabel : {
                        style :{
                            fill: '#fff',
                        }
                    }
                },
                yAxis: {
                    name: '销售额',
                    nameTextStyle: {
                        fill: '#fff',
                        },
                    data: 'value',
                    axisLabel : {
                        style :{
                            fill: '#fff',
                        }
                    }
                },
                series: [
                    {
                    name: '系列A',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    fill: {
                        show: true
                    }
                    },
                    {
                    name: '系列B',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    smooth: true
                    },
                    {
                    name: '系列C',
                    data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                    type: 'line',
                    stack: 'a',
                    lineStyle: {
                        lineDash: [5, 5]
                    }
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
    .chart {
        width: 100%;
        height: 35%;
        padding-bottom: 20px;
        color: "#fff" ;
    }
</style>