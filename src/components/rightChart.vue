<template>
    <dv-border-box-4>
    <div class="bc-chart-item">
      <div class="bcci-header">Hello</div>
      <dv-active-ring-chart :config="config" />
    </div>
    </dv-border-box-4>
</template>
<script>
export default {
    name : 'rightChart',
    data () {
        return {
            config: {
                data: [
                {
                    name: '周口',
                    value: 55
                    },
                    {
                    name: '南阳',
                    value: 120
                    },
                    {
                    name: '西峡',
                    value: 78
                    },
                    {
                    name: '驻马店',
                    value: 66
                    },
                    {
                    name: '新乡',
                    value: 80
                    }
                ],
             color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
                radius: '65%',
                activeRadius: '70%'
            },
            labelConfig: {
                data: ['收费站', '监控中心', '道路外场', '其他']
         }
        }
    }
}
</script>
<style lang="less" scoped>
    .bc-chart-item {
        width: 100%;
        height: 300px;
        // display: flex;
        // position: relative;
    }
    .dv-active-ring-chart {
    height: calc(~"100% - 80px");
  }
    .bcci-header {
    height: 30px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
  }
</style>