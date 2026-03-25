// validator.js

/**
 * Validates input data.
 * @param {Object} data - The data to validate.
 * @returns {boolean} - Returns true if valid, false otherwise.
 */
function validateInput(data) {
    // Add validation logic here
    // Example: Check if required fields are present
    if (!data.name || !data.email) {
        return false; // Validation failed
    }

    // Example: Check if email format is valid
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(data.email)) {
        return false; // Validation failed
    }

    // Validation passed
    return true;
}

module.exports = validateInput;