import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import Home from './Home/Home';
import Technologies from './Technologies/Technologies';
import Works from './Works/Works';
import About from './About/About';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Simulate loading time with useEffect
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after 2 seconds (simulating loading time)
    }, 1000);

    return () => clearTimeout(); // Cleanup timer on component unmount
  }, []);
  return (
    <>
    {isLoading ? (
      <div className='flex h-screen bg-black'>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#fff"
          ariaLabel="triangle-loading"
          wrapperStyle={{margin: 'auto'}}
          wrapperClass=""
       />
      </div>
      
  
    ) : (
    <div className="flex flex-col main-container">
      <div className="bg-blue-500/20">
        <Home />
        <div id="technologies"><Technologies /></div>
        <div id="works"><Works /></div>
        <div id="about"><About /></div>
      </div>
    </div>
    )}
    </>
  )
};

export default MainPage;
