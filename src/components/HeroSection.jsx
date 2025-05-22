import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Auto-rotation
    const globe = globeRef.current;
    if (globe) {
      globe.controls().enableZoom = false;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 1;
    }
  }, []);

  return (
    <div className="flex bg-zinc-950 flex-col pt-10 md:h-screen h-[60vh] text-center relative">
      <div className="h-30 md:w-70 w-40 bg-orange-400 blur-3xl absolute top-10 md:left-30 left-10"></div>
      <span className="absolute h-fit flex justify-center items-center w-full md:top-10 z-2  top-10">
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          atmosphereColor="#3a228a"
          atmosphereAltitude={0.25}
          width={window.innerWidth < 768 ? 400 : 600}
          height={window.innerWidth < 768 ? 400 : 600}
          globeScale={window.innerWidth < 768 ? 0.8 : 1.2}
          animateIn={true}
        />
      </span>
      <div className="relative px-4 mt-[10px] md:mt-0 z-3">
        <p className=" text-2xl md:text-4xl font-semibold text-white font-sans uppercase">
          WellCome
        </p>
        <h1 className="z-1 font-black text-[28px] md:text-7xl text-white font-sans uppercase mt-5 md:mt-10">
          Diamond info
          <span className="bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text ">
            &lt;tech/&gt;
          </span>
        </h1>
        <h1 className="drop-shadow-md drop-shadow-orange-500 font-black text-2xl md:text-5xl font-sans uppercase z-10 mt-3">
          Coaching Center
        </h1>
        <p className="font-light text-md md:text-lg font-sans uppercase z-10 mt-4">
          "Delivering Exactly What You Need to Succeed with Confidence!"
        </p>
        <button className="bg-gradient-to-tr from-blue-500 via-pink-500 to-red-500 text-white font-serif w-fit py-2 px-5 rounded-full z-10 mx-auto my-8 uppercase md:mt-30">
          <a href="/contact">Get In Touch..</a>
        </button>
      </div>
      <Link
        to="/contact"
        className="flex flex-col items-center fixed bottom-15 right-5 bg-white/30 rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300 z-10 "
        title="Contact"
      >
        <img
          src="./phone.gif"
          alt=""
          className="h-10 rounded-full p-1 bg-white/90 drop-shadow-xs drop-shadow-blue-500"
        />
      </Link>
    </div>
  );
};

export default HeroSection;
