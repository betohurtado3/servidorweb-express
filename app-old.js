const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let persona = {
            nombre: 'Heriberto',
            edad: 22,
            url: req.url
        }
        res.write(JSON.stringify(persona));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Puerto 8080');