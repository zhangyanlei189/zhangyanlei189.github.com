<meta charset="utf-8"/>

## 项目中遇到的问题

### itpub学院

    1.ie9-   设置遮罩不设置透明背景能被击穿
    2.文件上传   重置上传图标,
        设置上传图标样式：
            * file按钮被容器包裹，设置容器样式，overflow:hidden
            * 设置背景头透明
            * font-size:100px
            * margin-left:-10px;
 ## wap行车视线
    1.移动端rem初始化解决方案(淘宝)
    !function(e,t){var n=t.documentElement,d=e.devicePixelRatio||1;function i(){var w = n.clientWidth,e;console.log(w);e = w>800?800:w;n.style.fontSize=e/3.75+"px"}if(function e(){t.body?t.body.style.fontSize="16px":t.addEventListener("DOMContentLoaded",e)}(),i(),e.addEventListener("resize",i),e.addEventListener("pageshow",function(e){e.persisted&&i()}),d>=2){var o=t.createElement("body"),a=t.createElement("div");a.style.border=".5px solid transparent",o.appendChild(a),n.appendChild(o),1===a.offsetHeight&&n.classList.add("hairlines"),n.removeChild(o)}}(window,document);
    
 ## 汽车库
    1. 遮罩层不能阻止body的滑动
       解决2种方法：1、在遮罩上绑定touchmove事件，并阻止事件冒泡
                   2、给遮罩下的元素设置position:fixed；overflow:hidden;关闭遮罩的时候，再设置成position:static;overflow:auto 

        
