let sliderRange= document.getElementById("sliderRange");
let sliderValue= document.getElementById("sliderValue");
let passBox= document.getElementById("passBox");
let lowerCase= document.getElementById("lowercase");
let upperCase= document.getElementById("uppercase");
let numbers= document.getElementById("numbers");
let symbols= document.getElementById("symbols");
let btn= document.getElementById("btn");

const empty="";
const uCase ="ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lCase ="abcdefghijklmnopqrstuvxyz";
const number ="0123456789";
const symbol= "!'@#$%^&*()_+-=][}{,./";

// Showing input slider value
sliderRange.addEventListener('input', function(){
    sliderValue.textContent=sliderRange.value;
    let length= sliderRange.value;
})
  
// Function generated after clicking the button
btn.addEventListener ('click', function(){
    let initialPassword= empty;
    (upperCase.checked) ? initialPassword += uCase : "";
    (lowerCase.checked) ? initialPassword += lCase : "";
    (numbers.checked) ? initialPassword += number : "";
    (symbols.checked) ? initialPassword += symbol : "";

    passBox.value = generatePassword(sliderRange.value, initialPassword)
 
})
//Generate password function
function generatePassword( length, initialPassword){
 let pass = "";
 for (let i=0; i< length; i++){
    pass += initialPassword.charAt(Math.floor(Math.random()*initialPassword.length))
 }
 return pass;

}
