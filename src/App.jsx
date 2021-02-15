import React from 'react';
import Banner from './components/Banner';
import CarrouselProducts from './components/CarrouselProducts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
     <h1>Hola Mundo React</h1>
     <Navbar />
     <Banner />
     <CarrouselProducts />
     <Footer />
 
    </div>
  );
}

export default App;
