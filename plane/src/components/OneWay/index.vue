<template>
    <div>
    <div class="c-cont">
        <form action="#">
            <div class="cell flex">
                <div class="cell-td start">
                    <span>出发城市</span>
                    <div class="sel-city" v-on:click="startCity">上海</div>
                    <input type="hidden" name="start">
                </div>
                <div class="cell-td plane-icon"></div>
                <div class="cell-td end">
                    <span>到达城市</span>
                    <div class="sel-city" v-on:click="startCity">上海</div>
                    <input type="hidden" name="end">
                </div>
            </div>
            <div class="cell">
                <div class="date-sel" @click="showCalendar">04月18日<span>明天</span></div>
            </div>
            <div class="cell clearfix">
                <div class="fl class" v-on:click="selClass">经济舱</div>
                <div class="fr passenger" v-on:click="selPassenger"><span>1</span>成人 <span>0</span>儿童</div>
            </div>
            <div class="btns">
                <button class="search-btn">搜索机票</button>
            </div>
        </form>
    </div>
        <CityList :isShow="setCityShow" @getVal="cVal"></CityList>
        <SelClass v-if="setClassShow"></SelClass>
        <SelPassenger v-if="selPassengerShow"></SelPassenger>
        <div v-show="setCalendarShwo" class="calendar-box">
            <Calendar></Calendar>
        </div>
    </div>
</template>

<script>
    import CityList from '@/components/CityList'
    import SelClass from '@/components/SelClass'
    import SelPassenger from '@/components/SelPassenger'
    import Calendar from '@/components/Calendar'
    export default {
        name: "oneWay",
        components: {
            CityList,SelClass,SelPassenger,Calendar
        },
        data(){
            return {
                setCityShow:false,
                setClassShow:false,
                selPassengerShow:false,
                setCalendarShwo:false
            }
        },
        methods:{
            startCity:function() {
                console.log(111);
                this.setCityShow = true;
            },
            cVal:function () {
                this.setCityShow = false;
                console.log("收到子组件信息")
            },
            selClass:function () {
                this.setClassShow = true;
            },
            selPassenger:function () {
                this.selPassengerShow = true;
            },
            showCalendar:function () {
                this.setCalendarShwo = true;
            }
        }
    }
</script>

<style scoped lang="less">
    .bg-image(@url) {
        background-image: url('../../assets/images/@{url}@2x.png');
        background-repeat: no-repeat;
        @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
            background-image: url('../../assets/images/@{url}@3x.png');
        }
    }
    .c-cont{
        background: #fff;
        padding:0 0.25rem ;
        .cell{
            padding: 0.14rem 0;
            border-bottom: 1px solid #E6E6E6;
            &:last-of-type{
                border: none;
            }
            &.flex{
                display: flex;
                /*justify-content:space-between;*/
                /*align-items:center;*/
            }
            .cell-td{flex: 1;}
            .start,.end{
                span{
                    font-size:0.12rem;
                    font-weight:400;
                    color:rgba(204,204,204,1);
                    line-height:0.17rem;
                }
                .sel-city{
                    font-size:0.22rem;
                    font-weight:bold;
                    color:rgba(51,51,51,1);
                    line-height:0.3rem;
                    margin-top: 0.05rem;
                }
            }
            .start{
                text-align: left;
            }
            .end{
                text-align: right;
            }
            .plane-icon{
                background-position: center center;
                background-size: 0.35rem 0.35rem;
                .bg-image('airplane');
            }
            .date-sel{
                font-size:0.18rem;
                font-weight:bold;
                color:rgba(51,51,51,1);
                line-height:0.25rem;
                span{
                    margin-left: .1rem;
                    font-size:0.12rem;
                    color:rgba(153,153,153,1);
                    line-height:0.17rem;
                    font-weight: normal;
                    vertical-align: bottom;
                }
            }
        }
        .btns{
            padding: 0.14rem 0;
            button{
                width: 100%;
                height:0.46rem;
                background:linear-gradient(137deg,rgba(255,179,2,1) 0%,rgba(254,128,0,1) 100%);
                border-radius:46px;
                font-size:0.18rem;
                color: #fff;
            }
        }
    }
</style>