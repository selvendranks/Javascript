//ele.insertAdjacent(where,html)
//where - beforebegin
//beforeend
//afterend
//afterbegin

const ele = document.querySelector('.about')
ele.insertAdjacentHTML('afterbegin','<p>afterbegin</p>')

ele.insertAdjacentHTML('beforebegin','<p>beforebegin</p>')

ele.insertAdjacentHTML('beforeend','<p>beforeend</p>')

ele.insertAdjacentHTML('afterend','<p>afterend</p>')

