const ques=[
    {
        'Q':'which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'PHP',
        'correct':'a'
    },
    {
        'Q':'which channel you preffered for js?',
        'a':'love babbar',
        'b':'hitesh',
        'c':'shradha',
        'd':'pw',
        'correct':'a'
    },
    {
        'Q':'which website good for the documentation?',
        'a':'mdn',
        'b':'w3school',
        'c':'react',
        'd':'vite',
        'correct':'b'
    },
    {
        'Q':'which one your fvrt lanluage?',
        'a':'HTML',
        'b':'CSS',
        'c':'JS',
        'd':'PHP',
        'correct':'b'
    }
]

let index=0;
let total=ques.length;
let wrong=0,right=0;
const quesBox=document.getElementById("quesBox");
const options=document.querySelectorAll(".options");
const loadQues=()=>{
    if(index===total){
       return endQuize();
    }
    reset();
const data=ques[index]
quesBox.innerText=`${index+1}) ${data.Q}`;
options[0].nextElementSibling.innerText=data.a;
options[1].nextElementSibling.innerText=data.b;
options[2].nextElementSibling.innerText=data.c;
options[3].nextElementSibling.innerText=data.d;
}


const submitQuize=()=>{
    const data=ques[index]
    const ans=getAnswer()
if(ans===data.correct){
    right++;
}else{
    wrong++;
}
index++;
loadQues();
return;
}

const getAnswer = ()=>{
    let answer;
   options.forEach((input) => {
        if(input.checked){
        console.log(input.value);
        answer = input.value;
        
    }
}
)
return answer;
};

const reset=()=>{
    options.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuize=()=>{
    document.getElementById("card").innerHTML=`
    <div style="text-align:"center">
    <h3>Thanku for playing the quize</h3>
    <h2>${right}/${total}are correct</h2>
    </div>`
}

// document.getElementsByClassName("btn").addEventListener("click",submitQuize());
loadQues();



