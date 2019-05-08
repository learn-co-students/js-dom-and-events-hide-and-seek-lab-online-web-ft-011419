//document.querySelector(selector);
//document.querySelectorAll(selector);

function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

// research
function increaseRankBy(n) {
    const incN = document.querySelectorAll('#app .ranked-list li');
    for (let i=0; i < incN.length; i++) {
        incN[i].innerHTML = n + parseInt(incN[i].innerHTML);
    }
}

function deepestChild() {
    let root = document.getElementById('grand-node');
    let branch = root.children[0];
    while (branch.children.length > 0) {
        root = branch;
        branch = root.children[0]
    }
    return branch
}