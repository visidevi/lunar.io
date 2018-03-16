// src/gcal.js
const CALENDAR_ID = 'ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com';
const API_KEY = 'AIzaSyCaN5RFsEmki4tyyaRoc2Pfwfe-5zqhfFw';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&location=America/Santiago`;

export function getEvents(callback) {
  fetch(url).then(data => {
    return data.json();
  }).then(data => {
    console.log(data)
    const events = [];
    
    data.items.map((data) => {
      events.push({
        start: data.start.date || data.start.dateTime,
        end: data.end.date || data.end.dateTime,
        title: data.summary,
        iconLink: data.gadget.iconLink
      })
    })
    console.log(events);
    callback(events);
  });
}