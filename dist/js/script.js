(function ($) {
    'use strict';



    $(".aside-trigger-left").on('click', function () {
        $(".shory_aside-left").toggleClass('open');
    });

    $(".aside-trigger-right").on('click', function () {

        $(".shory_aside-left").toggleClass('open');

    });



    /*-------------------------------------------------------------------------------
    Sticky Header
      -------------------------------------------------------------------------------*/
    var header = $(".can-sticky");
    var headerHeight = header.innerHeight();

    function doSticky() {
        if (window.scrollY > headerHeight) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }
    doSticky();
    //On scroll events
    $(window).on('scroll', function() {
        doSticky();
    });
})(jQuery);