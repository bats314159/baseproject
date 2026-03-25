// events.js

class EventManager {
    constructor() {
        this.events = [];
    }

    createEvent(event) {
        this.events.push(event);
        console.log('Event created:', event);
    }

    updateEvent(eventId, updatedEvent) {
        const index = this.events.findIndex(event => event.id === eventId);
        if (index !== -1) {
            this.events[index] = { ...this.events[index], ...updatedEvent };
            console.log('Event updated:', this.events[index]);
        } else {
            console.log('Event not found');
        }
    }

    deleteEvent(eventId) {
        this.events = this.events.filter(event => event.id !== eventId);
        console.log('Event deleted with id:', eventId);
    }

    listEvents() {
        return this.events;
    }
}

// Example usage
const eventManager = new EventManager();
eventManager.createEvent({ id: 1, name: 'Event One', date: '2026-04-01' });
eventManager.createEvent({ id: 2, name: 'Event Two', date: '2026-04-02' });

export default eventManager;