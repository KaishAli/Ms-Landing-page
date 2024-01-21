import Login from '../src/components/Login/Login'
import ExperienceEngage from '../src/components/Experience Engage/ExperienceEngage'
import MeetMasters from '../src/components/Masters/MeetMasters'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Footer from '../src/components/Footer/Footer'
import NewsTab from '../src/components/News Section/NewsTab'
import Community from './components/Community/Community'
import Apply from '../src/components/Apply/Apply'
// import Drawer from '../src/components/Drawer/Drawer'

import { useEffect, useState } from 'react'

function App() {
  const [email, setEmail] = useState('');

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());

  }, [isAuthenticated]);

  const handleAuthChange = (authenState) => {
    setIsAuthenticated(authenState);
  };

  const handleLogout = () => {
    // Clear authentication information and set isAuthenticated to false
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <>
      <div className='main-wp'>
        {
          isAuthenticated ?
            <>
              <div>
                <Header email={email} handleLogout={handleLogout} />
              </div>
              <hr style={{ color: "white" }} />
              <Hero />
              <Apply />
              <ExperienceEngage />
              <MeetMasters />
              <NewsTab />
              <Community />
              <Footer />
            </>
            : <Login email={email} setEmail={setEmail} handleAuthChange={handleAuthChange} setIsAuthenticated={handleAuthChange} />
        }
      </div>


    </>
  );

}

export default App;
