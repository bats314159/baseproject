// object-utils.js - Object manipulation utilities

function keys(obj) {
  return Object.keys(obj);
}

function values(obj) {
  return Object.values(obj);
}

function entries(obj) {
  return Object.entries(obj);
}

function merge(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

module.exports = {
  keys,
  values,
  entries,
  merge,
  clone
};