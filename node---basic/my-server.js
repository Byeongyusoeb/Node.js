const http = require('http')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'})
    response.end(`Okay I'm listening your request, give me one.`)
    console.log('Server is listening...')
})

server.listen(5500, 'localhost')

console.log('Server is running')