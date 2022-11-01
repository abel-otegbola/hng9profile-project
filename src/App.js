import './App.css';
import Footer from './components/footer/footer';
import Links from './components/links/links';
import Profile from './components/profile/profile';
import Socials from './components/socials/socials';
import Share from './components/share/share';

function App() {
  return (
    <div className="App">
      <Share />
      <Profile />
      <Links />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
