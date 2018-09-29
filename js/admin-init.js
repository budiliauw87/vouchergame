$(function() {
    "use strict";

    var window_width = $(window).width();
    /*Preloader*/
    $(window).load(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 200);
    });
    $('.collapsible').collapsible();

    //dropdown 
    $(".dropdown-trigger").dropdown({
        alignment: 'right',
        inDuration: 300,
        outDuration: 125,
        hover: true,
        constrainWidth: false,
        coverTrigger: false // Displays dropdown below the button
    });
    
    // Fullscreen toggle on click
    $('.toggle-fullscreen').click(function() {
        toggleFullScreen();
    });
    
    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    //side menu toggle
    $('.sidenav').sidenav();

    $('.sidenav-trigger').on('click',function(){
       $('.sidenav').addClass('sidenav-close');
    });
}); // end of document ready