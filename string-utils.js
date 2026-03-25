// string-utils.js - String manipulation utilities

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowercase(str) {
  return str.toLowerCase();
}

function uppercase(str) {
  return str.toUpperCase();
}

function reverse(str) {
  return str.split('').reverse().join('');
}

function trim(str) {
  return str.trim();
}

module.exports = {
  capitalize,
  lowercase,
  uppercase,
  reverse,
  trim
};