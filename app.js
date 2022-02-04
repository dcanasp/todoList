

import { collection, addDoc } from "firebase/firestore";//anadir a la base de datos 
import {app,db} from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";//sacar de la base de datos
import { doc, setDoc, Timestamp } from "firebase/firestore";//tiempo
import { collection, query, where, getDocs } from "firebase/firestore";


    //import {guardar} from "./crear.js"
     //si exporte default se le quitan los corchetes al importar



document.getElementById("btnLogin").onclick = function() {  
    //guardar();
    //sacar();
    usuarioActual = new coneccion;
};  
class coneccion{
  constructor(){
    //this.validarLogin();
    this.guardar();
  }

  
  async guardar(){
    // const db = firebase.firestore();
    
    let userName = document.getElementById("inputPassword5").value;
    let password = document.getElementById("inputPassword6").value;
    //limpiarValores();
    let userNames = ["alexei","felipe","juan","anna","jorge","camilo","miguel"]
    for(let i=0; i<6;i++){

      try {
        const docRef = await addDoc(collection(db, "todoList"), {
          usuario: userNames[i],
          clave: "clave",
          id: i+2,
          programacion: {
            createdAt: Timestamp.now(),
            tarea: "proyectoFinal",
            fechaEntrega: Timestamp.fromDate(new Date("2022,2,12"))
          },
          fisica: {
            createdAt: Timestamp.now(),
            tarea: "parcial 3",
            fechaEntrega: Timestamp.fromDate(new Date("2022,2,10"))
          },
          
          integral: {
            createdAt: Timestamp.now(),
            tarea: "taller 4",
            fechaEntrega: Timestamp.fromDate(new Date("2022,2,11"))
          },

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }    
    }
      
}

async sacar(){
  
  userName = document.getElementById("inputPassword5").value;
  clave = document.getElementById("inputPassword6").value;
  
  const docRef = doc(db, "todoList", "16");
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
    if(clave == doc.data()["contrasena"]){
      
    
      crearNuevaPagina()      
      
    }
    else{
      console.log("no valido contrasena");
      alert("contraseña no valida, intente nuevamente");
    }
    //console.log(doc.id, " => ", doc.data());//
  });
  if (bandera==false){
    console.log("no valido");
    limpiarValores();
    alert("datos no validos, intente nuevamente");
  }
}

crearNuevaPagina(id){

  window.close();
  window.open("main.html");
  document.getElementById
  console.log("bingo");
  bandera = true;
  limpiarValores();
      

}

  

}