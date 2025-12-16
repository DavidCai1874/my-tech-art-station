import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

import Home from './pages/01_Home/01_Home.jsx';
import Gallery from './pages/02_Gallery/02_Gallery.jsx';
import About from './pages/03_About/03_About.jsx';

import Addons from './pages/04_Addons/04_Addons_Router.jsx';
import TroubleShooting from './pages/05_TroubleShooting/05_TroubleShooting_Router.jsx';
import WeeklyLog from './pages/06_WeeklyLog/06_WeeklyLog_Router.jsx';



export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/addons/*" element={<Addons />} />
        <Route path="/troubleshooting/*" element={<TroubleShooting />} />

        <Route path="/weeklylog/*" element={<WeeklyLog />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}