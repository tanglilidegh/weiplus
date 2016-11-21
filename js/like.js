/**
 * Created by tanglili on 16/11/19.
 */
(function ($) {
    $.extend({
        tipsBox: function (options) {
            options = $.extend({
                obj: null,  //jq对象，要在那个html标签上显示
                str: "+1",  //字符串，要显示的内容"
                startSize: "14px",  //动画开始的文字大小
                endSize: "38px",    //动画结束的文字大小
                interval: 600,  //动画时间间隔
                color: "#fbab00",    //文字颜色
                weight: "bold", //文字
                callback: function () {
                }
            }, options);
            $("body").append('<span class="num">' + options.str + '</span>');
            var box = $(".num");
            var left = (options.obj.offset().left + options.obj.width() / 2) - 10;
            var top = options.obj.offset().top + options.obj.height() - 100;
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color,
                "font-weight": options.weight
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval, function () {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);

$(function () {
    $(".like_btn").click(function () {
        $.tipsBox({
            obj: $(this),
            str: "+1",
            callback: function () {
                // alert("已点赞");
            }
        });
    });
});