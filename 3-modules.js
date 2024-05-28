// Modules - Encapsulated Code (only share minimum)
// COmmonJS , every file is module (by default)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenade.js')

console.log(data)
sayHi('ramesh')
sayHi('susan');
sayHi(names.peter);
sayHi(names.john);