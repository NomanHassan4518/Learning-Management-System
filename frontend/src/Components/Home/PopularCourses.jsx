import CourseCard from "../CourseCard";
import { courses } from "../../assets/data";

const PopularCourses = () => {
  return (
    <div className="bg-[#fdf6ea] py-16 px-10 text-center">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-1 font-alice">
          Our Popular Courses
        </h2>
        <div className="w-20 h-[2px] bg-green-600"></div>
      </div>

      <div className=" mt-10">
        {courses.map((course) => (
          <div className="mt-8">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
