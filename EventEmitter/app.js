 var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'The event was emitted');
// myEmitter.emit('someEvent', 'The event was salah');


//ex 2

var util = require('util');

var person = function(name){
    this.name = name;
}

util.inherits(person, events.EventEmitter);

var salah = new person('Salah');
var ahmed = new person('Ahmed');
var ali = new person('Ali');

var people = [salah, ahmed, ali];

people.forEach(function(person){
    person.on('speak',function(say) {
        console.log(person.name + ' said: ' + say);
    });
});

salah.emit('speak', 'hey dudes !');
ali.emit('speak', 'No one can do this :(')