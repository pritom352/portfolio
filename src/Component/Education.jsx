import React from "react";

const Education = () => {
  return (
    <div>
      <section
        id="education"
        className="py-16 px-10 md:px-20 lg:px-35 bg-white border border-black shadow-2xl"
      >
        {/* <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="mr-2">🎓</span> Educational Qualification
        </h2> */}
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className=" relative  left-1/2 transform -translate-x-1/2  inline-block"
        >
          <h2 className=" text-2xl lg:text-3xl relative font-bold mb-8 text-orange-400 text-shadow-2xs  z-10">
            Educational Qualification <span className="md:ml-1 z-10">🎓</span>
          </h2>
          <div className="absolute top-4 left-3  opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="max-w-3xl shadow-2xl mx-auto bg-white p-6 rounded-lg  space-y-4 text-left"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-primary">
              Diploma in Engineering (Computer Science & Technology)
            </h3>
            <p className="text-gray-500">Naogaon Polytechnic Institute</p>
            <p className="text-sm text-gray-500">
              5th Semester (Running) — BTEB Board
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
