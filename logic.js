let input=document.querySelector("input");
let button=document.querySelector("button");
const tasks=document.getElementById("tasks");
button.addEventListener("click",()=>{
    if(input.value===''){
        alert("please enter");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=input.value;
        tasks.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        savedata();
    }
    input.value='';
});
tasks.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("end");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
        
    
})
function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}
function calldata(){
    tasks.innerHTML=localStorage.getItem("data");
}
calldata();