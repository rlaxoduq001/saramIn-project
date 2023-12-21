import './App.css'
import { Navbar } from './components/Navbar'
import { Slider } from './components/MainSlider';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';

function App() {

  return (
    <>
      <Navbar/>
      <Slider/>
    </>
  )
}

export default App
