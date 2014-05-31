$(function () {
    $("#main-nav").tinyNav({
        active: 'activo'

    });
});

$(document).ready(function(){

    /** Acordion **/
    var allPanels = $('.accordion > dd').hide();
    var allTriggers = $('.accordion > dt > a');


    $(allTriggers).click(function() {

        $this = $(this);
        $target =  $this.parent().next();

        //if (!this.hasClass('protocolo_desactivado')){
            if(!$target.hasClass('active')){
                allPanels.removeClass('active').slideUp();
                allTriggers.removeClass('active');
                $target.addClass('active').slideDown();
                $this.addClass('active');
            }
            else{
                $target.removeClass('active').slideUp();
                $this.removeClass('active');
            }
        //}

        return false;
    });


});