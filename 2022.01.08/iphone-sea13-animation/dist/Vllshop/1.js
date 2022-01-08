window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

  let $h1 = document.querySelector('h1')
  let $theChip = document.querySelector('#the-chip')
  let $VllshopTextBg = document.querySelector('#the-chip .text-bg')

  $theChip.style.width = 994 + document.documentElement.clientWidth * 30 * (scrolled * scrolled * scrolled) + 'px'
  $theChip.style.height = 255 + document.documentElement.clientWidth * 3.5 * (scrolled * scrolled * scrolled) + 'px'

  let addP = scrolled * 0.32 * 100
  let addH = scrolled * 0.83 * 100

  if (scrolled >= 0.5) {
    $VllshopTextBg.style.opacity = (1 - scrolled) / 0.5
    $theChip.classList.add('transparent')
    $theChip.style.boxShadow = 'none'

  } else {
    $VllshopTextBg.style.opacity = 1
    $theChip.classList.remove('transparent')
    $theChip.style.boxShadow = `0px 0px 0px 10vw #b5cff7`
  }

  if (scrolled >= 0.82) {
    $h1.style.opacity = scrolled - 0.82 + scrolled * 0.82
  } else {
    $h1.style.opacity = 0
    $theChip.style.opacity = 1
    $theChip.style.transform = `translate(-${(addP + 50) }%, -${(addH + 50) }%)`
  }

  if (scrolled > 0.97) {
    $theChip.style.opacity = 0
  }

})