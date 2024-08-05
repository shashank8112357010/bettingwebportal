import React from 'react';

const ImageGallery = () => {
  const images = [
    '/images/games/game1.png',
    '/images/games/game2.png',
    '/images/games/game3.png',
    '/images/carousel2.png',
    '/images/carousel3.png',
    '/images/carousel1.png',
  ];

  return (
    <div className="flex justify-center items-center py-4">
      <div className=" scroll-container overflow-x-auto scroll-smooth w-[400px]">
        <div className="flex space-x-4">
          {images.map((src, index) => (
            <div key={index} className="min-w-[120px]">
              <img src={src} alt={`Image ${index + 1}`} className="w-full h-[150px] rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
