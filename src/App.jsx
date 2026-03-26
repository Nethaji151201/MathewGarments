import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/common/FloatingButtons';
import Home from './pages/Home';
import Branches from './pages/Branches';
import BranchDetails from './pages/BranchDetails';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/branches/:id" element={<BranchDetails />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
