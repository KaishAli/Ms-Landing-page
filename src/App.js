import ExperienceEngage from '../src/components/Experience Engage/ExperienceEngage'
import MeetMasters from '../src/components/Masters/MeetMasters'
import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Footer from '../src/components/Footer/Footer'
import NewsTab from '../src/components/News Section/NewsTab'
import Community from './components/Community/Community'
import Apply from '../src/components/Apply/Apply'


function App() {
  return (
    <>
      <div className='main-wp'>
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
      </div>

    </>
  );
}

export default App;
