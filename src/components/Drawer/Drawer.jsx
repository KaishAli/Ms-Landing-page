import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import NewsTab from '../../components/News Section/NewsTab';
import Community from '../../components/Community/Community';
import Apply from '../../components/Apply/Apply';
import ExperienceEngage from '../../components/Experience Engage/ExperienceEngage';
import MeetMasters from '../../components/Masters/MeetMasters';
import Hero from '../../components/Hero/Hero';

function Drawer({ handleLogout }) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Hero handleLogout={handleLogout} />} />
                <Route path="/Apply" element={<Apply />} />
                <Route path="/ExperienceEngage" element={<ExperienceEngage />} />
                <Route path="/MeetMasters" element={<MeetMasters />} />
                <Route path="/NewsTab" element={<NewsTab />} />
                <Route path="/Community" element={<Community />} />
            </Routes>
        </Router>
    );
}

export default Drawer;
