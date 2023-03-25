// import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Slider } from './components/Slider/Slider';
import FlashSale from './components/FlashSale/FlashSale';
import Banner from './components/Banner/Banner';
import ProductCardTab from './components/ProductCardTab/ProductCardTab';
import NewProduct from './components/NewProduct/NewProduct';
import Policy from './components/Policy/Policy';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Slider />
        <FlashSale />
        <Banner />
        <ProductCardTab />
        <NewProduct />
        <Policy/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
