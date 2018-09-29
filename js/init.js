$(function() {
    "use strict";
    
    var window_width = $(window).width();
    /*Preloader*/
    $(window).load(function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 200);
    });
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    //dropdown 
    $(".dropdown-trigger").dropdown({
        alignment: 'right',
        inDuration: 300,
        outDuration: 125,
        hover: false,
        constrainWidth: false,
        coverTrigger: false // Displays dropdown below the button
    });

    //slider
    $('.carousel').carousel({
        fullWidth: true, //Make the carousel a full width slider like the second example.
        indicators: true, //Set to true to show indicators.
    });

    //set auto slide
    setTimeout(autoplay, 4000); //4 detik
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4000);
    }

    //set on scolling change navbar
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            console.log("change");
            $('#navbar-header').removeClass('transparent');
            $('#navbar-header').addClass('blue darken-4');
        } else {
            $('#navbar-header').removeClass('blue darken-4');
            $('#navbar-header').addClass('transparent');
        }
    });

    //show wrapper chat
    $('#chatbtn').on('click', function() {
        //$('.chat-wrapper').slideUp(300);
        //$('.chat-wrapper').slideDown(300);
        $('.chat-wrapper').removeClass('hide');
        $('#chatbtn').hide();
    });

    $('#btnminize').on('click', function() {
        //$('.chat-wrapper').slideUp(300);
        $('.chat-wrapper').addClass('hide');
        $('#chatbtn').show();
    });

    //images chat box
    $('.materialboxed').materialbox();
}); // end of document ready