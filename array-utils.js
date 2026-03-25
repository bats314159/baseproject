// array-utils.js - Array manipulation utilities

function first(arr) {
  return arr[0];
}

function last(arr) {
  return arr[arr.length - 1];
}

function flatten(arr) {
  return arr.reduce((acc, val) => acc.concat(val), []);
}

function unique(arr) {
  return [...new Set(arr)];
}

function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

module.exports = {
  first,
  last,
  flatten,
  unique,
  chunk
};