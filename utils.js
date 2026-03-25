// Utility Functions for Time Formatting and Calculations

/**
 * Format current date and time in YYYY-MM-DD HH:MM:SS format.
 * @returns {string} Formatted date and time.
 */
function formatCurrentDateTime() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * Calculate the difference in hours between two dates.
 * @param {Date} startDate - Start date.
 * @param {Date} endDate - End date.
 * @returns {number} Difference in hours.
 */
function calculateDifferenceInHours(startDate, endDate) {
    const diffInMilliseconds = endDate - startDate;
    return diffInMilliseconds / (1000 * 60 * 60);
}

module.exports = {
    formatCurrentDateTime,
    calculateDifferenceInHours
};