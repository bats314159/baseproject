// search-utils.js

/**
 * Search Utilities
 */

/**
 * Performs a linear search on an array.
 * @param {Array} arr - The array to search.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the target value, or -1 if not found.
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

/**
 * Performs a binary search on a sorted array.
 * @param {Array} arr - The sorted array to search.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the target value, or -1 if not found.
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

module.exports = {
    linearSearch,
    binarySearch,
};