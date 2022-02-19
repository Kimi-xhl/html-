var FixedHelper = {
    locationOnline: false,
    locationPhone: false
}
$('.fixedHelperItem:eq(1)').click(function (e) { 
    if(FixedHelper.locationPhone){
        $('.locationPhone').hide()
        FixedHelper.locationPhone = !FixedHelper.locationPhone
    }else{
        $('.locationPhone').show()
        FixedHelper.locationPhone = !FixedHelper.locationPhone
    }
});