var firstNumberEle = document.body.querySelector(".firstNumber");
var operatorEle = document.body.querySelector(".operator");
var secondNumberEle = document.body.querySelector(".secondNumber");
var answerEle = document.body.querySelector(".answer");

var first = Number(prompt("What is your first number?"));
var sign = prompt("What operator would you like to use?");
var second = Number(prompt("What is your second number?"));

if(!isNaN(first)){
  firstNumberEle.innerHTML=first
}else{
  firstNumberEle.innerHTML="This is not a number"
}

if(sign=="+"||sign=="-"||sign=="*"||sign=="/"){
  operatorEle.innerHTML=sign
}else{
  operatorEle.innerHTML="This is not an operator"
}

if(!isNaN(second)){
  secondNumberEle.innerHTML=second
}else{
  secondNumberEle.innerHTML="This is not a number"
}

if(sign=="+"){
  answerEle.innerHTML=eval("first + second")
}

if(sign=="-"){
  answerEle.innerHTML=eval("first - second")
}

if(sign=="*"){
  answerEle.innerHTML=eval("first * second")
}

if(sign=="/"){
  answerEle.innerHTML=eval("first / second")
}