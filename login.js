import {validarLogin} from "./app.js";

document.getElementById("btnLogin").onclick = async function() {  
    //guardar();
    //sacar();
    let userName = document.getElementById("inputPassword5").value;    
    let clave = document.getElementById("inputPassword6").value;
    datos = await validarLogin(userName);
    console.log(datos);
    validarLoginHtml(datos,clave);
  };  

  function validarLoginHtml(querySnapshot,clave){

    let bandera = false
    querySnapshot.forEach((doc) => {    
    
      if(clave == doc.data()["clave"]){
        
        let usuarioGlobal = doc.data()["usuario"];
        localStorage.setItem("usuario", usuarioGlobal);


        bandera = true;
        crearNuevaPagina();
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
  function limpiarValores() {
    document.getElementById("inputPassword5").value = "";
    document.getElementById("inputPassword6").value = "";

  }

  function crearNuevaPagina(id){  
    window.close();
    window.open("main.html");  
    console.log("bingo");
    limpiarValores();      
  }