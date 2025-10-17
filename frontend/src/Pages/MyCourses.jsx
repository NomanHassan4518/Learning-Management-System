import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../assets/data";

const MyCourses = () => {
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    const storedCourses = courses;
    setMyCourses(storedCourses);
  }, []);

  return (
    <div className="pb-20">
      <div className="bg-[#da853d] px-10 py-6 w-full text-white ">
        <h1 className="text-4xl font-alice font-semibold">My Courses</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <span>My Courses</span>
        </p>
      </div>

      <div className="p-10">
        {myCourses.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl text-gray-700 mb-2">You haven’t enrolled in any courses yet.</h2>
            <Link
              to="/courses"
              className="bg-[#27ae60] text-white px-5 py-2 rounded-md text-sm hover:bg-gray-800 transition"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#fff8ef] border border-[#f0e0c9] rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-[#da853d] text-sm font-semibold mb-1">{course.price}</p>
                  <h3 className="text-lg font-alice font-semibold mb-2 text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">{course.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <p>{course.category}</p>
                    <p>{course.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
