import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Bank Exam ",
    description:
      "Join our institute for comprehensive study materials, mock tests, and personalized guidance to help you succeed in exams like IBPS, SBI, and more.",
  },
  {
    title: "SSC Preparation",
    description:
      "Comprehensive SSC exam preparation with expert guidance, study materials, and regular mock tests to ensure your success.",
  },
  {
    title: "Railway Exams",
    description:
      "Specialized training for Railway recruitment exams with focused study materials and exam-oriented preparation strategies.",
  },
  {
    title: "Teaching Exams",
    description:
      "Prepare for teaching exams like CTET and UPTET with our expert-led courses, study materials, and mock tests.",
  },
  {
    title: "Defence Exams",
    description:
      "Join our Defence exam preparation courses for comprehensive training and expert guidance to excel in exams like NDA, CDS, and more.",
  },
  // Add more courses as needed
];
const techCourses = [
  {
    title: "Web Development",
    description:
      "Learn the latest web development technologies and frameworks to build responsive and dynamic websites.",
  },
  {
    title: "Digital Marketing",
    description:
      "Explore the world of digital marketing, including SEO, social media marketing, and content marketing strategies.",
  },
  {
    title: "Mobile App Development",
    description:
      "Learn how to develop mobile applications for Android and iOS platforms using the latest tools and technologies.",
  },
  {
    title: "Cybersecurity",
    description:
      "Understand the principles of cybersecurity and learn how to protect systems and networks from cyber threats.",
  },
  {
    title: "Tally & GST",
    description:
      "Master Tally and GST for effective accounting and tax management. Learn practical skills for real-world applications.",
  },
];

const CourseMarquee = () => {
  return (
    <div className="bg-zinc-950 h-fit text-white py-10">
      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover={true}
        direction="left"
        className="mb-4 md:mb-8"
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-evenly bg-zinc-950 
            h-[200px] md:h-[250px] w-[200px] md:w-[250px] 
            mx-2 md:mx-4 my-3 md:my-5
            text-center relative rounded-2xl md:rounded-3xl p-3 md:p-5 
            bg-gradient-to-bl from-red-500 via-pink-500 to-blue-500
            hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-2xl font-bold font-mono">{course.title}</h1>
            <p className="text-sm">{course.description}</p>
          </div>
        ))}
      </Marquee>
      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover={true}
        direction="right"
        className="mb-4 md:mb-8"
      >
        {techCourses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-evenly bg-zinc-950 
              h-[200px] md:h-[250px] w-[200px] md:w-[250px] 
              mx-2 md:mx-4 my-3 md:my-5
              text-center relative rounded-2xl md:rounded-3xl p-3 md:p-5 
              bg-gradient-to-bl from-red-500 via-pink-500 to-blue-500
              hover:scale-105 transition-transform duration-300"
          >
            <h1 className="text-xl md:text-2xl font-bold font-mono">
              {course.title}
            </h1>
            <p className="text-xs md:text-sm line-clamp-4 md:line-clamp-none ">
              {course.description}
            </p>
          </div>
        ))}
      </Marquee>
      <div className="flex mt-10 items-center justify-center">
       <Link to="/courses" className="h-fit px-5 py-1 rounded-full bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-white drop-shadow-sm drop-shadow-white flex  gap-2">
       <img
                src="./Book.gif"
                alt=""
                className="h-8 rounded-lg drop-shadow-lg drop-shadow-white"
              /> <p className="my-auto">View All</p>
       </Link>
      </div>
    </div>
  );
};

export default CourseMarquee;
