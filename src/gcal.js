// src/gcal.js
const CALENDAR_ID = 'ht3jlfaac5lfd6263ulfh4tql8@group.calendar.google.com';
const API_KEY = 'AIzaSyCaN5RFsEmki4tyyaRoc2Pfwfe-5zqhfFw';
const location = 'santiago';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&location=${location}`;

export function getEvents(callback) {
  fetch(url).then(data => {
    return data.json();
  }).then(data => {
    console.log(data);
    const events = [];
    data.items.map((data) => {
      events.push({
        start: new Date(data.start.date) || new Date(data.start.dateTime),
        end: new Date(data.end.date) || new Date(data.end.dateTime),
        title: data.summary,
        icon: data.gadget.iconLink
      })
    })
    callback(events);
  });
}