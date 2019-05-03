function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('#app .ranked-list')

  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = n + parseInt(rankedList[i].innerHTML)
  }
}

function deepestChild() {
  let parent = document.getElementById('grand-node')
  let child = parent.children[0]

  while (child.children.length > 0) {
    parent = child
    child = parent.children[0]
  }

  return child 
}
