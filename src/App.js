import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import Brands from './Components/Brands.jsx';
import Market from './Components/Market.jsx';
import PinnedItems from './Components/PinnedItems';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#F9FBFF]">
        <div className="max-w-[1728px] w-full mx-auto font-Inter">
          <div className="sm:hidden md:flex">
            <Sidebar />
          </div>
          <div className="md:pl-[256px] sm:pl-0 flex flex-col">
            <Header />
            <Routes>
              <Route exact path="/" element={<Navigate to="/brands" />} />
              <Route exact path="/brands" element={<Brands />} />
              <Route exact path="/market" element={<Market />} />
              <Route exact path="/pinnedItems" element={<PinnedItems />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
