import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      return savedTheme === 'retro' ? 'retro' : 'modern';
    } catch {
      return 'modern';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_theme', theme);
    } catch (e) {
      console.warn('Could not persist theme to localStorage', e);
    }
    
    // Update body class
    if (theme === 'retro') {
      document.body.classList.remove('theme-modern');
      document.body.classList.add('theme-retro');
    } else {
      document.body.classList.remove('theme-retro');
      document.body.classList.add('theme-modern');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'modern' ? 'retro' : 'modern'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRetro: theme === 'retro' }}>
      <div className={theme === 'retro' ? 'theme-retro retro-scanlines' : 'theme-modern'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
