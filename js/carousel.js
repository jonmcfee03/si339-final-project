document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.info-bubble');
    let isDragging = false, startPos = 0, currentTranslate = 0, prevTranslate = 0, animationID = 0, currentIndex = 0;
  
    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('touchend', touchEnd);
    carousel.addEventListener('touchmove', touchMove);
  
    // Disable context menu on long touch
    window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
  
    function touchStart(event) {
        console.log("touchstart");
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        carousel.classList.add('grabbing');
    }
  
    function touchEnd() {
        console.log("touchend");
        isDragging = false;
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100 && currentIndex < carousel.children.length - 1) currentIndex += 1;
        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

        setPositionByIndex();
    }
  
    function touchMove(event) {
        console.log("touchmove");
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }
  
    function getPositionX(event) {
        return event.touches[0].clientX;
    }
  
    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }
  
    function setSliderPosition() {
        crousel.style.transform = `translateX(${currentTranslate}px)`;
    }
  
    function setPositionByIndex() {
        currentTranslate = currentIndex * -window.innerWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }
  });
  