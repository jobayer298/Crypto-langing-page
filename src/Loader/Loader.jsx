import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';
import img from './giphy.gif'

const Loader = () => {
    return (
      <div className="h-screen bg-black grid place-items-center">
        <img src={img} alt="" />
      </div>
    );
};

export default Loader;