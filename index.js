function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested div div div .target')
}

function deepestChild() {
    const nodeParent = document.getElementById("grand-node").querySelectorAll("div")

    for (let i = nodeParent.length - 1 ; i < nodeParent.length; i++) {
        return nodeParent[i]
    }
}

function increaseRankBy(n) {
    const rankedList = document.getElementById("app").querySelectorAll("ul.ranked-list li")
    
    for (let i = 0; i < rankedList.length; i++) {
        const parseNum = parseInt(rankedList[i].innerHTML)
        const newNum = parseNum + n
        rankedList[i].innerHTML = newNum
    }
}