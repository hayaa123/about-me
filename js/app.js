'use strict'

let score = 0

let greet = prompt ("what is your name?")
alert ("hello "+ greet +" welcome :D")

let q1 = prompt('do I have a cat ?')

switch(q1.toLowerCase()){
  case 'y' :
  case 'yes' :
    // console.log ("incorrect")
    alert("incorrect")
    break;
  case 'n' :
  case 'no' :
    // console.log ("correct")
    score++ 
    console.log(score)
    alert("correct")
    break;
  }

let q2 = prompt('do I love food more than games ?')

switch(q2.toLowerCase()){
  case 'y' :
  case 'yes' :
    // console.log ("correct")
    alert("correct")
    score++ 
    console.log(score)
    break;

  case 'n' :
  case 'no' :
    // console.log ("incorrect")
    alert("incorrect")
    break;}

let q3 = prompt('do I play sport every day ?')

switch(q3.toLowerCase()){
  case 'y' :
  case 'yes' :
    // console.log ("incorrect")
    alert("incorrect")
    break;
  case 'n' :
  case 'no' :
    // console.log ("correct")
    alert("correct")
    score++ 
    console.log(score)
    break;
}

let q4 = prompt("do I prefer tea over coffee ? ")
switch(q4.toLowerCase()){
  case 'y' :
  case 'yes' :
    // console.log ("correct")
    alert("correct")
    score++ 
    console.log(score)
    break;
  case 'n' :
  case 'no' :
    // console.log ("incorrect")
    alert("incorrect")
    break;}


let q5 = prompt ("do I love winter?")
switch(q5.toLowerCase()){
  case 'y' :
  case 'yes' :
    // console.log ("correct")
    score++ 
    console.log(score)
    alert("correct")
    break;
  case 'n' :
  case 'no' :
    // console.log ("incorrect")
    alert("incorrect")
    break;}


let birthmonth = prompt('in what mounth you think I was borned?')


for (let i=0;i<4;i++)
{
  if (birthmonth > 6){
    alert ("too high")
    birthmonth = prompt('in what mounth you think I was borned?')
  } 
  else if (birthmonth < 6){
    alert ("too low")
    birthmonth = prompt('in what mounth you think I was borned?')
  }
  else if (birthmonth == 6){
    alert ("correct" )
    score++ 
    console.log(score)
    break    
  }
}
if (birthmonth != 6){
  alert ("my birth month is 6 :D ")
}

let breakfast_array = ['tea','oats','apple','tomatoes','cheese','dates','cookies']
let bol = false


  for (let i=0;i<6;i++){
    let breakfast = prompt("can you guss what I like to eat on brakfast")
    for (let j=0;j<breakfast_array.length;j++){
      if (breakfast_array[j] == breakfast  ){
        score++ 
        console.log(score)
        alert ("correct")
        bol = true 
        break
      }
    }
    if (bol == true){
      break
    }
  }
alert ("correct answers: " + breakfast_array )

alert ("your score"+score)



