import React from "react";
const About = () => {
  return (
    <section
      id="about"
      className="py-10  bg-white text-base-content mt-10 md:mt-15 lg:mt-20 px-6 md:px-16 lg:px-24 shadow-2xs"
    >
      {/* Header */}
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className="relative inline-block mb-6 md:mb-10 "
      >
        <h2 className="text-3xl relative font-bold text-orange-400 text-shadow-2xs z-10">
          About Me <span className="ml-1">💻</span>
        </h2>
        <div className="absolute top-4 left-3 opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-20">
        {/* Left Text */}
        <div
          data-aos="fade-up-right"
          data-aos-delay="300"
          className="max-w-3xl text-gray-500 space-y-4 text-lg leading-relaxed flex-3/5"
        >
          <p>
            Hello again! Thanks for scrolling this far! I’m{" "}
            <span className="font-semibold text-primary">Pritom Proshad</span>,
            a passionate Frontend Web Developer who loves creating beautiful and
            functional user interfaces. I started my coding journey with a
            structured course from Programming Hero, where I learned HTML, CSS,
            JavaScript, React, and more. Since then, I’ve built several projects
            that reflect both my technical skills and my attention to design.
          </p>
          <p>
            I enjoy working with modern frontend tools like React and Tailwind
            CSS, and I’m always exploring new technologies to improve user
            experiences.
          </p>
          <p>My goal is to be a Fullstack Developer.</p>
          <p>
            When I’m not coding, you might find me playing football, watching
            anime, or learning new things on YouTube.
          </p>
        </div>

        {/* Right Code Box */}
        <div
          data-aos="fade-up-left"
          data-aos-delay="300"
          className="hidden xl:flex flex-2/5 bg-white shadow-xl rounded-lg p-6 font-mono text-sm text-left"
        >
          <pre className="m-0">
            <code className="text-secondary">
              <span className="text-gray-500">1&nbsp;</span>class{" "}
              <span className="text-green-500">Person</span> {"{"}
              {"\n"}
              <span className="text-gray-500">2&nbsp;</span> constructor() {"{"}
              {"\n"}
              <span className="text-gray-500">3&nbsp;</span> this.name ={" "}
              <span className="text-yellow-500">"Pritom Proshad"</span>;{"\n"}
              <span className="text-gray-500">4&nbsp;</span> this.traits = [
              <span className="text-cyan-400">"Frontend"</span>,{" "}
              <span className="text-cyan-400">"Clean UI"</span>];{"\n"}
              <span className="text-gray-500">5&nbsp;</span> this.age ={" "}
              <span className="text-blue-400">new Date()</span>.getFullYear() -
              <span className="text-pink-400"> 2005</span>;{"\n"}
              <span className="text-gray-500">6&nbsp;</span> {"}"}
              {"\n"}
              <span className="text-gray-500">7&nbsp;</span> {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default About;
