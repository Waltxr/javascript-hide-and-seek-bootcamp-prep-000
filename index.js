function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0]
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  var numberOfDivs = document.getElementById('grand-node').querySelectorAll('div').length

  return document.getElementById('grand-node').querySelectorAll('div')[parseInt(numberOfDivs) - 1]
}
