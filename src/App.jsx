import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/01_Home';
import Addons from './pages/02_Addons/02_Addons';
import TroubleShooting from './pages/03_TroubleShooting/03_TroubleShooting';
import WorkingOn from './pages/04_WorkingOn/04_WorkingOn';
import ClassProgress from './pages/05_WeeklyProgress';
import About from './pages/06_About';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/troubleshooting" element={<TroubleShooting />} />
        <Route path="/workingon" element={<WorkingOn />} />
        <Route path="/classprogress" element={<ClassProgress />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}