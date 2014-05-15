// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


/*! http://tinynav.viljamis.com v1.2 by @viljamis */
(function(a,k,g){a.fn.tinyNav=function(l){var c=a.extend({active:"selected",header:"",indent:"- ",label:""},l);return this.each(function(){g++;var h=a(this),b="tinynav"+g,f=".l_"+b,e=a("<select/>").attr("id",b).addClass("tinynav "+b);if(h.is("ul,ol")){""!==c.header&&e.append(a("<option/>").text(c.header));var d="";h.addClass("l_"+b).find("a").each(function(){d+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)d+=c.indent;d+=a(this).text()+"</option>"});
    e.append(d);c.header||e.find(":eq("+a(f+" li").index(a(f+" li."+c.active))+")").attr("selected",!0);e.change(function(){k.location.href=a(this).val()});a(f).after(e);c.label&&e.before(a("<label/>").attr("for",b).addClass("tinynav_label "+b+"_label").append(c.label))}})}})(jQuery,this,0);

/** Accordion **/

/*
(function($) {

    var allPanels = $('.accordion > dd').hide();

    $('.accordion > dt > a').click(function(e) {
        e.preventDefault();
        $this = $(this);
        $target =  $this.parent().next();

        if(!$target.hasClass('active')){
            allPanels.removeClass('active').slideUp();
            $target.addClass('active').slideDown();
        }

        return false;
    });

})(jQuery);
*/



