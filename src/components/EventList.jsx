import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, MapPin, Tag } from 'lucide-react';

const EventList = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Religious', 'Social', 'Charity'];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredEvents.map(event => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{format(new Date(event.date), 'PPP')}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{event.category}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EventList;