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

let user = prompt('Please Type your gender again')
if(user==='male'){
  alert('Hello'+" " + 'Mr'+" " + name )
}
else if(user==='female'){
  alert('Hello' +' '+ 'Ms'+' '+ name)
}
else{
  alert('Hello')
}
