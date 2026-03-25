// format-utils.js - Formatting utilities

function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

function formatNumber(num, decimals = 2) {
  return num.toFixed(decimals);
}

function formatPercentage(num) {
  return (num * 100).toFixed(2) + '%';
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

module.exports = {
  formatCurrency,
  formatNumber,
  formatPercentage,
  formatFileSize
};