import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative h-[36rem] sm:h-[40rem] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "url('https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/fullscreen-slider.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-5 text-white font-alice">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Empower Your Future with Online Learning
        </h1>

        <p className="text-base sm:text-lg text-gray-200 mb-8 font-sans">
          Learn anytime, anywhere with expert-led courses.  
          Gain real-world skills, track your progress, and build your career confidently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/courses"
            type="primary"
            size="large"
            className="bg-[#27ae60] hover:bg-green-700 border-none text-white font-semibold px-8 py-2 rounded-md shadow-md transition-all"
          >
            Explore Courses <ArrowRightOutlined />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
