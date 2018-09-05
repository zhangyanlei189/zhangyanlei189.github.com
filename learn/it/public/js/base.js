/*rem适配开始*/
adaptation(600);//test
window.onresize = function(){
    adaptation(640);
}
function adaptation(size){
    var html = document.querySelector("html");
    var width = html.getBoundingClientRect().width;
    if(width>size){
        html.style.fontSize = size/16 + "px";
    }else{
        html.style.fontSize = width/16 + "px";
    }
}
/*rem适配结束*/
