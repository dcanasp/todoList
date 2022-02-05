import {validarLogin} from "./app.js";


const adBtn = document.querySelector(".addBtn");
const task = document.querySelector(".task");
const ul = document.querySelector(".taskUl");
const empty = document.querySelector(".empty");


adBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const taskText = task.value;

    if(taskText !== "" ){
        const li = document.createElement("li");
        const p = document.createElement("p");

        li.classList = "taskItem";
        p.classList = "taskItem_p";
        p.textContent = taskText;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        empty.style.display = "none";
        task.value ="";
    }
})
    
    function addDeleteBtn(){    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"
    deleteBtn.classList = "deleteBtn"

    deleteBtn.addEventListener( "click", (e) =>{
        const item = e.target.parentElement;
        
        ul.removeChild(item);
        
        const items = document.querySelectorAll("li");
        
        if(items.length == 0){
            empty.style.display = "flex";
        }
    })
    
    return deleteBtn;
}

    function test(){
    document.getElementById("cambiarNombre").innerHTML = "bienvenido "+localStorage.getItem("usuario");
    console.log(localStorage.getItem("usuario"))
    }
    test();