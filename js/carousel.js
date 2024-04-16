document.addEventListener("DOMContentLoaded", function() {

  const aboutSection = document.getElementById("about").offsetTop;
  const navbar = document.getElementById("nav");
  window.onscroll = function () {
    if (window.pageYOffset >= aboutSection - 100) { // 50 is an offset for better timing
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
};

  const bubbles = document.getElementsByClassName("info-bubble");

  for (let i = 0; i < bubbles.length; ++i) {
    bubbles[i].addEventListener("click", function() {
      this.classList.toggle("toggled");
    })

    bubbles[i].addEventListener("keydown", function(event) {
      if (event.key === ' ' || event.keyCode === 32) {
        event.preventDefault(); // stops space from scrolling
        this.classList.toggle("toggled");
      }
    })
  }
});