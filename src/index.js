import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Import icons

const Root = () => {
  const [appearance, setAppearance] = useState('light');

  // Toggle theme function
  const toggleTheme = () => {
    setAppearance((prevAppearance) => (prevAppearance === 'light' ? 'dark' : 'light'));
  };

  return (
    <Theme grayColor="mauve" appearance={appearance}>
      <App />
      
      {/* Toggle button positioned at the bottom-right corner */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center"
      >
        {appearance === 'light' ? (
          <MoonIcon className="w-5 h-5" />
        ) : (
          <SunIcon className="w-5 h-5" />
        )}
      </button>
    </Theme>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

reportWebVitals();
