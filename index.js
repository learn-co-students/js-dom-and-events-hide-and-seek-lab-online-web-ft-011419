function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  };
};

function deepestChild() {
  let grandNode = document.querySelector('#grand-node');

  while (grandNode.children[0]) {
    grandNode = grandNode.children[0];
  };

  return grandNode;
};
