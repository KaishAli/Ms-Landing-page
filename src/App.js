import Login from '../src/components/Login/Login'
import ExperienceEngage from '../src/components/Experience Engage/ExperienceEngage'
import MeetMasters from '../src/components/Masters/MeetMasters'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Footer from '../src/components/Footer/Footer'
import NewsTab from '../src/components/News Section/NewsTab'
import Community from './components/Community/Community'
import Apply from '../src/components/Apply/Apply'
import { useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className='main-wp'>
        {
          isAuthenticated ? <>
            <div>
              <Header />
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
            : <Login setIsAuthenticated={setIsAuthenticated} />
        }
      </div>


    </>
  );

}

export default App;
