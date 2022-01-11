const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    //res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method = req.method;
    let bodyFinal    
    const body = [];//array
    req.on('data', (chunk) => {

        //console.log(chunk);//da como resultsdo algo ilegible
        body.push(chunk);//se puede hacer push asi sea cnt

    })
    req.on('end', () => {
       bodyFinal = Buffer.concat(body).toString();//pasa chunk a algo legible
       console.log(bodyFinal);
      });
    req.on("end", () => {
        res.write("ojala")
           
        console.log(html);
        res.write(html);
        res.end();  
    })

    
function crearHtml(req) {
    var header = '';
    var body = '';
  
    // concatenate header string
    // concatenate body string
  
    return '<html><head>' + header + '</head><body>' + body + '</body></html>';
  };
    /*
    req.on('data', (chunk) => {
      });//req.on nos permite escuchar eventos, hay evento data, problem etc..
        */     
 
    





    /*
        let body =conseguirBody(req).then(
            ()=>{
            console.log("??");
            console.log(body);
            }
        );
        */
    //let body = ayuda(req);
    //console.log(body);
    //res.write(body);
    //res.write("prueba");
    //res.end();
});

const conseguirBody = (req) => {
    /* nada funciona estoy triste
    return (function(resolve, reject){
    const bodyRaw = [];//array
    let body;
    //req.on nos permite escuchar eventos, hay evento data, problem etc..
    req.on('data', (chunk) => {
        bodyRaw.push(chunk);
        console.log(1);
    })
    }).then(() =>{
        req.on('data', (chunk) => {
        body =Buffer.concat(bodyRaw).toString();
        console.log(2);    
        });
    }).then(() => {
        if(body==undefined){
            reject(Error("mevoyamatar"));

        }
        console.log(3);
        resolve(body);
    })
    

*/
}
const ayuda = (req) =>{
    let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    reject('falla').catch(err => {
  console.error(err)
})
  }
})
return isItDoneYet;
}


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
