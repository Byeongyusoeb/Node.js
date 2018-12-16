const file = require('fs');

const fsSyncRead = file.readFileSync(__dirname + '/README.md', 'utf8'); // Synchrous

const fsAsyncRead = file.readFile(__dirname + '/README.md', 'utf8', (err, data) => {
    // Asynchrous
    if (err) throw err;

    file.writeFileSync(`message-async.txt`, data);
});

file.writeFile('message-sync.txt', 'Hello Node.js', (err) =>{
    if (err) throw err;

    console.log(`The file has been saved`)
})