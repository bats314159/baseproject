// cryptography utilities

function hashString(str) {
    // Implementation for hashing a string
}

function generateUUID() {
    // Implementation for generating a UUID
}

function encodeBase64(str) {
    return Buffer.from(str).toString('base64');
}

function decodeBase64(encodedStr) {
    return Buffer.from(encodedStr, 'base64').toString('utf-8');
}
