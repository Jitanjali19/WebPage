
const endDate="20 october 2024 01:37 AM"
const inputs=document.querySelectorAll("input")


document.getElementById("end-date").innerHTML=endDate;

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    // console.log(end,now);
    //end-now->mili second me
    //divided by 1000 it converts second and divided by 60 min
    const diff=(end-now)/1000;
    // console.log(diff);
    //converted into days

    //**since  there is a problm time will go to negative that's not possible so it can hndle
    if(diff<0) return;

    inputs[0].value=Math.floor(diff/3600/24);
    //converted into hours
    inputs[1].value=Math.floor(diff/3600)%24;
    //converted into minutes
    inputs[2].value=Math.floor(diff/60)%60;
    //converted into seconds
    inputs[3].value=Math.floor(diff)%60;

}
clock();


setInterval(function(){
    clock()
},1000)

