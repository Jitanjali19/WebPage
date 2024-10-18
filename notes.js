const addBtn=document.getElementById("addBtn")
const main=document.getElementById("main")

//savenotes 
const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
//    console.log(data) 
}

//notes add krna after clicking 
addBtn.addEventListener(
    "click",
    function(){
        addNotes()
    }
)



//*this is note class 
/* <div class="note">
<div class="tool">
   <img src="save.png" alt="save" height="20px" width="20px">
   <img src="trash.png" alt="trash" height="20px" width="20px">
</div>
<textarea ></textarea>
</div> */

const addNotes=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note")
    note.innerHTML=`
            <div class="tool">
               <img class="save" src="save.png" alt="save" height="20px" width="20px">
               <img class="trash" src="trash.png" alt="trash" height="20px" width="20px">
            </div>
            <textarea >${text}</textarea>
            `;
    note.querySelector(".trash").addEventListener(
        "click",
         function(){
            note.remove();
            saveNotes()
         }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
             saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes()
}


//page load hote hi data show hona by self colling function
(
    function(){
        const lsnotes=JSON.parse(localStorage.getItem("notes"));
        if(isNotes===null){
            addNotes()
        }else{
        console.forEach(
            (lsnote)=>{
                addNotes(lsnote)
            }
        )
    }
}
)()
