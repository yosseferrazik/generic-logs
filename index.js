const date = new Date();
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
const actualhour = "[" + hour + ":" + minutes + "]";
const style = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underscore: "\x1b[4m",
  reverse: "\x1b[7m",
  strikethrough: "\x1b[9m",
  backoneline: "\x1b[1A",
  cleanthisline: "\x1b[K",
};
const bg = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
};
const color = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
};
const P = [
  "\\ㅤLOADING.  ㅤ〉ㅤ",
  "|ㅤLOADING.. ㅤ〉ㅤ",
  "/ㅤLOADING...ㅤ〉ㅤ",
  "-ㅤLOADING   ㅤ〉ㅤ",
];
let x = 0;
let loaderInterval;

exports.error = function (text) {
  return console.log(
    "\n" +
      actualhour +
      color.red +
      style.bold +
      "ㅤERRORㅤ〉ㅤ" +
      style.reset +
      color.red +
      `${text}`
      + style.reset
  );
};
exports.success = function (text) {
  return console.log(
    "\n" +
      actualhour +
      color.green +
      style.bold +
      "ㅤSUCCESSㅤ〉ㅤ" +
      style.reset +
      color.green +
      `${text}`
      + style.reset
  );
};
exports.info = function (text) {
  return console.log(
    "\n" +
      actualhour +
      color.blue +
      style.bold +
      "ㅤINFOㅤ〉ㅤ" +
      style.reset +
      color.blue +
      `${text}`
      + style.reset
  );
};
exports.warn = function (text) {
  return console.log(
    "\n" +
      actualhour +
      color.yellow +
      style.bold +
      "ㅤWARNINGㅤ〉ㅤ" +
      style.reset +
      color.yellow +
      `${text}`
      + style.reset
  );
};
exports.debug = function (text) {
  return console.log(
    "\n" +
      actualhour +
      color.cyan +
      style.bold +
      "ㅤDEBUGㅤ〉ㅤ" +
      style.reset +
      color.cyan +
      `${text}`
      + style.reset
  );
};
exports.startLoader = function (text) {
  loaderInterval = setInterval(() => {
    process.stdout.write(
      color.magenta +
        style.bold +
        `\r${P[x++]}` +
        style.reset +
        color.magenta +
        `${text}`
        + style.reset
    );
    x %= P.length;
  }, 250);
};
exports.stopLoader = function () {
  clearInterval(loaderInterval);
};
exports.separator = function (textcolor, type) {
  let finalcolor;
  switch (textcolor) {
    case "red":
      finalcolor = color.red;
      break;
    case "blue":
      finalcolor = color.blue;
      break;
    case "cyan":
      finalcolor = color.cyan;
      break;
    case "yellow":
      finalcolor = color.yellow;
      break;
    case "magenta":
      finalcolor = color.magenta;
      break;
    case "green":
      finalcolor = color.green;
      break;
    case "white":
      finalcolor = color.white;
      break;
    case "black":
      finalcolor = color.black;
      break;
    default:
      finalcolor = color.blue;
  }
  switch (type) {
    case "chess":
      console.log(
        finalcolor +
          `▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚▚` +
          style.reset
      );
      break;
    case "triangles":
      console.log(
        finalcolor +
          style.bold +
          "△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽△▽" +
          style.reset
      );
      break;
    case "line":
      console.log(
        finalcolor +
          "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫" +
          style.reset
      );
      break;
    case "script":
      console.log(
        finalcolor +
          style.bold +
          "------------------------------------------------------------------------------" +
          style.reset
      );
      break;
    case "chain":
      console.log(
        finalcolor +
          style.bold +
          "⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ ⫘ " +
          style.reset
      );
      break;
    default:
      console.log(
        finalcolor +
          "▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅" +
          style.reset
      );
  }
}


