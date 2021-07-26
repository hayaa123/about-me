'use strict'
function y_correct (answer){
    
    if (answer.toLowerCase() =="yes" || answer.toLowerCase() =="y") {
        return "correct";
      } else {
        return "incorrect";
      }   
}

function n_correct (answer){
    
    if (answer.toLowerCase() =="no" || answer.toLowerCase() =="n") {
        return "correct";
      } else {
        return "incorrect";
      }   
}

let greet = prompt ("what is your name?")
alert ("hello "+ greet +" welcome :D")
let q1 = prompt('do I have a cat ?')
// console.log (n_correct(q1))
alert(n_correct(q1))


let q2 = prompt('do I love food more than games ?')
// console.log (y_correct(q2))
alert(y_correct(q2))


let q3 = prompt('do I play sport every day ?')
// console.log (n_correct(q3))
alert(n_correct(q3))


let q4 = prompt("do I prefer tea over coffee ? ")
// console.log (y_correct(q4))
alert(y_correct(q4))


let q5 = prompt ("do I love winter?")
// console.log (y_correct(q5))
alert(y_correct(q5))