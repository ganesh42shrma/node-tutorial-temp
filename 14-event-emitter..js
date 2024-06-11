const EventEmitter = require('events');//This imports the EventEmitter class from Node.js's built-in 'events' module.

const customEmitter = new EventEmitter();//An instance of EventEmitter is created to handle custom events.

//Register an event listener
customEmitter.on('response',(name,id)=>{ //This sets up a listener for the 'response' event. When this event is triggered, the provided callback function will log "data received" to the console.
    console.log(`data recieved user ${name} with id : ${id}`);
});

customEmitter.on('response',()=>{ //This sets up a listener for the 'response' event. When this event is triggered, the provided callback function will log "data received" to the console.
    console.log(`Some other logic here`);
});

//Emit the event
customEmitter.emit('response','john','26');
//This triggers the 'response' event, causing the registered listener to execute and log "data received".
