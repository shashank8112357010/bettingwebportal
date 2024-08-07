import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "slider-1",
      src: '/images/carousel3.png',
      // backgroundImage:
      //   "url(https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1422&q=80)",
      // content: (
      //   <>
      //     <p className="font-bold text-sm uppercase">Services</p>
      //     <p className="text-3xl font-bold">Hello world</p>
      //     <p className="text-2xl mb-10 leading-none">
      //       Carousel with TailwindCSS and jQuery
      //     </p>
      //     <a
      //       href="#"
      //       className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
      //     >
      //       Contact us
      //     </a>
      //   </>
      // ),
    },
    {
      id: "slider-2",
      src: '/images/carousel2.png',
      // backgroundImage:
      //   "url(https://images.unsplash.com/photo-1544144433-d50aff500b91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
      // content: (
      //   <>
      //     <p className="font-bold text-sm uppercase">Services</p>
      //     <p className="text-3xl font-bold">Hello world</p>
      //     <p className="text-2xl mb-10 leading-none">
      //       Carousel with TailwindCSS and jQuery
      //     </p>
      //     <a
      //       href="#"
      //       className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
      //     >
      //       Contact us
      //     </a>
      //   </>
      // ),
    },
    {
      id: "slider-3",
      src: '/images/carousel2.png',
    },
    {
      id: "slider-4",
      src: '/images/carousel1.png',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleButtonClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      <div className="sliderAx h-auto">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`container mx-auto transition-opacity duration-500 ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            style={{ display: currentSlide === index ? "block" : "none" }}
          >
            <div
              className=" w-[420px] h-[200px]  text-white flex flex-col items-center justify-center"
            // style={{ backgroundImage: slide.backgroundImage }}
            >
              <img src={slide.src} alt={`Slide ${index + 1}`} className=" w-[90%] h-[85%] rounded-lg" />
              {/* <div className="md:w-1/2">{slide.content}</div> */}
            </div>
            <br />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full gap-2 -mt-8 mx-auto pb-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`rounded-full w-1 p-1 ${currentSlide === index ? "bg-stone-200" : "bg-stone-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
