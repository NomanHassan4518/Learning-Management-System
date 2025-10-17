import React from "react";
import { Link } from "react-router-dom";
import Features from "../Components/Home/Features";

export default function About() {
  return (
    <div className="bg-[#fdf6ea]">
      <div className="bg-[#da853d] px-6 sm:px-10 py-6 pt-20 w-full text-white text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-alice font-semibold">About</h1>
        <p className="mt-2 text-xs sm:text-sm font-extralight space-x-2">
          <Link to="/">Home</Link>
          <span>|</span>
          <span>About Us</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 sm:px-10 mt-10 items-center">
        <div className="md:col-span-5 w-full h-full">
          <img
            src="https://dtlmselementor.wpengine.com/wp-content/uploads/2023/12/About-Slider-image-2.jpg"
            alt="About LMS"
            className="w-full h-64 md:h-full object-cover rounded-md shadow-md"
          />
        </div>

        <div className="md:col-span-7 px-2 sm:px-4 font-alice">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  text-[#303030]">
            Welcome to LMS
          </h1>
          <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed">
            Our Learning Management System (LMS) provides an engaging and
            accessible online learning experience. Instructors can easily create
            and manage courses, while students learn anytime and anywhere at
            their own pace. The platform’s clean, intuitive design ensures
            smooth interaction for all users.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 space-y-2 mt-4 text-xs sm:text-sm">
            <li>Simple course creation and management tools for instructors.</li>
            <li>Effortless access to courses, lessons, and materials.</li>
            <li>Modern, responsive, and user-friendly interface.</li>
            <li>Learn flexibly and earn certificates upon completion.</li>
          </ul>
        </div>
      </div>

      <div>
        <Features />
      </div>
    </div>
  );
}
