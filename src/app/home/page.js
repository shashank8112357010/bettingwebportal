'use client'
import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";
import Header from "../components/small/header";
import ImageGallery from "../components/small/imageGallery";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="container max-w-[420px] rounded-2xl  min-h-screen relative"
        style={{ boxShadow: "0 4px 6px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.5)" }}>
        <Header />
        <Carousel />
        {/* Quick Match Section */}
        <div>
          <h3 className="px-8 text-sm mt-2 text-[#D9D9D9]">Quick match</h3>
          <div className="flex justify-center items-center gap-8 mt-6">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" w-[65px] h-[65px] rounded-full border border-gray-800 flex justify-center items-center"
                style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)", background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" }}>
                <img src="/images/multiplayer.png" alt="multi" />
              </div>
              <h6 className="text-xs">Multiplayer</h6>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className=" w-[65px] h-[65px] rounded-full border border-gray-800 flex justify-center items-center"
                style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.15),0 0 10px rgba(255, 255, 255, 0.02)", background: "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))" }}>
                <img src="/images/tropy.png" alt="tropy" />
              </div>
              <h6 className="text-xs">Tournament</h6>
            </div>
          </div>
        </div>
        {/* Games Section */}
        <div>
          <h3 className="px-8 text-sm mt-2 text-[#D9D9D9]">Games</h3>
          <ImageGallery />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
