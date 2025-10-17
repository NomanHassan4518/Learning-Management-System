import React, { useState } from "react";
import { courses } from "../../assets/data";
import { FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const ManageCourses = () => {
  const navigate = useNavigate();
  const [courseList, setCourseList] = useState(
    courses.map((course) => ({
      ...course,
      lessons: [
        {
          id: 1,
          title: "Introduction to " + course.title,
          type: "video",
          content: "https://example.com/lesson1.mp4",
        },
      ],
    }))
  );

  const handleDeleteCourse = (id) => {
    setCourseList(courseList.filter((course) => course.id !== id));
  };

  const handleDeleteLesson = (courseId, lessonId) => {
    const updatedCourses = courseList.map((course) =>
      course.id === courseId
        ? {
            ...course,
            lessons: course.lessons.filter((lesson) => lesson.id !== lessonId),
          }
        : course
    );
    setCourseList(updatedCourses);
  };

  const editCourse = (course) => {
    navigate(`/admin/edit-course/${course.id}`, { state: { course } });
  };

  const editLesson = (lesson) => {
    navigate(`/admin/edit-lesson/${lesson.id}`, { state: { lesson } });
  };

  return (
    <div className="pb-20">
      <div className="bg-[#da853d] px-10 py-6 pt-24 w-full text-white">
        <h1 className="text-3xl font-alice font-semibold">Manage Courses</h1>
        <p className="mt-2 text-xs space-x-2 font-extralight">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/dashboard">Dashboard</Link>
          <span>|</span>
          <span>Manage Courses</span>
        </p>
      </div>

      <div className="md:p-10 p-5 flex justify-center">
        <div className="bg-[#fff8ef] border border-[#f0e0c9] md:p-8 p-4 rounded-2xl shadow-lg w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-alice text-center">
            Manage Your Courses & Lessons
          </h2>

          <div className="space-y-6">
            {courseList.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="md:flex items-center gap-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="md:text-lg md:mt-0 mt-3 font-semibold text-gray-800">
                        {course.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {course.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => editCourse(course)}
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </div>

                <div className="mt-5 bg-gray-50 rounded-md p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                    <h4 className="text-md font-semibold text-gray-700">
                      Lessons
                    </h4>
                    <button className="text-green-600 hover:text-green-800 flex items-center gap-1 text-sm">
                      <FaPlusCircle /> Add Lesson
                    </button>
                  </div>

                  {course.lessons && course.lessons.length > 0 ? (
                    <ul className="space-y-2">
                      {course.lessons.map((lesson) => (
                        <li
                          key={lesson.id}
                          className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-gray-200 p-3 rounded-md gap-3"
                        >
                          <div>
                            <p className="font-medium text-gray-800 text-sm">
                              {lesson.title}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              Type: {lesson.type}
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => editLesson(lesson)}
                              className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1"
                            >
                              <FaEdit /> Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteLesson(course.id, lesson.id)
                              }
                              className="text-red-600 hover:text-red-800 text-xs flex items-center gap-1"
                            >
                              <FaTrash /> Delete
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No lessons added yet.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
