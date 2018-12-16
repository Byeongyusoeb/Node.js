const fs = require('fs')

/*

fs.unlinkSync('message-sync.txt')

fs.unlink('message-async.txt', (err) => {
    if (err) throw err;

    console.log('Deleted the file.')
})

 */

fs.mkdirSync(__dirname + '/test')
fs.rmdirSync(__dirname + '/test')

fs.mkdir(__dirname + '/test', (err) => {
    if (err) throw err;

    fs.writeFileSync('message.txt', `Hi I'm Been`)

    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) throw err;

        fs.writeFileSync(__dirname + '/test/newMessage.txt', data)
    })
})