import {validarLogin} from "./app.js";
import {guardar} from "./app.js";

const adBtn = document.querySelector(".addBtn");
const task = document.querySelector(".task");
const ul = document.querySelector(".taskUl");
const empty = document.querySelector(".empty");

async function iniciar(){
    let datosUsuario = await validarLogin(localStorage.getItem("usuario"));    
    let materias = []
    datosUsuario.forEach((doc) => {    
        
        for(key in doc.data()){
            if (typeof doc.data()[key] == "object"){
                materias.push(key);
            }
            //console.log(key);
            //console.log(typeof doc.data()[key]);
        }


        //let usuarioGlobal = doc.data()["usuario"];
        //console.log(doc.data());    
        //console.log(doc.id, " => ", doc.data());//
      });
      anadir(materias,0);
}

iniciar();


adBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    anadir();
})

function anadir(materias,i){
        let taskText = task.value;
        if (materias != null){
            taskText = materias[i];
        }
                
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
        console.log(materias.length+1);
        console.log(i);
        if (materias.length-1 !=i){
            anadir(materias,i+1);
        }
    
}
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

    function sacarDatos(){        
        guardar();

    }