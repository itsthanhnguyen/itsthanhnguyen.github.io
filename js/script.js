function expandNav() {
    if ($(window).width() <= 768) {
        $(".navigation-flyout > ol").css({
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
    } else {
        $(".content-table").css({
            "transform": "translateX(0rem)",
            "margin-right": "0rem"
        });
        
    }
}

function collapseNav() {
    if ($(window).width() <= 768) {
        $(".navigation-flyout > ol").css({
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
    } else {
        $(".content-table").css({
            "transform": "translateX(19rem)",
            "margin-right": "-19rem"
        });
    }
}

$(document).ready(function() {
    if ($(window).width() <= 768) {
        var navCollapsed = true;
    } else {
        var navCollapsed = false;
    }
    $(".icon-format_list_numbered").click(function(e) {
        if (navCollapsed){
            expandNav()
            navCollapsed = false;
        } else {
            collapseNav()
            navCollapsed = true;
        }
    });
    $(".navigation-flyout > ol > li").click(function(e) {
        if (!navCollapsed){
            collapseNav()
            navCollapsed = true;
        }
    });
    $(".icon-font-size-1").click(function(e) {
        $(":root").css({
            "font-size": "18px"
        });
        $(".icon-font-size-1").css({
            "color": "var(--header-color)"
        });
        $(".icon-font-size-2").css({
            "color": "var(--grey-1)"
        });
        $(".icon-font-size-3").css({
            "color": "var(--grey-1)"
        });
    });
    $(".icon-font-size-2").click(function(e) {
        $(":root").css({
            "font-size": "20px"
        });
        $(".icon-font-size-1").css({
            "color": "var(--grey-1)"
        });
        $(".icon-font-size-2").css({
            "color": "var(--header-color)"
        });
        $(".icon-font-size-3").css({
            "color": "var(--grey-1)"
        });
    });
    $(".icon-font-size-3").click(function(e) {
        $(":root").css({
            "font-size": "24px"
        });
        $(".icon-font-size-1").css({
            "color": "var(--grey-1)"
        });
        $(".icon-font-size-2").css({
            "color": "var(--grey-1)"
        });
        $(".icon-font-size-3").css({
            "color": "var(--header-color)"
        });
    });

})

// Dark light mode switch

var colorScheme;

const savedColorScheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (savedColorScheme) {
    document.documentElement.setAttribute('data-theme', savedColorScheme);
    colorScheme = savedColorScheme;
} else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorScheme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        colorScheme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        colorScheme = e.matches ? "dark" : "light";
    });
}

function switchTheme() {
    if (colorScheme == 'light') {
        colorScheme = "dark";
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        $(".switch").removeClass("icon-moon-fill");
        $(".switch").addClass("icon-sun-fill");
        $(".dark-img").css({
            "display": "block"
        });
        $(".light-img").css({
            "display": "none"
        });
    } else {
        colorScheme = "light";
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        $(".switch").addClass("icon-moon-fill");
        $(".switch").removeClass("icon-sun-fill");
        $(".light-img").css({
            "display": "block"
        });
        $(".dark-img").css({
            "display": "none"
        });
    }
}

$(document).ready(function() {
    if (colorScheme == "dark") {
        $(".switch").removeClass("icon-moon-fill");
        $(".switch").addClass("icon-sun-fill");
        $(".dark-img").css({
            "display": "block"
        });
        $(".light-img").css({
            "display": "none"
        });
    } else {
        $(".switch").addClass("icon-moon-fill");
        $(".switch").removeClass("icon-sun-fill");
        $(".light-img").css({
            "display": "block"
        });
        $(".dark-img").css({
            "display": "none"
        });
    }
    $(".switch").click(function(e) {
        switchTheme();
    });
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos < 500) {
        $(".scroll-to-top").css({
            "transform": "scale(0)",
            "opacity": "0"
        });
    } else {
        $(".scroll-to-top").css({
            "transform": "scale(1)",
            "opacity": "0.5"
        });
    }
    prevScrollpos = currentScrollPos;
}

$(document).ready(function() {
    $(".scroll-to-top").click(function(e) {
        $('html,body').animate({scrollTop:0},0);
    });
});

// Transition
$(document).ready(function() {
    $(".card > div > button").click(function(e) {
        var navigateTo = "http://itsthanhnguyen.github.io/" + $(this).parents().parents()[0].id;
        $('html, body').animate({
            scrollTop: $("#"+$(this).parents().parents()[0].id).offset().top
        }, 0, function() {
            window.location.assign(navigateTo);
        })
    });
});
