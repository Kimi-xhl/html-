const FixedHelper = {
    locationOnline: false,
    locationPhone: false
}
$('.locationPhone').hide()
$('.fixedHelperItem:eq(1)').click(function (e) { 
    if(FixedHelper.locationPhone){
        // $('.locationPhone').hide()
        // FixedHelper.locationPhone = !FixedHelper.locationPhone
    }else{
        $('.locationPhone').show()
        FixedHelper.locationPhone = !FixedHelper.locationPhone
    }
});
$('.locationPhone>.cancel').click(() => {
    console.log(111);
    $('.locationPhone').css('display','none')
    FixedHelper.locationPhone = false
})

$('.fixedHelperItem:eq(0)').click(function () {
    window.open('/module.html', '_blank', 'height=563,width=800,top=50,left=200,status=yes,toolbar=no,menubar=no,resizable=no,scrollbars=no,location=no,titlebar=no')
})

$('.locationPhoneBtn').click(() => {

    if(isvalidPhone($('#locationPhoneInput').val())){
        alert('稍后给您回电')
    }else{
        $('.locationPhone>p').text('请输入正确的电话号码')
        $('.locationPhone>p').css('color','#ff0000')
    }
})
/**
 * 判断手机号码
 * @param {*} str 
 * @returns 
 */
function isvalidPhone(str) {
    const reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/
    return reg.test(str)
}