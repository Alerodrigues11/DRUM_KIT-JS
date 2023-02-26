const audio = document.querySelectorAll('audio')
const divs = document.querySelectorAll('.key')

window.addEventListener('keydown', function(ev) {
  let seeKeyCode = ev.keyCode;
  audio.forEach(function(element) {
    let info = element.dataset.key;
    divs.forEach(function(div) {
    let section = div.dataset.key
    if(seeKeyCode == info && seeKeyCode == section) {
      element.currentTime = 0;
      element.play();
      div.classList.add('playing');
    }
    })
  })
})

window.addEventListener('keyup', function(ev) {
  let seeKeyCode = ev.keyCode;
  divs.forEach(function(div) {
    let section = div.dataset.key;
    if(seeKeyCode == section) {
      div.classList.remove('playing');
    }
    })
  })

