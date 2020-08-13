function expandNav() {
    if ($(window).width() <= 768) {
        $(".navigation-flyout > ol").css({
            "visibility": "visible"
        });
        $(".navigation-flyout").css({
            "opacity": "1",
            "z-index": "9"
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
            "z-index": "-10"
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

$(document).ready(function () {
    if ($(window).width() <= 768) {
        var navCollapsed = true;
    } else {
        var navCollapsed = false;
    }
    $(".icon-format_list_numbered").click(function (e) {
        if (navCollapsed) {
            expandNav()
            navCollapsed = false;
        } else {
            collapseNav()
            navCollapsed = true;
        }
    });
    $(".navigation-flyout > ol > li").click(function (e) {
        if (!navCollapsed) {
            collapseNav()
            navCollapsed = true;
        }
    });
    $(".icon-font-size-1").click(function (e) {
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
    $(".icon-font-size-2").click(function (e) {
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
    $(".icon-font-size-3").click(function (e) {
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
        darkMode();
    } else {
        colorScheme = "light";
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

function darkMode (){
    $(".switch").removeClass("icon-moon-fill");
    $(".switch").addClass("icon-sun-fill");
    $(".dark-img").css({
        "display": "block"
    });
    $(".light-img").css({
        "display": "none"
    });
    $("#hashtag_design-process").html("<source srcset='images/hashtag_design-process-dark.webp' type='image/webp'> <source srcset='images/hashtag_design-process-dark.png' type='image/png'> <img src='images/hashtag_design-process-dark.png' alt='Development Process'></img>");
    $("#hashtag_algorithm").html("<source srcset='images/hashtag_algorithm-dark.webp' type='image/webp'> <source srcset='images/hashtag_algorithm-dark.png' type='image/png'> <img src='images/hashtag_algorithm-dark.png' alt='Algorithm'>");  
    $("#hashtag_system-architecture").html("<source srcset='images/hashtag_system-architecture-dark.webp' type='image/webp'> <source srcset='images/hashtag_system-architecture-dark.png' type='image/png'> <img src='images/hashtag_system-architecture-dark.png' alt='System Architecture'>");
    
    $("#cassiopeia_constraints_small").html("<source srcset='images/cassiopeia_constraints_small-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_small-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_small-dark.png' alt='Small-Sized Habitat'></img>");
    $("#cassiopeia_constraints_slow").html("<source srcset='images/cassiopeia_constraints_slow-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_slow-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_slow-dark.png' alt='Slow Internet Connection'>");  
    $("#cassiopeia_constraints_sad").html("<source srcset='images/cassiopeia_constraints_sad-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_sad-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_sad-dark.png' alt='Pronity to Mental Distress'>");
    $("#cassiopeia_constraints_lab").html("<source srcset='images/cassiopeia_constraints_lab-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_lab-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_lab-dark.png' alt='Complex Laboratory Tasks'></img>");
    $("#cassiopeia_system-architecture").html("<source srcset='images/cassiopeia_system-architecture-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_system-architecture-dark.png' type='image/png'> <img src='images/cassiopeia_system-architecture-dark.png' alt='System Architecture'>");  

}

function lightMode (){
    $(".switch").addClass("icon-moon-fill");
    $(".switch").removeClass("icon-sun-fill");
    $(".light-img").css({
        "display": "block"
    });
    $(".dark-img").css({
        "display": "none"
    });
    $("#hashtag_design-process").html("<source srcset='images/hashtag_design-process.webp' type='image/webp'> <source srcset='images/hashtag_design-process.png' type='image/png'> <img src='images/hashtag_design-process.png' alt='Development Process'></img>");
    $("#hashtag_algorithm").html("<source srcset='images/hashtag_algorithm.webp' type='image/webp'> <source srcset='images/hashtag_algorithm.png' type='image/png'> <img src='images/hashtag_algorithm.png' alt='Algorithm'>");
    $("#hashtag_system-architecture").html("<source srcset='images/hashtag_system-architecture.webp' type='image/webp'> <source srcset='images/hashtag_system-architecture.png' type='image/png'> <img src='images/hashtag_system-architecture.png' alt='System Architecture'>");

    $("#cassiopeia_constraints_small").html("<source srcset='images/cassiopeia_constraints_small.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_small.png' type='image/png'> <img src='images/cassiopeia_constraints_small.png' alt='Small-Sized Habitat'></img>");
    $("#cassiopeia_constraints_slow").html("<source srcset='images/cassiopeia_constraints_slow.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_slow.png' type='image/png'> <img src='images/cassiopeia_constraints_slow.png' alt='Slow Internet Connection'>");  
    $("#cassiopeia_constraints_sad").html("<source srcset='images/cassiopeia_constraints_sad.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_sad.png' type='image/png'> <img src='images/cassiopeia_constraints_sad.png' alt='Pronity to Mental Distress'>");
    $("#cassiopeia_constraints_lab").html("<source srcset='images/cassiopeia_constraints_lab.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_lab.png' type='image/png'> <img src='images/cassiopeia_constraints_lab.png' alt='Complex Laboratory Tasks'></img>");
    $("#cassiopeia_system-architecture").html("<source srcset='images/cassiopeia_system-architecture.webp' type='image/webp'> <source srcset='images/cassiopeia_system-architecture.png' type='image/png'> <img src='images/cassiopeia_system-architecture.png' alt='System Architecture'>");  

}

$(document).ready(function () {
    if (colorScheme == 'light') {
        lightMode();
    } else {
        darkMode();
    }
    $(".switch").click(function (e) {
        switchTheme();
    });
});

// Scroll

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
                    $(".scroll-to-top").click(function (e) {
                        $('html,body').animate({ scrollTop: 0 }, 0);
                    });
});

// Transition
$(document).ready(function() {
                    console.log(window.location.href);
    if ($(window).width() <= 768 && window.location.href == "https://itsthanhnguyen.github.io/"){
                    $(".card").click(function (e) {
                        var navigateTo = "https://itsthanhnguyen.github.io/" + $(this)[0].id;
                        $('html, body').animate({
                            scrollTop: $("#" + $(this)[0].id).offset().top
                        }, 0, function () {
                            window.location.assign(navigateTo);
                        })
                    });
    } else {
                    $(".card > div > button").click(function (e) {
                        var navigateTo = "https://itsthanhnguyen.github.io/" + $(this).parents().parents()[0].id;
                        $('html, body').animate({
                            scrollTop: $("#" + $(this).parents().parents()[0].id).offset().top
                        }, 0, function () {
                            window.location.assign(navigateTo);
                        })
                    });
    }
});
