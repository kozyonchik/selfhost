/*----------------------------------------------

1) 


-----------------------------------------------*/




(function($) {
    "use strict";
    $(document).ready(function(){


//---------------------------------------------------------------------------
//      Elements Fix
//---------------------------------------------------------------------------
$(document).ready(function(){$('[data-tilda-sign]').remove();$("img").mousedown(function(){return false;});});
//BTN replace ---------------------------------------------------------------
if($('.t391__btn').length){
    $('.t391 .t391__btn').each(function(){
        $(this).css({'opacity':1});
        var id = $(this).find('a').attr('href')
                
        $(this).find('a').remove()
        if(id.indexOf("#rec") >= 0){
            $(id).addClass('just_as_added_button')
            $(id).find('a').parentsUntil(id).addClass('uncss_us_plz')
            $(this).append($(id))
        }
        //$(id).remove();/**/
    })
}
//messengers
if($('.t390__btn-wrapper').length){
    $('.t390__btn-wrapper').each(function(){
        var id = $(this).find('a').attr('href')
        $(this).find('a').remove()
        if(id.indexOf("#rec") >= 0){
            $(id).addClass('just_as_added_button')
            $(id).find('a').parentsUntil(id).addClass('uncss_us_plz')
            $(this).append($(id))
        }
        //$(id).remove();/**/
    })
}

//Table Bottom --------------------------------------------------------------
if($('.block_table_bottom').length){
    var id = $('.block_table_bottom').attr('data-id')
    var src = $('.block_table_bottom').attr('data-src')
    $('#'+id).append('<div style="position:relative;"><div class="custom_table_bottom" style="background-image:url('+src+');"></div></div>')
}













    });
})(jQuery);



