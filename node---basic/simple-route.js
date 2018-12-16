const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/home' || req.url == '/'){
        fs.createReadStream('./public/index.html').pipe(res);

    } else if (req.url === '/documents' || req.url == '/'){
        fs.createReadStream('./public/documents.html').pipe(res);

    } else{
        fs.createReadStream('./public/contacts.html').pipe(res);

    }
})

server.listen(5500, 'localhost')
console.log('Server is running')