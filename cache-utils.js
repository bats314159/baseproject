// Caching Utilities

/**
 * Caches a value with a specified key.
 * @param {string} key - The key to cache the value under.
 * @param {*} value - The value to cache.
 */
function cacheValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Retrieves a cached value by its key.
 * @param {string} key - The key of the cached value.
 * @returns {*} The cached value or null if not found.
 */
function getCachedValue(key) {
    const cachedValue = localStorage.getItem(key);
    return cachedValue ? JSON.parse(cachedValue) : null;
}

/**
 * Clears a cached value by its key.
 * @param {string} key - The key of the cached value to clear.
 */
function clearCachedValue(key) {
    localStorage.removeItem(key);
}

export { cacheValue, getCachedValue, clearCachedValue };