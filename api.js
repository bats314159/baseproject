// api.js - API Helper Functions

/**
 * Fetch data from the specified endpoint.
 * @param {string} url - The API endpoint to fetch data from.
 * @param {object} options - Options for the fetch request.
 * @returns {Promise<object>} - The response data.
 */
async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

/**
 * Post data to the specified endpoint.
 * @param {string} url - The API endpoint to post data to.
 * @param {object} data - The data to post.
 * @returns {Promise<object>} - The response data.
 */
async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

module.exports = {
    fetchData,
    postData
};