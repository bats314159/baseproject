'use strict';

const storage = {
    setItem: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error saving to local storage', error);
        }
    },

    getItem: function(key) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error('Error retrieving from local storage', error);
            return null;
        }
    },

    removeItem: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing from local storage', error);
        }
    },

    clear: function() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error('Error clearing local storage', error);
        }
    }
};

export default storage;