function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target")
}
function increaseRankBy(n) {
 const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
for (let i = 0; i < lis.length; i++) {
lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
  }
}

function deepestChild() {
  var divs=document.getElementById("grand-node").querySelectorAll("div");
  var deepest;
   
  deepest=divs[parseInt(divs.length-1)]

return deepest
}