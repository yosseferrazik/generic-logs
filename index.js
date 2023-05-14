// "ㅤ"
const dayjs = require('dayjs');

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

const formatTime = (date) => {
  return dayjs(date).format('HH:mm');
};

const applyStyles = (text, styles) => {
  const combinedStyles = styles.join('');
  return `${combinedStyles}${text}\x1b[0m`;
};

const log = ({ text, styles }) => {
  const formattedTime = formatTime(new Date());
  const formattedText = applyStyles(text, styles);
  console.log(`[${formattedTime}] ${formattedText}${style.reset}`);
};

const info = (message) => {
  log({ text: `INFO 〉 ${message}`, styles: [color.blue, style.bold] });
};

const success = (message) => {
  log({ text: `SUCCESS 〉 ${message}`, styles: [color.green, style.bold] });
};

const warning = (message) => {
  log({ text: `WARNING 〉 ${message}`, styles: [color.yellow, style.bold] });
};

const error = (message) => {
  log({ text: `ERROR 〉 ${message}`, styles: [color.red, style.bold] });
};

const separator = (char = '-', length = 10) => {
  const separatorText = char.repeat(length);
  log({ text: separatorText, styles: [] });
};

module.exports = { log, info, success, warning, error, separator };
