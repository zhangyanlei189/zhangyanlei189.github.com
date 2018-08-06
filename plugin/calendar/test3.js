//初始化
var dom = document.createElement('div');
var dom1 = document.createElement('div');
setCalendar("2018-08-26",dom,["2018-08-16", "2018-08-17", "2018-08-23", "2018-08-24", "2018-08-25", "2018-08-30"]);
setCalendar("2018-09-26",dom1,["2018-08-16", "2018-09-05", "2018-09-23", "2018-09-26", "2018-09-27", "2018-09-30"]);

function setCalendar(date,dom,param){


    dom.setAttribute('id','showCld');
    document.getElementById("box").appendChild(dom); //增加到你的box里

//获取当天的年月日
    var today = new Date(date);
    var _year = today.getFullYear(),
        _month = today.getMonth() + 1,
        _day = today.getDate();   //_year:2018 ; _month:7 ; _day:25
    var firstDay = getFirstDay(_year,_month);

//显示日历
    showCalendar(_year,_month,_day,firstDay);






//判断闰年
    function runNian(_year) {
        if(_year%400 === 0 || (_year%4 === 0 && _year%100 !== 0) ) {
            return true;
        }else { return false; }
    }

//判断某年某月的1号是星期几
    function getFirstDay(year,month) {
        var firstday = new Date(year,month-1,1).getDay();
        return firstday!=0?firstday:7;
    }


//显示日历
    function showCalendar(_year,_month,_day,firstDay) {
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
                if(runNian(_year)) { monthDay = 29; }
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

        //输出日历表格，这部分因结构而异
        showStr = "<table class='cld-w'><thead>";
        //日历头部
        showStr += "<tr><th colspan='7'><div class='cld-hd'><em id='showDate' value='" + _year + "-" + _month + "-" + _day + "'>" + _year + "年" + _month + "月" + _day + "日" + "</em></div></th><th><label><input type='checkbox' class='selAll'> 全选本月</label></th></tr>";
        //日历星期
        showStr += "<tr><th><label><input type='checkbox' class='cols' val='1'> 一</label></th><th><label><input type='checkbox' class='cols' val='2'> 二</label></th><th><label><input type='checkbox' class='cols' val='3'> 三</label></th><th><label><input type='checkbox' class='cols' val='4'> 四</label></th><th><label><input type='checkbox' class='cols' val='5'> 五</label></th><th><label><input type='checkbox' class='cols' val='6'> 六</label></th><th><label><input type='checkbox' class='cols' val='7'> 日</label></th><th></th></tr>";
        showStr += "</thead><tbody><tr>";
        //当月第一天前的空格
        for (i=1; i<firstDay; i++) {
            showStr += "<td></td>";
        }
        //显示当前月的天数
        for (i=1; i<=monthDay; i++) {
            //当日的日期
            if(_year === today.getFullYear() && _month === today.getMonth()+1 && i === today.getDate()) {
                _classname = "cld-cur";
            }
            else if(//当日之前的日期（这个判断是因为我有工作需求，就是要求之前的日期不能点击）
                _year < today.getFullYear() || (_year === today.getFullYear() && _month <= today.getMonth()) || (_year === today.getFullYear() && _month === today.getMonth()+1 && i < today.getDate()) ) {
                _classname = "cld-old";
            }else {//其他普通的日期
                _classname = "cld-day";
            }
            //其他大于当月的月份的相同日期（为了让点击下一月的时候，相同的日期增加cld-cur类）
            if(_day === i && (_year > today.getFullYear() || _month > today.getMonth()+1)) { _classname = "cld-cur"; }
            //把日期存在对应的value
            if(_classname == "cld-old"){
                showStr += "<td class='" + _classname + "' value='" + _year + "-" + (_month<10?"0"+_month:_month) + "-" + (i<10?"0"+i:i) + "'>" + (i<10?"0"+i:i) + "</td>";
            }else {
                var value = _year + "-" + (_month<10?"0"+_month:_month)+ "-" + (i<10?"0"+i:i);
                var isCheck="",bgClass = "";
                if(param.indexOf(value)>0){
                    isCheck = "checked";
                    bgClass = " active"
                }
                showStr += "<td class='"+_classname+" cell-td "+bgClass+"' value='"+ value + "'><label><input type='checkbox' "+isCheck+"> "+(i<10?"0"+i:i)+"</label></td>";
            }

            firstDay = (firstDay+1)%7;
            if(firstDay === 1 && i !== monthDay) {
                if(_classname == "cld-old"){
                    showStr += "<td></td></tr><tr>";
                }else {
                    showStr += "<td><label><input type='checkbox'  class='rows'> 全选本周</label></td></tr><tr>";
                }
            }
        }
        //剩余的空格
        var lastSpace = Math.ceil((monthDay+first-1)/7)*7-monthDay-first+1;
        if(lastSpace!==0) {
            for (var i=0; i<lastSpace; i++) {
                showStr += "<td></td>";
            }
        }
        showStr +="<td><label><input type='checkbox' class='rows'> 全选本周</label></td></tr></tbody></table>";
        //插入calendar的页面结构里
        dom.innerHTML = showStr;
    }



//显示年月日
    function showDate(_year,_month,_day) {
        var date = "", firstDay = getFirstDay(_year,_month,_day);
        if(_day !== 0) {
            date = _year + "年" + _month + "月" +_day + "日";
        }
        else { date = "No Choose."; }
        document.getElementById("showDate").innerHTML = date; //日历头部显示
        showCalendar(_year,_month,_day,firstDay);         //调用日历显示函数
    }




//上一月
    function preMonth(_year,_month,_day) {
        if(_month == 1) { showDate(_year - 1,12,_day); }
        else { showDate(_year,_month - 1,_day); }
    }
//下一月
    function nextMonth(_year,_month,_day) {
        if(_month == 12) { showDate(_year + 1,1,_day); }
        else { showDate(_year,_month + 1,_day); }
    }

}










$("#box").on("change","input",function () {
    if($(this).hasClass("selAll")){
        if($(this).is(":checked")){
            $(".cell-td input",$(this).closest("table")).each(function (i, item) {
                $(item).prop("checked",true).closest("td").addClass("active");
            });
        }else {
            $("input",$(this).closest("table")).each(function (i, item) {
                $(item,".cell-td").prop("checked",false).closest("td").removeClass("active");
            });
        }
    }else if($(this).hasClass("cols")){
        var index = $(this).attr("val");
        var inputs = $("tr td:nth-child("+index+") input");
        if($(this).is(":checked")){
            inputs.prop("checked",true).closest("td").addClass("active");
        }else {
            inputs.prop("checked",false).prop("checked",false).closest("td").removeClass("active");
        }
    }else if($(this).hasClass("rows")){
        if($(this).is(":checked")){
            $(this).closest("tr").find(".cell-td input").prop("checked",true).closest("td").addClass("active");
        }else {
            $(this).closest("tr").find(".cell-td input").prop("checked",false).closest("td").removeClass("active");
        }
    }else{
        if($(this).is(":checked")){
            $(this).closest("td").addClass("active");
        }else {
            $(this).closest("td").removeClass("active");
        }
    }
});

$("#click-btn").on("click",function () {
    var inputs = $(".cell-td input");
    var vals = [];var flag = true;var str=""; var j;
    inputs.each(function (i,item) {

        if (flag) {   //true：添加开始时间
            str = "";
            if ($(item).prop("checked")){
                str+=$(item).closest("td").attr("value");
                j = i;
                flag = false;
                if(i == inputs.length-1){ //最后一日不连续
                    vals.push(str);
                }
            }

        }else {    //添加结束时间
            if (!$(item).prop("checked")) {
                if(i-1 !=j){
                    str+="至"+$(inputs[i-1]).closest("td").attr("value");
                }
                vals.push(str);
                flag = true;
            }else {
                if(i == inputs.length-1){// 最后一日连续
                    str+="至"+$(item).closest("td").attr("value");
                    vals.push(str);
                }
            }
        }
    });
    console.log(vals);

});







$("#re-sel").on("click",function () {
    var s = ["2018-08-16至2018-08-17", "2018-08-23至2018-08-25", "2018-08-30"];
    var resAll = formatDate(s);
    console.log(resAll);
});




function formatDate(s){
    var allArr = [];
    $.each(s,function (i, item) {
        var arr = item.split("至");
        var start = +new Date(arr[0]);
        if(arr[1]){
            var end = +new Date(arr[1]);
            for (var j=start;j<=end;j=j+86400000){
                var date = new Date(j);
                var year = date.getFullYear();
                var month = date.getMonth()<10?"0"+date.getMonth():date.getMonth();
                var day = date.getDate()<10?"0"+date.getDate():date.getDate();
                allArr.push(year+"-"+month+"-"+day);
            }
        }else {
            var date = new Date(start);
            var year = date.getFullYear();
            var month = date.getMonth()<10?"0"+date.getMonth():date.getMonth();
            var day = date.getDate()<10?"0"+date.getDate():date.getDate();
            allArr.push(year+"-"+month+"-"+day);
        }
    });
    return allArr;
}





