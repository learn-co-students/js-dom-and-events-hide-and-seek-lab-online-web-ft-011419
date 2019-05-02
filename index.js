function   getFirstSelector(selector){
  return document.querySelector(selector)
}
function      nestedTarget(){
  return document.querySelector('#nested .target' )
}
function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = n + parseInt(lis[i].innerHTML)

  //  lis[i].innerHTML = (i + n).toString();
  }
}
function deepestChild(){
  let parent = document.getElementById('grand-node')
  let child = parent.children[0]
 while (child.children.length > 0 ){
   parent = child
   child = parent.children[0]
 }
 return child
}
