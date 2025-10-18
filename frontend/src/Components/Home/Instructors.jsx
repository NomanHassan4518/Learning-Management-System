import React from "react";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-4.jpg",
    specialization: "Full Stack Web Developer",
  },
  {
    id: 2,
    name: "Sarah Lee",
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-1.jpg",
    specialization: "AI & Machine Learning",
  },
  {
    id: 3,
    name: "Michael Brown",
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-2.jpg",
    specialization: "Digital Marketing Strategist",
  },
  {
    id: 4,
    name: "Emma Wilson",
    image:
      "https://dtlmselementor.wpengine.com/wp-content/uploads/2023/11/Teacher-image-3.jpg",
    specialization: "Data Scientist",
  },
];

const Instructors = () => {
  return (
    <section className=" px-4 sm:px-8 lg:px-16 pb-24 bg-[#fff8ef]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-1 font-alice">
            Our Expert Instructors
          </h2>
          <div className="w-20 h-[2px] bg-green-600"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-[#f5e9d4] hover:bg-[#838c48] transition duration-300 rounded-lg overflow-hidden shadow-md group"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-56 sm:h-60 object-cover"
              />
              <div className="py-6 px-4">
                <h3 className="text-lg sm:text-xl text-[#da853d] group-hover:text-white font-semibold">
                  {instructor.name}
                </h3>
                <p className="text-xs sm:text-sm mt-1 group-hover:text-white">
                  {instructor.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
