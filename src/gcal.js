// src/gcal.js
const CALENDAR_ID = 'ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com';
const API_KEY = 'AIzaSyCaN5RFsEmki4tyyaRoc2Pfwfe-5zqhfFw';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  fetch(url).then(data => {
    return data.json();
  }).then(data => {
    const events = [];
    console.log(data);
    data.items.map((data) => {
      events.push({
        start: data.start.date || data.start.dateTime,
        end: data.end.date || data.end.dateTime,
        title: data.summary
      })
    })
    callback(events);
  });
}