// clock-script.js

function displayCurrentTimeInTimeZones() {
    const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];
    const currentTime = new Date();

    timeZones.forEach(timeZone => {
        const options = { timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const timeString = currentTime.toLocaleString('en-US', options);
        console.log(`Current time in ${timeZone}: ${timeString}`);
    });
}

displayCurrentTimeInTimeZones();
