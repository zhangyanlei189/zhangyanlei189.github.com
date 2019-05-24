<template>
    <div class="calendar-box">
        <mt-header title="出发日期" class="t-header">
            <div slot="left" >
                <mt-button icon="back" class="l-left"></mt-button>
            </div>
        </mt-header>
        <div class="main">
            <div class="title"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></div>
            <div class="scroll-box">
                <div class="month-box" v-for="item in monthArr">
                    <div class="month">{{item.YM}}</div>
                    <div v-html="item.M"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                monthArr:[
                ],
            }
        },
        computed:{

        },
        mounted(){
            let Arr = [];
            for (let i = 0; i < 6; i++) {
                Arr.push(this.setCalendar(i));
            }
            console.log(Arr);
            this.monthArr = Arr;

        },
        methods:{
            //判断闰年
            runNian(_year){
                if(_year%400 === 0 || (_year%4 === 0 && _year%100 !== 0) ) {
                    return true;
                }else { return false; }
            },
            //判断某年某月的1号是星期几
            getFirstDay(year,month) {
                var firstday = new Date(year,month-1,1).getDay();
                return firstday!=0?firstday:7;
            },
        //显示日历
            showCalendar(_year,_month,_day,firstDay) {
                var i = 0,
                    monthDay = 0,
                    showStr = "",
                    _classname = "",
                    first = firstDay,
                    today = new Date();
                //月份的天数

                switch(_month) {
                    case 1: monthDay = 31; break;
                    case 2:
                        if(this.runNian(_year)) { monthDay = 29; }
                        else { monthDay = 28; }
                        break;
                    case 3: monthDay = 31; break;
                    case 4: monthDay = 30; break;
                    case 5: monthDay = 31; break;
                    case 6: monthDay = 30; break;
                    case 7: monthDay = 31; break;
                    case 8: monthDay = 31; break;
                    case 9: monthDay = 30; break;
                    case 10: monthDay = 31; break;
                    case 11: monthDay = 30; break;
                    case 12: monthDay = 31; break;
                }

                showStr = "<div>"
                //当月第一天前的空格   firstDay为当月第一天的星期几
                for (i=1; i<firstDay; i++) {
                    showStr += "<span></span>";
                }

                //显示当前月的天数
                for (i=1; i<=monthDay; i++) {
                    //当日的日期
                    if(_year === today.getFullYear() && _month === today.getMonth()+1 && i === today.getDate()) {
                        _classname = "cld-cur";
                    }
                    else if(//当日之前的日期
                         _year === today.getFullYear() && _month === today.getMonth()+1 && i < today.getDate()) {
                        _classname = "cld-old";
                    }else {//其他普通的日期
                        _classname = "cld-day";
                    }

                    //其他大于当月的月份的相同日期
                    if(_day === i && (_year > today.getFullYear() || _month > today.getMonth()+1)) { _classname = "cld-cur"; }
                    //把日期存在对应的value
                    var value = _year + "-" + (_month<10?"0"+_month:_month)+ "-" + (i<10?"0"+i:i);
                    showStr += "<span class='"+_classname +"' value='"+ value + "'>"+(i<10?"0"+i:i)+"</span>";
                }

                //剩余的空格
                var lastSpace = Math.ceil((monthDay+first-1)/7)*7-monthDay-first+1;
                if(lastSpace!==0) {
                    for (var i=0; i<lastSpace; i++) {
                        showStr += "<span></span>";
                    }
                }
                showStr +="</div>";
                //插入calendar的页面结构里
                return {
                    M:showStr,
                    YM:_year+"年"+_month+"月"
                }
            },

            setCalendar(param){
                let m = param+1;
                //获取当天的年月日
                var today = new Date();
                var _year = today.getFullYear(),
                    _month = today.getMonth() + m,
                    _day = today.getDate();   //_year:2018 ; _month:7 ; _day:25

                var firstDay = this.getFirstDay(_year,_month);
                //显示日历
                return this.showCalendar(_year,_month,_day,firstDay);
            }

        }
    }
</script>

<style lang="less">
.t-header {
    background: #fff;
    color: #333;

    .l-left {
        color: #333;
    }
}
.calendar-box{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    .scroll-box{
        position: fixed;
        top: 80px;
        bottom: 0;
        left: 0;
        right: 0;
        height: calc(~"100% - 130px");
        overflow-y: auto;
    }
    .month-box{
        border-top: 1px solid #ccc;
        margin-bottom: 0.1rem;
    }
    .month{
        padding: 0.18rem 0 0.06rem;
        text-align: center;
        font-size: 0.14rem;
        color: #000;
        font-weight: bold;
    }
    .title,.month-box{
        padding: 0 10px;
        span{
            display: inline-block;
            width: 14.2%;
            text-align: center;
            padding: 0.12rem 0;
            font-size: 0.12rem;
        }
    }
    .title{
        background: #f2f2f2;
        font-size: 0.14rem;
        color: #000;
        height: 40px;
        /*line-height: 40px;*/
    }
    .month-box{
        .cld-old{
            color: #ccc;
        }
        .cld-cur{
            color: #fff;
            background: #0185F5;
            border-radius: 4px;
        }
        .cld-day{
            color: #666;
        }
    }

}

</style>