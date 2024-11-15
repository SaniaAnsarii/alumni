import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

import Welcome from './components/Welcome';
import Login from './components/Login';
import Achievements from './components/Achievements';
import Directory from './components/Directory';
import Success from './components/Success';
import Feedback from './components/Feedback';
import Jobs from './components/Jobs';
import Events from './components/Events';
import Project from './components/Project';
import Scholarship from './components/Scholarship';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Alumnis from './components/Alumnis';
import User from './components/User';

const App = () => {
  const [appearance, setAppearance] = useState('light');
  const location = useLocation();

  // Toggle theme function
  const toggleTheme = () => {
    setAppearance((prevAppearance) => (prevAppearance === 'light' ? 'dark' : 'light'));
  };

  // List of routes where the dark mode toggle should not be shown
  const noDarkModeRoutes = ['/', '/login'];

  return (
    <Theme grayColor="mauve" appearance={appearance}>
      <div>
        {/* Define all routes */}
        <Routes>
          <Route path='/user' element={<User/>}/>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/home" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/success" element={<Success />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/project" element={<Project />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/alumnis' element={<Alumnis/>}/>
        </Routes>

        {/* Render toggle button only if the current route is not in the excluded routes */}
        {!noDarkModeRoutes.includes(location.pathname) && (
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
        )}
      </div>
    </Theme>
  );
};

export default App;
