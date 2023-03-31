// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Footer from './components/Footer/Footer';
import DetailProduct from './page/DetailProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='detail-product' element={<DetailProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
