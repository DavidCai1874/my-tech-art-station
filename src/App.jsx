import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import UpdatesPage from './pages/00_Updates/00_Updates.jsx';

import Home from './pages/01_Home/01_Home.jsx';
import Contribute from './pages/02_Contribute/02_Contribute.jsx';
import Playground from './pages/03_Playground/03_Playground.jsx';
import About from './pages/04_About/04_About.jsx';

import Addons from './pages/05_Addons/05_Addons.jsx';
import TroubleShooting from './pages/06_TroubleShooting/06_TroubleShooting.jsx';
import WorkInProgress from './pages/07_WorkInProgress/07_WorkInProgress.jsx';
import WeeklyLog from './pages/08_WeeklyLog/08_WeeklyLog.jsx';
import Gallery from './pages/09_Gallery/09_Gallery.jsx';


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addons" element={<Addons />} />
        <Route path="/troubleshooting" element={<TroubleShooting />} />
        <Route path="/workinprogress" element={<WorkInProgress />} />
        <Route path="/weeklylog/*" element={<WeeklyLog />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/updates" element={<UpdatesPage />} />
      </Routes>
    </>
  );
}