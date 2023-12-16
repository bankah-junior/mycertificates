import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './pageLoader.css'

const PageLoader = ({unique}) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
      <div className="absolute w-full h-screen grid place-content-center bg-black z-[9999]" style={{ display : isVisible ? 'none' : 'grid' }}>
        <div className="spinner w-[4.5rem] h-[4.5rem] rounded-full bg-[#ffc451] grid place-content-center relative">
          <div className="bg-black rounded-full w-14 h-14"></div>
          <div className="w-8 h-[4.5rem] bg-black absolute left-[30%]"></div>
        </div>
      </div>
    );
}

export default PageLoader