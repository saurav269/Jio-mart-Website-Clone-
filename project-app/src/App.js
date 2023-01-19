import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MenuBar from './Components/MenuBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MenuBar/>
      <Footer/>
    </div>
  );
}

export default App;
