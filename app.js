import { collection, addDoc } from "firebase/firestore";//anadir a la base de datos 
import {app,db} from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";//sacar de la base de datos
import { doc, setDoc, Timestamp } from "firebase/firestore";//tiempo
import { collection, query, where, getDocs } from "firebase/firestore";


  //si exporte default se le quitan los corchetes al importar


console.log("prueba")
document.getElementById("btnLogin").onclick = function() {  
    //guardar();
    //sacar();
    usuarioActual = new coneccion;
  };  
class coneccion{
  static usuarioGlobal = null;
  constructor(){
    this.validarLogin();
    //this.guardar();
  }

  
  async guardar(){
    // const db = firebase.firestore();
    
    let userName = document.getElementById("inputPassword5").value;
    let password = document.getElementById("inputPassword6").value;
    let materia = "prueba";//se saca del html
    let tareaTexto = "no esta implementado";//hacer
    limpiarValores();
    
    
      try {
        const docRef = await addDoc(collection(db, "todoList"), {
          usuario: userName,
          clave: password,
          id: 9,
          [materia]: {
            createdAt: Timestamp.now(),
            tarea: tareaTexto,
            fechaEntrega: Timestamp.fromDate(new Date("2022,2,12"))
          }
          
            
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }    

      
  }

async sacar(){
  
  userName = document.getElementById("inputPassword5").value;
  clave = document.getElementById("inputPassword6").value;
  
  const docRef = doc(db, "todoList", "16");//saque un dato especifico de una coleccion, no sirve
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

async validarLogin(){
  let userName = document.getElementById("inputPassword5").value;
  let clave = document.getElementById("inputPassword6").value;
  
  const q = query(collection(db, "todoList"), where("usuario", "==", userName));
  const querySnapshot = await getDocs(q);
  let bandera=false;
  querySnapshot.forEach((doc) => {    
    if(clave == doc.data()["clave"]){
      this.usuarioGlobal = doc.data()["usuario"];
      bandera = true;
      this.crearNuevaPagina();

    }
    else{
      console.log("no valido contrasena");
      alert("contraseña no valida, intente nuevamente");
      bandera = true;
      document.getElementById("inputPassword6").value = "";
    }
    //console.log(doc.id, " => ", doc.data());//
  });
  if (bandera==false){
    console.log("no valido");
    limpiarValores();
    alert("datos no validos, intente nuevamente");
  }
}



crearNuevaPagina(){  
  window.close();
  window.open("main.html");
  console.log("bingo");
  limpiarValores();      
}

getNombre(){
  console.log(usuarioGlobal);
  return usuarioGlobal;
  //const docRef = doc(db, "todoList", "16");//saque un dato especifico de una coleccion, no sirve
  //const docSnap = await getDoc(docRef);
}  

}




const adBtn = document.querySelector(".addBtn");
console.log("creando botones");
const task = document.querySelector(".task");
const ul = document.querySelector(".taskUl");
const empty = document.querySelector(".empty");



class todo extends coneccion {
    constructor(){
        console.log("hola?");
    }
    anadir(informacion){
        this.test();
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

    test(){
    console.log(45);
    console.log(super.getNombre());
    document.getElementById("cambiarNombre").innerHTML == "prueba sonido";
    //<li><a href=""><%= usuarioGlobal %></a></li>

    }

}

