<template>
  <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else id="data-view">
        <dv-full-screen-container>
          
           <div class="dataweather">
                <div>
                    {{dataWeather.city}}
                    {{dataWeather.weathertemp}}
                    <img :src="dataWeather.icontemp" alt="">
                    {{dataWeather.peraturetemp}}
                </div>
            </div>
            <div class="datatime">
                <span>
                    {{dataTime.dateYear}} {{dataTime.dateWeek}} {{dataTime.dateDay}}
                </span>
            </div>
            <div class="main-header">
              <dv-decoration-8 class="header-right-decoration"/>
              <dv-decoration-10 class="header-left-decoration"/>
              <dv-decoration-6 class="header-center-decoration" :color="['#50e3c2', '#67a1e5']" style="height:.10px;"/>
              <dv-decoration-10 class="header-left-decoration" style="transform: rotateY(180deg);"/>
              <dv-decoration-8 class="header-right-decoration" :reverse="true"/>
              <div class="mh-middle">江苏省综合能源服务公司</div>
            </div>
            <dv-border-box-1 class="main-container">
                    <dv-border-box-3 class="left-chart-container">
                        <left-part-1/>
                        <left-chart-1/>
                        <left-chart-2/>
                    </dv-border-box-3>
                    <dv-border-box-11 :title="chinaMapTitle"  class="middle-chart-container">
                                <!--echarts地图-->
                                      <china
                                     @map-change="mapClick"
                                    @back-change="backClick"/>
                                <!--高德地图-->
<!--                                <china-gaode/>-->
                        </dv-border-box-11>
                    <div class="right-main-container">
                        <top-Number/>
                        <right-Loops/>
                        <right-Chart/>
                    </div>
            </dv-border-box-1>
        </dv-full-screen-container>
    </div>
</template>


<script>
import topNumber from './topNumber';
import rightLoops from './rightLoops';
import $ from 'jquery';
 import {formatTime} from '../utils/index.js';
import leftPart1 from './leftPart1';
import LeftChart1 from './LeftChart1';
import leftChart2 from './leftChart2';
import {weatherOption} from '../utils/weatherOption';
import china from './china';
import rightChart from './rightChart'
export default {
    name : 'datav',
    components : {
        leftPart1,LeftChart1,leftChart2,china,topNumber,rightLoops,rightChart
    },
    data() {
            return {
                loading: true,
                dataTime: {
                    dateDay: 111,
                    dateYear: 2222,
                    dateWeek: 3333,
                    weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                },
                dataWeather: {
                    city: '南京市',
                    dayweather: '晴',
                    nightweather: '多云',
                    weathertemp: '晴', // 根据时间判断选白天还是晚上的天气
                    nighttemp: '3℃',
                    daytemp: '15℃',
                    peraturetemp: '3℃~15℃', // 根据时间判断选白天还是晚上的温度
                    icontemp: 'https://cdn.heweather.com/cond_icon/100.png',
                },
                areaData: {
                    areaCode: "000000",
                    areaLevel: "county",
                    name: "中国",
                    areaName: "中国",
                },
            };
        },
         created() {
            this.getDateTime();
            // this.cancelLoading();
            this.requestGetWeather();
        },
        computed: {
            chinaMapTitle() {
                let areaName = this.areaData.areaName;
                if (areaName === 'china') {
                    areaName = '全国'
                }
                return areaName;
            }
        },
        methods: {
           // 获取时间
            getDateTime() {
                setInterval(() => {
                    this.dataTime.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
                    this.dataTime.dateWeek = this.dataTime.weekday[new Date().getDay()];
                    this.dataTime.dateDay = formatTime(new Date(), 'HH: mm: ss');
                }, 1000)
            },
            // 获取天气
            requestGetWeather() {
                $.get({
                    //这里的url不能写到data对象的外面
                    url: 'https://api.asilu.com/weather_v2/',
                    dataType: 'jsonp',  // 请求方式为jsonp
                    success: (data) => {
                        if (data.status === '1') {
                            let currTime = new Date().getHours();
                            let dailyForecast = data.forecasts[0].casts[0];
                            let city = data.forecasts[0].city;
                            let daytemp = dailyForecast.daytemp + '℃';
                            let nighttemp = dailyForecast.nighttemp + '℃';
                            let weathertemp = '';
                            let peraturetemp = '';
                            if ((currTime >= 6) && (currTime < 18)) {
                                weathertemp = dailyForecast.dayweather;
                                peraturetemp = dailyForecast.nighttemp + "℃~" + dailyForecast.daytemp + "℃";
                            } else {
                                weathertemp = dailyForecast.nightweather;
                                peraturetemp = dailyForecast.daytemp + "℃~" + dailyForecast.nighttemp + "℃";
                            }
                            let icontemp = 'https://cdn.heweather.com/cond_icon/' + weatherOption.weatherCode[weathertemp] + '.png';
                            this.dataWeather = {city, daytemp, nighttemp, weathertemp, peraturetemp, icontemp}
                            this.loading = false
                        }
                    }
                })
            },
            mapClick(data) {
                this.areaData = data;
            },
            backClick(data) {
                this.areaData = data;
            },
        },
}
</script>
<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('./img/back.jpg');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
  .dataweather {
            z-index: 999;
            position: absolute;
            top: 30px;
            left: 150px;
            font-size: 20px;
            color: #fff;

            img {
                width: 25px;
                height: 25px;
                filter: brightness(3);
                vertical-align: bottom;
            }
        }

        .datatime {
            z-index: 999;
            position: absolute;
            float: left;
            top: 30px;
            left: 1150px;
            font-size: 20px;
            color: #fff;
        }
    .main-header {
    position: relative;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-middle {
      position: absolute;
      font-size: 30px;
      font-weight: bold;
      left: 50%;
      top: 20px;
      transform: translateX(-50%);
    }
  }
  .header-center-decoration {
            width: 40%;
            height: 10px;
            // margin-top: 50px;
        }
  .header-left-decoration, .header-right-decoration {
            width: 35%;
            height: 30px;
}
   .main-container {
    height: calc(~"100% - 80px");
    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }
   .left-chart-container {
    width: 35%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }
  .middle-chart-container {
    width: 45%;
    padding: 10px;
    box-sizing: border-box;
    .border-box-content {
      flex-direction: column;
    }
  }
  .right-main-container {
    width: 20%;
    padding: 10px;
    box-sizing: border-box;
    .border-box-content {
      flex-direction: column;
    }
  }
}
</style>