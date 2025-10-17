import React from "react";
import { FaBookOpen, FaUsers, FaVideo } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-7 h-7" />,
      title: "Comprehensive Courses",
      desc: "Access a wide range of courses covering various subjects designed by expert instructors.",
    },
    {
      icon: <FaUsers className="w-7 h-7 " />,
      title: "Expert Instructors",
      desc: "Learn from industry professionals who bring real-world experience into every lesson.",
    },
    {
      icon: <FaVideo className="w-7 h-7 " />,
      title: "Interactive Learning",
      desc: "Engage with video lectures, quizzes, and assignments to reinforce your understanding.",
    },
  ];

  return (
    <section className="py-20 bg-[#fdf6ea]">
      <div className="max-w-6xl mx-auto px-6 text-center">
       <div className="flex flex-col items-center justify-center">
         <h2 className="text-3xl sm:text-4xl font-bold mb-1 font-alice">
          Some Great Features of LMS
        </h2>
        <div className="w-20 h-[2px] bg-green-600"></div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
  {features.map((feature, index) => (
    <div
      key={index}
      className=""
    >
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full mb-3 text-white border transition duration-300
            ${
              index === 0
                ? "bg-[#27ae60]"
                : index === 1
                ? "bg-[#f39c12]"
                : "bg-[#d35400]"
            }
          `}
        >
          {feature.icon}
        </div>
        <h3 className="text-xl font-alice font-extralight mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-700 text-xs ">{feature.desc}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#fff4df] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Features;
