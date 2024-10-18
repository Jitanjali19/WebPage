const passwordBox=document.getElementById('password');
const length=10;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const specialChar="$@#%^_+=-/[]{}|~*";
const number="0123456789";

const allChars=upperCase+lowerCase+specialChar+number;

function generatePass(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=specialChar[Math.floor(Math.random()*specialChar.length)];
    password+=number[Math.floor(Math.random()*number.length)];

    while(length>password.length){
password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}

// document.querySelector('#butt').addEventListener('click',generatePass());

//copy function
function copyPass(){
    passwordBox.select();
    document.execCommand("copy");
}
