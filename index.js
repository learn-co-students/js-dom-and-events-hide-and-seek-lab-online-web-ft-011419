function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
<<<<<<< HEAD
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node')
  while (grandNode.children[0]) {
    grandNode = grandNode.children[0];
  }
  return grandNode
=======
  return document.querySelector('.target, #nested')
>>>>>>> 29fb13dac4ccc0cda205296f96a1a52e9f7062af
}
