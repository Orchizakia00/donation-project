/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

// Create a context
const DonationContext = createContext();

// Create a Provider component to wrap your entire application
export const DonationProvider = ({ children }) => {
  const [numberOfDonations, setNumberOfDonations] = useState(0);

  return (
    <DonationContext.Provider value={{ numberOfDonations, setNumberOfDonations }}>
      {children}
    </DonationContext.Provider>
  );
};

// Create a custom hook to access the context
export const useDonationContext = () => {
  return useContext(DonationContext);
};
