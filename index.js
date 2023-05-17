// "ㅤ"
var date1 = new Date;
const actual = `${date1.getHours()}:${date1.getMinutes()}`
const info = (message = '') => {
    return console.log(`[${actual}] \x1b[34m INFO 〉${message}\x1b[0m`);
};
const success = (message = '') => {
    return console.log(`[${actual}] \x1b[32m SUCCESS 〉${message}\x1b[0m`);
};
const warning = (message = '') => {
    return console.log(`[${actual}] \x1b[33m WARNING 〉${message}\x1b[0m`);
};
const error = (message = '') => {
    return console.log(`[${actual}] \x1b[31m ERROR 〉${message}\x1b[0m`);
};
const custom = ({ title = '', message = '', color = '' }) => {
    let setcolor;
    switch (color) {
        case 'black':
            setcolor = "\x1b[30m";
            break;
        case 'red':
            setcolor = "\x1b[31m";
            break;
        case 'green':
            setcolor = "\x1b[32m";
            break;
        case 'yellow':
            setcolor = "\x1b[33m";
            break;
        case 'blue':
            setcolor = "\x1b[34m";
            break;
        case 'magenta':
            setcolor = "\x1b[35m";
            break;
        case 'cyan':
            setcolor = "\x1b[36m";
            break;
        case 'white':
            setcolor = "\x1b[37m";
            break;
    }

    return console.log(`[${actual}] ${setcolor} ${title} 〉${message} \x1b[0m`)

};
const separator = (char = '-', length = 10) => {
    const separatorText = char.repeat(length);
    return console.log(separatorText);
};


const reset = (message) => `\x1b[0m${message}\x1b[0m`;
const bold = (message) => `\x1b[1m${message}\x1b[0m`;
const dim = (message) => `\x1b[2m${message}\x1b[0m`;
const italic = (message) => `\x1b[3m${message}\x1b[0m`;
const underscore = (message) => `\x1b[4m${message}\x1b[0m`;
const reverse = (message) => `\x1b[7m${message}\x1b[0m`;
const strikethrough = (message) => `\x1b[9m${message}\x1b[0m`;
const backoneline = (message) => `\x1b[1A${message}\x1b[0m`;
const cleanthisline = (message) => `\x1b[K${message}\x1b[0m`;
const black = (message) => `\x1b[30m${message}\x1b[0m`;
const red = (message) => `\x1b[31m${message}\x1b[0m`;
const green = (message) => `\x1b[32m${message}\x1b[0m`;
const yellow = (message) => `\x1b[33m${message}\x1b[0m`;
const blue = (message) => `\x1b[34m${message}\x1b[0m`;
const magenta = (message) => `\x1b[35m${message}\x1b[0m`;
const cyan = (message) => `\x1b[36m${message}\x1b[0m`;
const white = (message) => `\x1b[37m${message}\x1b[0m`;
const bgblack = (message) => `\x1b[40m${message}\x1b[0m`;
const bgred = (message) => `\x1b[41m${message}\x1b[0m`;
const bggreen = (message) => `\x1b[42m${message}\x1b[0m`;
const bgyellow = (message) => `\x1b[43m${message}\x1b[0m`;
const bgblue = (message) => `\x1b[44m${message}\x1b[0m`;
const bgmagenta = (message) => `\x1b[45m${message}\x1b[0m`;
const bgcyan = (message) => `\x1b[46m${message}\x1b[0m`;
const bgwhite = (message) => `\x1b[47m${message}\x1b[0m`;



module.exports = { custom, info, success, warning, error, separator, red, blue, magenta, white, black, green, yellow, cyan, bgred, bgblue, bgmagenta, bgwhite, bgblack, bggreen, bgyellow, bgcyan, reset, bold, dim, italic, reverse, underscore, strikethrough, backoneline, cleanthisline };



