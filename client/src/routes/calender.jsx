import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Sidebar2 from '../components/Sidebar2';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const handleSelectEvent = (event) => {
    // Handle event selection here if needed
  };

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setShowAddEventForm(false);
    setNewEvent({ title: '', start: '', end: '' });
  };

  return (
    <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', background: '#333', color: '#E5FFCC', padding: '20px' }}>
        {/* Sidebar */}
        <div className="sidebar-and-content">
        <Sidebar2 />
        </div>
        </div>

        <div style={{ flex: 2, padding: '20px' }}>
        {/* Calendar */}
        <h2> Calendar with Events</h2>
        <div style={{ height: '500px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ backgroundColor: 'white', borderRadius: '5px' }}
            onSelectEvent={handleSelectEvent}
          />
        </div>
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <button onClick={() => setShowAddEventForm(true)}>Add Event</button>
        </div>
        {showAddEventForm && (
          <div>
            <h3>Add New Event</h3>
            <form>
              <label>Title:</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              />
              <label>Start Date:</label>
              <input
                type="datetime-local"
                value={newEvent.start}
                onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              />
              <label>End Date:</label>
              <input
                type="datetime-local"
                value={newEvent.end}
                onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              />
              <button type="button" onClick={handleAddEvent}>
                Add
              </button>
            </form>
          </div>
        )}
        </div>
    </div>
  );
};

export default MyCalendar;
