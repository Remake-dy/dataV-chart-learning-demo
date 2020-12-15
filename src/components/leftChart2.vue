<template>
  <div class="left-chart-2">
      <dv-charts :option="option1" />
  </div>
</template>
<script>
export default {
    name : 'leftChart2',
    data() {
        return {
            option1 : {
                title: {
                    text: '畅销饮料占比饼状图',
                    style: {
                    fill: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textBaseline: 'bottom'
                    }
                },
                series: [
                    {
                    type: 'pie',
                    data: [
                        { name: '可口可乐', value: 93 },
                        { name: '百事可乐', value: 32 },
                        { name: '哇哈哈', value: 65 },
                        { name: '康师傅', value: 44 },
                        { name: '统一', value: 52 },
                    ],
                    radius: ['30%', '55%'],
                    insideLabel: {
                        show: true
                    }
                    }
                ]
                },
         option2 : {
            title: {
                text: '畅销饮料占比饼状图'
            },
            series: [
                {
                type: 'pie',
                data: [
                    { name: '可口可乐', value: 93 },
                    { name: '百事可乐', value: 32 },
                    { name: '哇哈哈', value: 65 },
                    { name: '康师傅', value: 44 }
                ],
                insideLabel: {
                    show: true
                }
                }
            ]
            }
        }
    }
}
</script>
<style scoped>
    .left-chart-2{
        width: 100%;
        height: 35%;
    }
</style>