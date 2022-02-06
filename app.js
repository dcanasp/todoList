//unicamente la base de datos

import { collection, addDoc } from "firebase/firestore";//anadir a la base de datos 
import {app,db} from "./firebase.js";
import { doc, getDoc } from "firebase/firestore";//sacar de la base de datos
import { doc, setDoc, Timestamp } from "firebase/firestore";//tiempo
import { collection, query, where, getDocs } from "firebase/firestore";


  //si exporte default se le quitan los corchetes al importar

/*
export class coneccion{  
  constructor(){
    //this.validarLogin();
    //this.guardar();
  }
*/
  
  async function guardar(materias){
    for(let i = 0;i<materias.length;i++){
      let materia = materias.data()[nombre];//se saca del html
      let tareaTexto = materias.data()[nombre];//hacer            
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
      
    }

async function sacar(userName){
  //querySnapshot = validarLogin(userName);


  const docRef = doc(db, "todoList", "16");//saque un dato especifico de una coleccion, no sirve
  const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

export async function validarLogin(userName){  
  const q = query(collection(db, "todoList"), where("usuario", "==", userName));
  const querySnapshot = await getDocs(q);  
  return querySnapshot  
}




