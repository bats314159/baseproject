// encryption.js - Basic encryption utilities

function encodeBase64(str) {
  return Buffer.from(str).toString('base64');
}

function decodeBase64(str) {
  return Buffer.from(str, 'base64').toString('utf8');
}

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}

module.exports = {
  encodeBase64,
  decodeBase64,
  simpleHash
};