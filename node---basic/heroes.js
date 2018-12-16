const events = require('events');
const util = require('util');

const Hero = function(name){
    // Class

    this.name = name;
};

util.inherits(Hero, events.EventEmitter);

const superman = new Hero('superman'); // { name: 'superman' } 
const batman = new Hero('batman'); // { name: 'batman' }
const birdman = new Hero('birdman'); // { name: 'birdman' } 

const heroes = [superman, batman, birdman]

console.log(` ${superman.name} ${batman.name} ${birdman.name} `)

heroes.forEach((hero) => {
    hero.on('call', (message1, message2) => {
        console.log(`${hero.name} fights with Joker ${message1} ${message2}`)
    });

    hero.on('keyup', (message) => {
        console.log(`${hero.name} key up ${message}`)
    });
});

superman.emit('call', 'hard', 'easy') // Artificial event call
birdman.emit('keyup', 'surprisingly')
batman.emit('keyup', 'horrible')