document.addEventListener("DOMContentLoaded", function() {
    const nav_button = document.getElementById("nav-button");
    const nav = document.getElementById("nav");
    const nav_links = document.getElementsByClassName("nav-link");

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
})
