

import { collection, addDoc } from "firebase/firestore";//anadir a la base de datos 
import {app,db} from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";//sacar de la base de datos
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
    this.validarLogin();
  }

  
  async guardar(){
    // const db = firebase.firestore();
    
    userName = document.getElementById("inputPassword5").value;
    clave = document.getElementById("inputPassword6").value;
    limpiarValores();
    try {
      const docRef = await addDoc(collection(db, "prueba"), {
        id: 03,
        nombre: userName,
        contrasena: clave,
        createdAt: Date.now()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }    
     
}

async sacar(){
  
  userName = document.getElementById("inputPassword5").value;
  clave = document.getElementById("inputPassword6").value;
  
  const docRef = doc(db, "prueba", "16");
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
  
  const q = query(collection(db, "prueba"), where("nombre", "==", userName));
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