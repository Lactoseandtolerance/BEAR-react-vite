import React, { createContext, useState, useContext, useEffect } from 'react';
import { createCollectionTheme } from '../styles/themes/themeBuilder';

// Create the context
const ThemeContext = createContext();

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [activeCollection, setActiveCollection] = useState('primal');
  const [theme, setTheme] = useState(createCollectionTheme('primal'));
  
  // Update theme when collection changes
  useEffect(() => {
    setTheme(createCollectionTheme(activeCollection));
    
    // Update body classes for global styling hooks
    document.body.className = `collection-${activeCollection}`;
    
    // Apply collection-specific CSS variables to the root element
    Object.entries(theme.colors || {}).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--color-${key}`, value);
    });
    
    return () => {
      // Clean up CSS variables when component unmounts or collection changes
      Object.keys(theme.colors || {}).forEach((key) => {
        document.documentElement.style.removeProperty(`--color-${key}`);
      });
    };
  }, [activeCollection, theme.colors]);

  // Value to be provided by context
  const contextValue = {
    theme,
    activeCollection,
    setActiveCollection,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;