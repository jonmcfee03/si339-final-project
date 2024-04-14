function scrollToItem(itemPosition, numItems, scroller) {
    scroller.scrollTo({
      scrollLeft: Math.floor(
        scroller.scrollWidth * (itemPosition / numItems)
      ),
      behavior: 'smooth'
    })
  }

  function testSupportsSmoothScroll () {
    var supports = false
    try {
      var div = document.createElement('div')
      div.scrollTo({
        top: 0,
        get behavior () {
          supports = true
          return 'smooth'
        }
      })
    } catch (err) {}
    return supports
  }