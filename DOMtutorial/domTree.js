//get root node and show child nodes

const rootNode = document.getRootNode()
docchilds = rootNode.childNodes
console.log(docchilds)

//lets get child nodes of html

const htmlchilds = docchilds[1].childNodes
console.log(htmlchilds)

//lets get child nodes of body

const bodychild = htmlchilds[0].childNodes
console.log(bodychild)


//lets get parent node of html

const htmlparent = docchilds[0].parentNode
console.log(htmlparent)


//lets now change background of navbar which contains ul

const ul = document.querySelector('.ul')
navbar = ul.parentNode
navbar.style.backgroundColor = 'violet'
