import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import '@radix-ui/themes/styles.css';

// import Welcome from './components/Welcome';
import Login from './components/Login';
// import Achievements from './components/Achievements';
import Directory from './components/Directory';
// import Success from './components/Success';
import Feedback from './components/Feedback';
import Jobs from './components/Jobs';
import Events from './components/Events';
import Project from './components/Project';
import Scholarship from './components/Scholarship';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Alums from './components/Alums';
import User from './components/User';
// import Alumni from './components/Alumni';
import AlumiDetails from './components/AlumiDetails';

const App = () => {
  const location = useLocation();

  return (
    <div>
      {/* Define all routes */}
      <Routes>
        <Route path='/user' element={<User/>}/>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute redirectTo="/">
              <Login />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/directory" element={<Directory />} />
        {/* <Route path="/achievements" element={<Achievements />} /> */}
        {/* <Route path="/success" element={<Success />} /> */}
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/project" element={<Project />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path='/alums' element={<Alums/>}/>
        <Route path='/alumni/:alumniId' element={<AlumiDetails />} />
      </Routes>
    </div>
  );
};

export default App;

export const ProtectedRoute = ({ children, redirectTo }) => {
  const loginToken = localStorage.getItem("authToken");
  return loginToken ? <Navigate to={redirectTo} replace /> : children;
};
