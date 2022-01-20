var util = require('util');

const isDebug = process.env.NODE_ENV !== 'production'
const isTest = process.env.NODE_ENV === 'test'

function write(tag, args) {
    var message = util.format.apply(util, args);
    console.log(tag, message)
}

let info = function() {
    write('[INFO]',arguments);
}
if (isTest) {
    info = () => { }
}

let debug = function() {
    write('[DEBUG]',arguments);
}
if (!isDebug) {
    debug = () => { }
}

const warn = function() {
    write('[WARN]',arguments);
}
const error = function() {
    write('[ERROR]',arguments);
}
const test = function() {
    write('[TEST]',arguments);
}


module.exports = {

    test,
    info,
    debug,
    warn,
    error,
}
