// Global

console.log(`Hi I'm Been`)

setTimeout(() => {
    console.log(`I'm Timeout callback`)   
}, 2000)

let time = 0;

const timer = setInterval(() => {
    time += 1;
    console.log(`${time} interval`)

    if (time >= 1){
        clearInterval(timer);
    }
}, 1000)

console.log(__dirname)
console.log(__filename)


// ** Module & Export ** //

const heroes = require(__dirname + '/heroes')

heroes.anotherFunction()

console.log(heroes.heroList)

console.log(heroes.adder(1, 4))

console.log(heroes.fn1())