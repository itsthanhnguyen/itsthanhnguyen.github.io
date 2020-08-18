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

    try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            colorScheme = e.matches ? "dark" : "light";
        });
    } catch (error) {
        console.log(error);
    }

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

function darkMode() {
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
    
    $("#cassiopeia_design-process").html("<source srcset='images/cassiopeia_design-process-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_design-process-dark.png' type='image/png'> <img src='images/cassiopeia_design-process-dark.png' alt='Development Process'></img>");
    $("#cassiopeia_constraints_small").html("<source srcset='images/cassiopeia_constraints_small-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_small-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_small-dark.png' alt='Small-Sized Habitat'></img>");
    $("#cassiopeia_constraints_slow").html("<source srcset='images/cassiopeia_constraints_slow-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_slow-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_slow-dark.png' alt='Slow Internet Connection'>");
    $("#cassiopeia_constraints_sad").html("<source srcset='images/cassiopeia_constraints_sad-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_sad-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_sad-dark.png' alt='Pronity to Mental Distress'>");
    $("#cassiopeia_constraints_lab").html("<source srcset='images/cassiopeia_constraints_lab-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_lab-dark.png' type='image/png'> <img src='images/cassiopeia_constraints_lab-dark.png' alt='Complex Laboratory Tasks'></img>");
    $("#cassiopeia_system-architecture").html("<source srcset='images/cassiopeia_system-architecture-dark.webp' type='image/webp'> <source srcset='images/cassiopeia_system-architecture-dark.png' type='image/png'> <img src='images/cassiopeia_system-architecture-dark.png' alt='System Architecture'>");

}

function lightMode() {
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
   
    $("#cassiopeia_design-process").html("<source srcset='images/cassiopeia_design-process.webp' type='image/webp'> <source srcset='images/cassiopeia_design-process.png' type='image/png'> <img src='images/cassiopeia_design-process.png' alt='Development Process'></img>");
    $("#cassiopeia_constraints_small").html("<source srcset='images/cassiopeia_constraints_small.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_small.png' type='image/png'> <img src='images/cassiopeia_constraints_small.png' alt='Small-Sized Habitat'></img>");
    $("#cassiopeia_constraints_slow").html("<source srcset='images/cassiopeia_constraints_slow.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_slow.png' type='image/png'> <img src='images/cassiopeia_constraints_slow.png' alt='Slow Internet Connection'>");
    $("#cassiopeia_constraints_sad").html("<source srcset='images/cassiopeia_constraints_sad.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_sad.png' type='image/png'> <img src='images/cassiopeia_constraints_sad.png' alt='Pronity to Mental Distress'>");
    $("#cassiopeia_constraints_lab").html("<source srcset='images/cassiopeia_constraints_lab.webp' type='image/webp'> <source srcset='images/cassiopeia_constraints_lab.png' type='image/png'> <img src='images/cassiopeia_constraints_lab.png' alt='Complex Laboratory Tasks'></img>");
    $("#cassiopeia_system-architecture").html("<source srcset='images/cassiopeia_system-architecture.webp' type='image/webp'> <source srcset='images/cassiopeia_system-architecture.png' type='image/png'> <img src='images/cassiopeia_system-architecture.png' alt='System Architecture'>");

}

function expandNav() {
    if ($(window).width() <= 1024) {
        $(".navigation-flyout > ul").css({
            "visibility": "visible"
        });
        $(".navigation-flyout").css({
            "opacity": "1",
            "z-index": "9"
        });
        $('html').css({
            "overflow": "hidden"
        });
        $("nav").css({
            "background-color": "transparent",
            "backdrop-filter": " ",
            "-webkit-backdrop-filter": " "
        })
    } else {
        $(".content-table").css({
            "display": "block"
        });
        setTimeout(function(){ 
            $(".content-table").css({
                "transform": "translateX(0rem)",
                "margin-right": "0"
            });
        }, 1);
        
    }
}

function collapseNav() {
    if ($(window).width() <= 1024) {
        $(".navigation-flyout > ul").css({
            "visibility": "hidden"
        });
        $(".navigation-flyout").css({
            "opacity": "0",
            "z-index": "-10"
        });
        $('html').css({
            "overflow": "auto"
        });
        $("nav").css({
            "background-color": "var(--nav-bg-color)",
            "backdrop-filter": "blur(30px) saturate(125%)",
            "-webkit-backdrop-filter": "blur(30px) saturate(125%)"
        })
    } else {
        $(".content-table").css({
            "transform": "translateX(" + $(".content-table").outerWidth(true) + "px)",
            "margin-right": - $(".content-table").outerWidth(true) + "px"
        });
        setTimeout(function(){ 
            $(".content-table").css({
                "display": "none"
            });
        }, 200);
       
    }
}

$(document).ready(function () {
    if ($(window).width() <= 1024) {
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

    $(".navigation-flyout > ul > li").click(function (e) {
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
    $(".anchor").click(function(e){
       $('html,body').scrollTop($($(this)[0].id.replace('anchor-','#')).offset().top);
    });

    //Transitions

    if ($(window).width() <= 1024 && window.location.href == "https://itsthanhnguyen.github.io/") {
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

    // Dark Light Modes
    if (colorScheme == 'light') {
        lightMode();
    } else {
        darkMode();
    }
    $(".switch").click(function (e) {
        switchTheme();
    });

    //Logo

    $(".home").hover(function(){
        $(".home > a").css({
            "font-size": "18px",
            "color": "var(--header-color)"
        });
    }, function(){
        $(".home > a").css({
            "font-size": "16px",
            "color": "var(--grey-1)"
        });
    });

    //Scroll
    $(".scroll-to-top").click(function (e) {
        if (window.location.href != "https://itsthanhnguyen.github.io/"){
            $('html,body').animate({ scrollTop: 0 }, 0);
        } else {
            if (window.pageYOffset < 250) {
                $('html, body').animate({
                    scrollTop: $("#cassiopeia").offset().top
                }, 0);
            } else {
                $('html,body').animate({ scrollTop: 0 }, 0);
            }
        }
        if (!navCollapsed && $(window).width() <= 1024){
            collapseNav()
            navCollapsed = true;
        }
    });
})

// Scroll
var prevScrollpos = window.pageYOffset;


$(window).scroll(function () {
    var currentScrollPos = window.pageYOffset;
    if (window.location.href != "https://itsthanhnguyen.github.io/"){
        if (currentScrollPos < 250) {
            $(".scroll-to-top").css({
                "transform": "scale(0)",
                "opacity": "0"
            });
        } else {
            $(".scroll-to-top").css({
                "transform": "scale(1)",
                "opacity": "1"
            });
        }
    } else {
        if (currentScrollPos < 250) {
            $(".scroll-to-top").css({
                "transform": "rotate(180deg)"
            });
        } else {
            $(".scroll-to-top").css({
                "transform": "rotate(0)"
            });
        }
    }
    if (currentScrollPos >= prevScrollpos){
        $(".home").css({
            "transform": "scale(0.9)",
            "-webkit-transform": "scale(0.9)",
            "opacity": "0",
            "top": "-4rem"
        });
    } else {
        $(".home").css({
            "transform": "scale(1)",
            "-webkit-transform": "scale(1)",
            "opacity": "1",
            "top": "27px"
        });
    }
    $("section").each(function(index, element){
        if (element.offsetTop - 50 < currentScrollPos){           
            $('.anchor').removeClass("current-section");
            $(".anchors > #anchor-" + element.id).addClass("current-section");
        }
    });
    prevScrollpos = currentScrollPos;
});
