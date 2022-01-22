function guardar() {
    console.log(2);
    const db = firebase.firestore();
    userName = document.getElementById("inputPassword5").value;
    clave = document.getElementById("inputPassword6").value;
    let thingsRef;
    let unsubscribe;
    auth.onAuthStateChanged((user)=>{
        if (user) {
            // Database Reference
            thingsRef = db.collection('prueba');
            createThing.onclick = ()=>{
                const { serverTimestamp  } = firebase.firestore.FieldValue;
                thingsRef.add({
                    uid: user.uid,
                    id: 3,
                    nombre: userName,
                    contrasena: clave,
                    createdAt: serverTimestamp()
                });
            };
        }
    });
}

//# sourceMappingURL=login.7c0ccee6.js.map
