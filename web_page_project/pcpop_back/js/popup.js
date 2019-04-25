_tools_ = {
    put_url:"http://master.cms.com/pcpop/editlist",
    get_url:"http://master.cms.com/pcpop/showlist",
    upload_url:"http://master.cms.com/pcpop/upload",
    getQueryString:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    },
    vali_pic:function (field) {
        //验证封面图
        if(field.pic.length<=5){
            $("input[name='pic']").addClass("layui-form-danger").focus();
            layer.msg('请输入正确图片url或选择图片', {icon: 5,time: 2000,anim: 6});
            return false;
        }else {
            $("input[name='pic']").remove("layui-form-danger");
            return true;
        }
    },
    vali_id:function (field) {
      if(field.article_id.length==0){
          $("input[name='article_id']").addClass("layui-form-danger").focus();
          layer.msg('请输入文章ID', {icon: 5,time: 2000,anim: 6});
          return false;
      }else {
          $("input[name='article_id']").remove("layui-form-danger");
          return true;
      }
    },
    vali_title:function (field) {
        if(field.title.length==0){
            $("input[name='title']").addClass("layui-form-danger").focus();
            layer.msg('请输入文章标题', {icon: 5,time: 2000,anim: 6});
            return false;
        }else {
            $("input[name='title']").remove("layui-form-danger");
            return true;
        }
    },
    vali_url:function (field) {
        if(field.url.length==0){
            $("input[name='url']").addClass("layui-form-danger").focus();
            layer.msg('请输入文章链接地址', {icon: 5,time: 2000,anim: 6});
            return false;
        }else {
            $("input[name='url']").remove("layui-form-danger");
            return true;
        }
    },
    vali_end:function (field) {
        if(field.end_time.length==0){
            $("input[name='end_time']").addClass("layui-form-danger").focus();
            layer.msg('请选择下线时间', {icon: 5,time: 2000,anim: 6});
            return false;
        }else {
            $("input[name='end_time']").remove("layui-form-danger");
            return true;
        }
    }
}