import React, { useState } from 'react';
import EventList from '../components/EventList';
import AddEventForm from '../components/AddEventForm';
import { motion } from 'framer-motion';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Interfaith Dialog Session',
      date: '2024-03-15',
      location: 'Community Center',
      description: 'Join us for an engaging discussion about different faiths and beliefs.',
      category: 'Religious'
    },
    {
      id: '2',
      title: 'Community Picnic',
      date: '2024-03-20',
      location: 'Central Park',
      description: 'A fun day out with games, food, and activities for everyone.',
      category: 'Social'
    },
    {
      id: '3',
      title: 'Food Drive',
      date: '2024-03-25',
      location: 'Local Food Bank',
      description: 'Help us collect food for those in need in our community.',
      category: 'Charity'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddEvent = (newEvent) => {
    const event = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents([...events, event]);
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Events</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            {showAddForm ? 'Close Form' : 'Add Event'}
          </motion.button>
        </div>

        {showAddForm && <AddEventForm onAddEvent={handleAddEvent} />}
        
        <div className="mt-8">
          <EventList events={events} />
        </div>
      </div>
    </div>
  );
};

export default Events;