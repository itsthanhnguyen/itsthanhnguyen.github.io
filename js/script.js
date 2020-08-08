function expandNav() {
    $(".navigation-flyout > ul").css({
        "visibility": "visible"
    });
    $(".navigation-flyout").css({
        "opacity": "1",
        "z-index" : "9"
    });
    $('body').css({
        "overflow": "hidden"
    });
    $("nav").css({
        "background-color": "transparent",
        "backdrop-filter": " ",
        "-webkit-backdrop-filter": " "
    })
   
}

function collapseNav() {
    $(".navigation-flyout > ul").css({
        "visibility": "hidden"
    });
    $(".navigation-flyout").css({
        "opacity": "0",
        "z-index" : "-10"
    });
    $('body').css({
        "overflow": "auto"
    });
    $("nav").css({
        "background-color": "var(--nav-bg-color)",
        "backdrop-filter": "blur(30px) saturate(125%)",
        "-webkit-backdrop-filter": "blur(30px) saturate(125%)"
    })
}

$(document).ready(function() {
  

    var navCollapsed = true;
    $(".icon-menu").click(function(e) {
        if (navCollapsed){
            expandNav()
            navCollapsed = false;
        } else {
            collapseNav()
            navCollapsed = true;
        }
    });
    $(".navigation-flyout > ul > li > a").click(function(e) {
        if (!navCollapsed){
            collapseNav()
            navCollapsed = true;
        }
    });
})
window.onscroll = function() {
    $('#top').css({
        'top': ($(this).scrollTop() / 1.5) + 'px',
        'opacity': 1 - ($(this).scrollTop() / 830),
        'transform': 'scale(' + (8000 - $(this).scrollTop()) / 8000 + ')',
    });
}