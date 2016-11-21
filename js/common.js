document.addEventListener('touchstart', function () {
});

var $fileName = $('.fileName');
$('input[type=file]').change(function () {
    var path = $(this).val();
    var fileName = path ? path.substr(path.lastIndexOf('\\') + 1) : '请上传文件';
    $fileName.text(fileName);
});

$(function () {
    $("#signUpForm").validate({
        rules: {
            userName: {  // 姓名
                required: true,
                rangelength: [2, 30]
            },
            weChat: {  // 微信
                required: true,
                rangelength: [3, 20]
            },
            email: {  // 邮箱
                email: true,
                required: true
            },
            company: {  // 职位
                rangelength: [1, 20],
                required: true
            },
            position: {  // 职位
                rangelength: [1, 20],
                required: true
            },
            phone: { // 手机号
                digits: true,
                required: true
            },
            smCode: {  //验证码
                rangelength: [4, 6],
                required: true
            },
            provide: {  //我能提供
                rangelength: [0, 10],
                required: true
            },
            finding: {  //我在寻找
                rangelength: [0, 10],
                required: true
            },
            companyLogo: {
                required: true
            }
        }
    });
});

