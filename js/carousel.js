document.addEventListener("DOMContentLoaded", function() {

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