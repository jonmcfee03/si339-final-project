document.addEventListener("DOMContentLoaded", function() {
    const nav_button = document.getElementById("nav-button");
    const nav = document.getElementById("nav");
    const nav_links = document.getElementsByClassName("nav-link");
    const screen_width = window.screen.width;

    // If in mobile or desktop mode, set nav bar tabindex to -1 initially
    if (screen_width <= 480 || screen_width >= 980) {
        console.log("mobile or desktop");
        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].setAttribute("tabindex", "-1");
        }
    }

    if (screen_width <= 480) {
        console.log("Mobile")
        // event listener for mobile nav bar (open nav button)
        nav_button.addEventListener("click", () => {
            nav.classList.toggle("nav-toggle");
        
            for (let i = 0; i < nav_links.length; i++) {
                if (nav_links[i].getAttribute("tabindex") === "0") {
                    nav_links[i].setAttribute("tabindex", "-1");
                } else {
                    nav_links[i].setAttribute("tabindex", "0");
                }
            }
        });

        // adds event listener 
        for (let i = 0; i < nav_links.length; i++) {
            nav_links[i].addEventListener("click", () => {
                nav.classList.toggle("nav-toggle");
                for (let i = 0; i < nav_links.length; i++) {
                    if (nav_links[i].getAttribute("tabindex") === "0") {
                        nav_links[i].setAttribute("tabindex", "-1");
                    } else {
                        nav_links[i].setAttribute("tabindex", "0");
                    }
                }
            });
        }
    }

    if (screen_width >= 980) {
        console.log("desktop");
        const aboutSection = document.getElementById("about").offsetTop;
        window.onscroll = function () {
            if (window.pageYOffset >= aboutSection - 100) { // 50 is an offset for better timing
                nav.style.top = '0';
                for (let i = 0; i < nav_links.length; i++) {
                    nav_links[i].setAttribute("tabindex", "0");
                }
            } else {
                nav.style.top = '-100px';
                for (let i = 0; i < nav_links.length; i++) {
                    nav_links[i].setAttribute("tabindex", "-1");
                }
            }
        };
    }

    if (screen_width > 480 && screen_width < 980) {
        console.log("tablet")
        nav.style.top = '0';
    }
})
