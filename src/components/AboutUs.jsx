import React from "react";
import Marquee from "react-fast-marquee";

const AboutUs = () => {
  const jobMarquee = [
    {
      id: 1,
      img: "./ceremony/s1.jpg",
    },
    {
      id: 2,
      img: "./ceremony/s2.jpg",
    },
    {
      id: 3,
      img: "./ceremony/s3.jpg",
    },
    {
      id: 4,
      img: "./ceremony/s4.jpg",
    },
    {
      id: 5,
      img: "./ceremony/s5.jpg",
    },
    {
      id: 6,
      img: "./ceremony/s6.jpg",
    }, 
    {
      id: 2,
      img: "./ceremony/s2.jpg",
    },
  ];
  const certificationMarquee = [
    {
      id: 1,
      img: "./ceremony/i1.jpg",
    },
    {
      id: 2,
      img: "./ceremony/i2.jpg",
    },
    {
      id: 3,
      img: "./ceremony/i3.jpg",
    },
    {
      id: 4,
      img: "./ceremony/i4.jpg",
    },
    {
      id: 5,
      img: "./ceremony/i5.jpg",
    },
    {
      id: 6,
      img: "./ceremony/i10.jpg",
    },
    {
      id: 7,
      img: "./ceremony/i13.jpg",
    },
    {
      id: 8,
      img: "./ceremony/i15.jpg",
    },
    {
      id: 9,
      img: "./ceremony/i20.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-zinc-950 p-4 md:p-5">
      <h1 className="text-center font-black text-3xl md:text-5xl tracking-tighter font-serif">
        About Diamond Coaching Center
      </h1>
      <p className="text-center text-sm md:text-base mt-2">
        Empowering the next gen of IT professionals since 2015
      </p>

      <div className="flex flex-col items-center w-full md:w-3/4 mx-auto border-2 border-rose-500 rounded-3xl bg-zinc-800 p-4 md:p-5 my-10 md:my-20">
        <h2 className="text-center font-black text-2xl md:text-4xl uppercase my-3 md:my-5 bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text font-serif">
          Our Story
        </h2>
        <p className="text-sm md:text-base text-center px-2 md:px-4">
          Diamond Coaching Center was founded in 2015 with a mission to provide
          high-quality education and training in the field of Information
          Technology and preparing newcomers for the competitive exams to make
          their dreams come true. Our founder, MD. Sanjeev Kumar, recognized the
          need for a coaching center that could bridge the gap between
          theoretical knowledge and practical skills.
        </p>
      </div>

      <div className="flex justify-center items-center w-full my-5 md:my-10 border-t border-white/50 pt-5">
        <h2 className="text-center font-black text-2xl md:text-4xl uppercase bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text font-serif">
          Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5 w-full px-4 md:px-10">
        <span className="flex flex-col items-center">
          <img
            src="./ceo.png"
            alt="CEO"
            className="drop-shadow-cyan-100/50 drop-shadow-2xl h-40 md:h-60 rounded-full"
          />
          <p className="text-center font-bold text-lg md:text-xl mt-2">CEO</p>
          <p className="text-lg md:text-xl text-center font-bold">
            Sh. Ashok Kumar
          </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./1231.png"
            alt="MD"
            className="drop-shadow-cyan-100/50 drop-shadow-2xl h-40 md:h-60 rounded-full"
          />
          <p className="text-center font-bold text-lg md:text-xl mt-2">
            Managing Director
          </p>
          <p className="text-lg md:text-xl text-center font-bold">
            MD. Sanjeev Kumar
          </p>
        </span>
        <span className="flex flex-col items-center">
          <img
            src="./teacher.png"
            alt="Teacher"
            className="drop-shadow-cyan-100/50 drop-shadow-2xl h-40 md:h-60 rounded-full"
          />
          <p className="text-center font-bold text-lg md:text-xl mt-2">
            Computer Teacher
          </p>
          <p className="text-lg md:text-xl text-center font-bold">Arti Rani</p>
        </span>
      </div>

      <div className="flex flex-col items-center w-full my-10 md:my-20 py-5 md:py-10 border-t border-white/50">
        <h2 className="text-3xl md:text-5xl uppercase font-bold bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-transparent bg-clip-text font-serif text-center">
          Our Achievements
        </h2>
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-center mt-5">
            Job Placement
          </h3>
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            direction="left"
            className="mb-4 md:mb-8"
          >
            <div className="flex overflow-x-auto py-5">
              {jobMarquee.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={`Job ${item.id}`}
                  className="h-40 md:h-60 mx-2 rounded-lg drop-shadow-cyan-100/50 drop-shadow-2xl"
                />
              ))}
            </div>
          </Marquee>
        </div>
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-center mt-5">
            Certificate Ceremony
          </h3>
          <Marquee
            gradient={false}
            speed={30}
            pauseOnHover={true}
            direction="right"
            className="mb-4 md:mb-8"
          >
            <div className="flex overflow-x-auto py-5">
              {certificationMarquee.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={`Job ${item.id}`}
                  className="h-40 md:h-60 mx-2 rounded-lg drop-shadow-cyan-100/50 drop-shadow-2xl"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
