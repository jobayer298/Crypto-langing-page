import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ToNFT from './components/ToNFT/ToNFT';;
import Creator from './components/Creator/Creator';
import ImageGallery from './components/Gallery/ImageGallery';
import Collections from './components/Collections/Collections';
import Hello from './components/Hello/Hello';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
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
  );
};

export default App;