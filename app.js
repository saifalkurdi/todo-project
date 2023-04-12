let name = prompt('please enter your name');
console.log(name);

let gender = prompt('please enter your gender');

if(gender==='male'){
  console.log('male');
}
else if(gender==='female')
console.log('female')
else{
  console.log(undefined)
}
  


let age = prompt('please enter your age');

if(age>18){
  console.log('allowed')
}
else{ alert('sorry you are not allowed')
  
}

let messege = confirm('would you like to skip the welcoming messege')
console.log(messege)

if(gender==='male'){
  alert('Hello'+" " + 'Mr'+" " + name )
}
else if(gender==='female'){
  alert('Hello' +' '+ 'Ms'+' '+ name)
}
else{
  alert('Hello')
}

let answersArr = [];

function askQuestion(question) {
  let answer = prompt(question);
  if(answer === '') {
    answer = 'invalid'
  }
  return answer;
}

function collectAnswers(){
  answersArr = [
  askQuestion("do you play football ?"),
  askQuestion("do you love js ?"),
  askQuestion("do you love html"),
  ]
}

function printAnswers(){
for( let i = 0; i < answersArr.length; i++ ){
  console.log(answersArr[i])
}

}


collectAnswers();
printAnswers();



