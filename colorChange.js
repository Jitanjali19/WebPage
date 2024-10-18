//generate randome color
const randomColor=function(){
const hex = "0123456789ABCDEF"                  //we know hexadecimal values range in 0-16 or 0-F
let color='#'                                   //#354fff syntax of color               

for(let i=0;i<6;i++){
  color+=hex[Math.floor(Math.random()*16)]
}
return color                                   //return color in form of #354bdc
}

console.log(randomColor());          


let intervalId;
const startColorChange=function(){
    //ye condition ke ander tb likhege  jb interval id null se assign ho
    if(!intervalId){
    intervalId=setInterval(changeBGcolor,1000);
    }
    function changeBGcolor(){
        document.body.style.backgroundColor=randomColor();
    }    
}

const stopColorChange=function(){
    clearInterval(intervalId);  
    //code ko clean aur proffessional bnane ke liye 
    intervalId=null;                          //clearInterval for milisecond(interval time) stop
}

//click krne pr color chnage start and stop
document.querySelector('#start').addEventListener('click',startColorChange);
document.querySelector('#stop').addEventListener('click',stopColorChange);
