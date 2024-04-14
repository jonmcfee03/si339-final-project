document.addEventListener("DOMContentLoaded", function() {

  const bubbles = document.getElementsByClassName("info-bubble");

  for (let i = 0; i < bubbles.length; ++i) {
    bubbles[i].addEventListener("click", function() {
      this.classList.toggle("toggled");
    })
  }
});