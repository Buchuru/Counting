let unputNum =document.querySelector(".input-num")
let count = 0;
function incrementMe(){
  count++;
  unputNum.innerText = count;
}
function makeZero(){
  count= 0;
  unputNum.textContent = count;
}
function decrementMe(){
  count--;
  unputNum.innerText = count;
}