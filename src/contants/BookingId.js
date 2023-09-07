import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingId, setBookingId] = useState(null);

  return (
    <BookingContext.Provider value={{ bookingId, setBookingId }}>
      {children}
    </BookingContext.Provider>
  );
};