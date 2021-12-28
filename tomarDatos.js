const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const url = req.url;
    const method = req.method;
    let body = conseguirBody(req).then(
        ()=>{
        console.log(body)
        }
    ); 
    //res.write(body);
    res.end();
});


const conseguirBody = async (req) => {
    const bodyRaw = [];//array
    let body;
    let xx = await req.on('data', (chunk) => {
    bodyRaw.push(chunk);//se puede hacer push asi sea cnt
    return Buffer.concat(bodyRaw).toString();
    });//req.on nos permite escuchar eventos, hay evento data, problem etc..
    final = req.on('end', () => {
        return xx;
    });
   
}


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
