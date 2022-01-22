

import { collection, addDoc } from "firebase/firestore"; 
    import {app,db} from "./firebase.js"
    //import {guardar} from "./crear.js"
     //si exporte default se le quitan los corchetes al importar



document.getElementById("btnLogin").onclick = function() {  
    guardar(); 
};  

async function guardar(){
   // const db = firebase.firestore();
    
    userName = document.getElementById("inputPassword5").value;
    clave = document.getElementById("inputPassword6").value;

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

