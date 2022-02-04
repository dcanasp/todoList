const adBtn = document.querySelector(".addBtn");
const task = document.querySelector(".task");
const ul = document.querySelector(".taskUl");
const empty = document.querySelector(".empty");


class todo extends coneccion {
    constructor(){
        
    }
    anadir(informacion){
        adBtn.addEventListener("click", (e)=>{
            e.preventDefault();
        
            //const taskText = task.value;
            const taskText = informacion.value;
        
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
    }
    
    addDeleteBtn(){
        
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

}
let prueba = new todo();