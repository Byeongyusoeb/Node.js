const http = require('http')
const fs = require('fs');

const readable = fs.createReadStream('./message.html')

const writable = fs.createWriteStream('./newMessage.txt')

/*
readable.on('data', (data) => {
    console.log('readable stream is working')
    writable.write(data)
})
*/

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
    readable.pipe(res)
    // res.end(`Okay I'm listening your request, give me one.`)
})

server.listen(5500, 'localhost')