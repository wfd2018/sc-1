'use strict';


$(document).ready(function () {
    $('.sidenav').sidenav();
});


var heroShinker = function () {
    var hero = jQuery('.hero-nav'),
        heroHeight = jQuery('.hero-nav').outerHeight(true);
    jQuery(window).scroll(function () {
        var scrollOffset = jQuery(window).scrollTop();
        if (scrollOffset < heroHeight) {
            jQuery(hero).css('height', (100 - scrollOffset / 3) + 'vh');
        }
    });
}
heroShinker();



$(document).ready(function () {
    $('.modal').modal();
});

// var instance = M.Modal.getInstance(elem);


$(document).ready(function () {
    $('.collapsible').collapsible();
});



$(document).ready(function () {
    $('.tooltipped').tooltip();
});


/* var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
M.toast({
    html: toastHTML
});  */


$('.dropdown-trigger').dropdown();
