//inner Html

const headline = document.querySelector('.about')
console.log(headline.innerHTML)

headline.innerHTML = '<h1>i am the don</h1>'
headline.innerHTML += '<button class=\"btn\"> submit </button>'

console.log(headline.innerHTML)