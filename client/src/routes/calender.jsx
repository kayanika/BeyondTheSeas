import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Sidebar2 from '../components/Sidebar2';
import UserProfileHeader from '../components/CalenderHeader';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [userHasEvents, setUserHasEvents] = useState(false); // User events flag

  // Load events from localStorage on component mount
  useEffect(() => {
    const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents && JSON.parse(storedEvents).length > 0) {
      // There are events, so set userHasEvents to true
      setUserHasEvents(true);
      setEvents(JSON.parse(storedEvents));
    } else {
      // No events found, set userHasEvents to false
      setUserHasEvents(false);
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

  const handleDeleteEvent = (eventToDelete) => {
    // Filter out the event to delete from the events array
    const updatedEvents = events.filter((event) => event !== eventToDelete);

    // Update the events state with the updated array
    setEvents(updatedEvents);

    // Save the updated events array to localStorage
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
  };

  // Custom event component for agenda view
  const CustomEvent = ({ event }) => (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{event.title}</span>
        <div style={{ textAlign: 'right' }}>
          <button onClick={() => handleDeleteEvent(event)} style={{ background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Delete</button>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '250px', background: '#333', color: '#E5FFCC', padding: '20px' }}>
        {/* Sidebar */}
        <div className="sidebar-and-content">
          <Sidebar2 />
        </div>
      </div>

      <div style={{ flex: 2, padding: '20px', background: 'linear-gradient(to bottom, #88c87e, #E5FFCC)' }}>
        {/* Add UserProfileHeader with userHasEvents prop */}
        <UserProfileHeader userHasEvents={userHasEvents} />
        {/* Calendar */}
        <h2 style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)', color: '#fff' }}> Calendar with Events</h2>
        <div style={{ height: '500px', backgroundColor: 'white', borderRadius: '5px' }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ backgroundColor: 'white', borderRadius: '5px' }}
            onSelectEvent={handleSelectEvent}
            components={{
              agenda: {
                event: CustomEvent,
              },
            }}
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
