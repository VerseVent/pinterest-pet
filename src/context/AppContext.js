import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppProvider = ({ children }) => {
  const [recommendedTags, setRecommendedTags] = useState([]);

  return (
    <AppContext.Provider value={{ recommendedTags, setRecommendedTags }}>
      {children}
    </AppContext.Provider>
  );
};
