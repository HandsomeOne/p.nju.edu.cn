document.querySelector('#password').addEventListener('focus', function () {
  document.querySelector('#whale').className = 'password'
})
document.querySelector('#password').addEventListener('blur', function () {
  document.querySelector('#whale').className = ''
})
function toggle() {
  if (document.querySelector('#before').style.display === 'none') {
    document.querySelector('#before').style.display = 'block'
    document.querySelector('#after').style.display = 'none'
  }
  else {
    document.querySelector('#before').style.display = 'none'
    document.querySelector('#after').style.display = 'block'
  }
}
document.querySelector('#login_button').addEventListener('click', toggle)
document.querySelector('#logout_button').addEventListener('click', toggle)
function getTransformedPoint(x, y, cx, cy, r) {
  var d = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy))
  var _d = Math.atan(d) * r / (Math.PI / 2)
  var _x = (x - cx) * _d / d
  var _y = (y - cy) * _d / d
  return { 'x': _x, 'y': _y }
}

var eyeL = document.querySelector('#eye-l')
var eyeR = document.querySelector('#eye-r')
var cxL = eyeL.getBoundingClientRect().left + 9
var cyL = eyeL.getBoundingClientRect().top + 9
var cxR = eyeR.getBoundingClientRect().left + 9
var cyR = eyeR.getBoundingClientRect().top + 9
document.body.addEventListener('mousemove', function (e) {
  var x = e.clientX
  var y = e.clientY
  eyeL.style.left = 25.8 + getTransformedPoint(x, y, cxL, cyL, 5).x + 'px'
  eyeL.style.top = 68.4 + getTransformedPoint(x, y, cxL, cyL, 5).y + 'px'
  eyeR.style.left = 166.2 + getTransformedPoint(x, y, cxR, cyR, 5).x + 'px'
  eyeR.style.top = 68.4 + getTransformedPoint(x, y, cxR, cyR, 5).y + 'px'
})