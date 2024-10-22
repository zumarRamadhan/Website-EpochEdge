let el = document.getElementById('card1')
const height = el.clientHeight
const width = el.clientWidth
el.addEventListener('mousemove', handleMove)
function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 40 * ((xVal - width / 2) / width)
  const xRotation = -40 * ((yVal - height / 2) / height)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  el.style.transform = string
}

el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(700px) scale(1) rotateX(0) rotateY(0)'
})
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(700px) scale(0.9) rotateX(0) rotateY(0)'
})
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(700px) scale(1.1) rotateX(0) rotateY(0)'
})