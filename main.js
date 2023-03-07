
//uso prompt per chiedere il nome
let userName = prompt("Please enter your name");
console.log(userName);

//uso prompt per chiedere il cognome

userSurname = prompt("Please enter your surname");
console.log(userSurname);

//uso prompt let per chiedere il colore

usercolor = prompt("Please enter your favourite color");
console.log(usercolor);

   
//  footer :uso var let  per il formato nomecognomecolore23 
let result = userName + userSurname + usercolor + 23;
console.log(result);
let element = document.getElementById("result_display");
console.log ();
element.innerHTML = result;
