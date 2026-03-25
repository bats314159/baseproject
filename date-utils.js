// date-utils.js - Date and time utilities

function getCurrentDate() {
  return new Date();
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function formatTime(date) {
  return date.toLocaleTimeString();
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getTimeUntil(targetDate) {
  const now = new Date();
  return targetDate - now;
}

module.exports = {
  getCurrentDate,
  formatDate,
  formatTime,
  addDays,
  getTimeUntil
};