function getFirstSelector(selector) {
  const element = document.querySelector(selector)
  return element
}
function nestedTarget() {
  const element = document.querySelector('#nested .target')
  return element
}
function increaseRankBy(n) {
  const elements = document.querySelectorAll('.ranked-list li')
    for(let i = 0; i < elements.lenght; i++) {
       elemens[i].innerHTML = parseInt(elements[i].innerHTML) + n
    }

}
