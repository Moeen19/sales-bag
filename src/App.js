import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import Brands from './Components/Brands.jsx';
import Market from './Components/Market.jsx';
import PinnedItems from './Components/PinnedItems';
import { useState } from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

function App() {
  const itemsLocal = JSON?.parse(localStorage?.getItem("my-clothes"));
  const [itemsNo, setItemsNo] = useState(itemsLocal.length ?? [])
  console.log(itemsNo)
  return (
    <BrowserRouter>
      <div className="bg-[#F9FBFF]">
        <div className="max-w-[1728px] w-full mx-auto font-Inter">
          <div className="hidden lg:flex">
            <Sidebar />
          </div>
          <div className="lg:pl-[256px] pl-0 flex flex-col">
            <Header itemsNo={itemsNo} />
            <Routes>
              <Route exact path="/" element={<Navigate to="/brands" />} />
              <Route exact path="/brands" element={<Brands setItemsNo={setItemsNo} />} />
              <Route exact path="/market" element={<Market setItemsNo={setItemsNo} />} />
              <Route exact path="/pinnedItems" element={<PinnedItems setItemsNo={setItemsNo} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
