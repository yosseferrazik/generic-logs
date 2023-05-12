const logger = require('node-color-log');
let date = new Date()
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
const actualhour = "["+hour+":"+minutes+"]";

exports.error = function(message) {
    return logger.color('red').bold().log(`${actualhour}ㅤERRORㅤ🡆ㅤ${message}`);

}
exports.debug = function(message) {
    return logger.color('cyan').bold().log(`${actualhour}ㅤDEBUGㅤ🡆ㅤ${message}`);

}
exports.info = function(message) {
    return logger.color('blue').bold().log(`${actualhour}ㅤINFOㅤ🡆ㅤ${message}`);

}
exports.succes = function(message) {
    return logger.color('green').bold().log(`${actualhour}ㅤSUCCESㅤ🡆ㅤ${message}`);
}
