//////*******   timeout->ek bar change time but timeinterval->according to time */


// const say=setInterval(function(){
//     console.log("jitanjali", Date.now());
// },1000)

//*also we can write as

// const say=function(){
//     console.log("jitanjali", Date.now());
// }

// setInterval(say,1000);         


// const saydate=function(str){
//     console.log(str, Date.now());
// }

// const started=setInterval(saydate,1000,"hii");         //it contains 3rd parameter


let saydate=function(){
    console.log("hey", Date.now());
}

let started;       

//we can stop it


document.querySelector('#start').addEventListener('click',function(){
    console.log("started......");
    started=setInterval(saydate,1000); 

});
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(started)
    console.log("stopped!!");
});

