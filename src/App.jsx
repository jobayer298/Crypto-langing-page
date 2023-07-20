import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ToNFT from './components/ToNFT/ToNFT';;
import Creator from './components/Creator/Creator';
import ImageGallery from './components/Gallery/ImageGallery';
import Collections from './components/Collections/Collections';
import Hello from './components/Hello/Hello';
import Footer from './components/Footer/Footer';
import Loader from './Loader/Loader';
// import ParticleBackground from './Particle/ParticleBackground';

const App = () => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() =>{
       setTimeout(() => {
        setLoading(false)
       }, 2500);
  }, [])
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header></Header>
          <Banner></Banner>
          <ToNFT></ToNFT>
          <Creator></Creator>
          <ImageGallery></ImageGallery>
          <Collections></Collections>
          <Footer></Footer>
          {/* <Hello></Hello> */}
        </div>
      )}
    </div>
  );
};

export default App;