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
 
        res.end();  
    })

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
