import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MenuBar from './Components/MenuBar';
import HeroSection from './Components/HeroSection';
import Admin from './Components/Admin';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Footer />
    </div>
  );
}

export default App;
