$(function () {
    $("#main-nav").tinyNav({
        active: 'activo'

    });
});

$(document).ready(function(){

    /** Acordion **/
    var allPanels = $('.accordion > dd').hide();
    var allTriggers = $('.accordion > dt > a');

   //var accordionAbrir_md = '<i class="fa fa-plus-circle">&nbsp;&nbsp;</i> Ver más';
   //var accordionCerrar_md = '<i class="fa fa-times-circle">&nbsp;&nbsp;</i> Cerrar';
   //var accordionAbrir_xs = '<i class="fa fa-plus-circle fa-3x">&nbsp;&nbsp;</i>';
   //var accordionCerrar_xs = '<i class="fa fa-times-circle fa-3x">&nbsp;&nbsp;</i>';

    $(allTriggers).click(function() {
        //e.preventDefault();
        $this = $(this);
        $target =  $this.parent().next();
        //$btnMd = $this.chidren('.btn_md');
        //$btnXs = $this.chidren('.btn_xs');

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