// import React from "react";
// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-10   text-base-content mt-10 md:mt-15 lg:mt-20 px-6 md:px-16 lg:px-24 "
//     >
//       {/* Header */}
//       <div
//         data-aos="fade-up-right"
//         data-aos-delay="300"
//         className="relative inline-block mb-6 md:mb-10 "
//       >
//         <h2 className="text-3xl relative font-bold text-orange-400 text-shadow-2xs z-10">
//           About Me <span className="ml-1">💻</span>
//         </h2>
//         <div className="absolute top-4 left-3 opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col xl:flex-row items-center justify-between gap-20">
//         {/* Left Text */}
//         <div
//           data-aos="fade-up-right"
//           data-aos-delay="300"
//           className="max-w-3xl text-gray-500 space-y-4 text-lg leading-relaxed flex-3/5"
//         >
//           <p>
//             Hello again! Thanks for scrolling this far! I’m{" "}
//             <span className="font-semibold text-primary">Pritom Proshad</span>,
//             a passionate{" "}
//             <span className="font-semibold text-primary">
//               Frontend Web Developer
//             </span>{" "}
//             who loves creating beautiful and functional user interfaces. I
//             started my coding journey with a structured course from Programming
//             Hero, where I learned HTML, CSS, JavaScript, React, and more. Since
//             then, I’ve built several projects that reflect both my technical
//             skills and my attention to design.
//           </p>
//           <p>
//             I enjoy working with modern frontend tools like React and Tailwind
//             CSS, and I’m always exploring new technologies to improve user
//             experiences.
//           </p>
//           <p>My goal is to be a Fullstack Developer.</p>
//           <p>
//             When I’m not coding, you might find me playing football, watching
//             anime, or learning new things on YouTube.
//           </p>
//         </div>

//         {/* Right Code Box */}
//         <div
//           data-aos="fade-up-left"
//           data-aos-delay="300"
//           className="hidden xl:flex flex-2/5 bg-white shadow-xl rounded-lg p-6 font-mono text-sm text-left"
//         >
//           <pre className="m-0">
//             <code className="text-secondary">
//               <span className="text-gray-500">1&nbsp;</span>class{" "}
//               <span className="text-green-500">Person</span> {"{"}
//               {"\n"}
//               <span className="text-gray-500">2&nbsp;</span> constructor() {"{"}
//               {"\n"}
//               <span className="text-gray-500">3&nbsp;</span> this.name ={" "}
//               <span className="text-yellow-500">"Pritom Proshad"</span>;{"\n"}
//               <span className="text-gray-500">4&nbsp;</span> this.traits = [
//               <span className="text-cyan-400">"Frontend"</span>,{" "}
//               <span className="text-cyan-400">"Clean UI"</span>];{"\n"}
//               <span className="text-gray-500">5&nbsp;</span> this.age ={" "}
//               <span className="text-blue-400">new Date()</span>.getFullYear() -
//               <span className="text-pink-400"> 2005</span>;{"\n"}
//               <span className="text-gray-500">6&nbsp;</span> {"}"}
//               {"\n"}
//               <span className="text-gray-500">7&nbsp;</span> {"}"}
//             </code>
//           </pre>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ once: true }); // একবার animate হবে, পরে আর হবে না
  }, []);
  return (
    <section
      id="about"
      className="py-10 text-base-content mt-10 md:mt-15 lg:mt-20  md:px-16 lg:px-24"
    >
      {/* Header */}
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className="relative inline-block mb-6 md:mb-10"
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
            a passionate{" "}
            <span className="font-semibold text-primary">
              Frontend Web Developer
            </span>{" "}
            who loves creating beautiful and functional user interfaces. I
            started my coding journey with a structured course from Programming
            Hero, where I learned HTML, CSS, JavaScript, React, and more. Since
            then, I’ve built several projects that reflect both my technical
            skills and my attention to design.
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

        {/* Right Code Box - Updated */}
        <motion.div
          data-aos="fade-up-left"
          data-aos-delay="300"
          className="hidden xl:flex flex-2/5 rounded-lg p-8 font-mono text-sm text-left relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark blue gradient
            boxShadow: "0 0 5px 2px rgba(59, 130, 246, 0.7)", // blue glow
            minHeight: "250px",
            minWidth: "430px",
          }}
        >
          <pre className="m-0 text-white leading-relaxed overflow-auto rounded-md">
            <code>
              <span className="text-gray-400">1&nbsp;</span>class{" "}
              <span className="text-green-400 font-semibold">Person</span> {"{"}
              {"\n"}
              <span className="text-gray-400">2&nbsp;</span> constructor() {"{"}
              {"\n"}
              <span className="text-gray-400">3&nbsp;</span> this.name ={" "}
              <span className="text-yellow-400">"Pritom Proshad"</span>;{"\n"}
              <span className="text-gray-400">4&nbsp;</span> this.traits = [
              <span className="text-cyan-400">"Frontend"</span>,{" "}
              <span className="text-cyan-400">"Clean UI"</span>];{"\n"}
              <span className="text-gray-400">5&nbsp;</span> this.age ={" "}
              <span className="text-blue-400">new Date()</span>.getFullYear() -
              <span className="text-pink-400"> 2005</span>;{"\n"}
              <span className="text-gray-400">6&nbsp;</span> this.futureGoal ={" "}
              <span className="text-yellow-400">"Fullstack Web Developer"</span>
              ;{"\n"}
              <span className="text-gray-400">7&nbsp;</span> {"}"}
              {"\n"}
              <span className="text-gray-400">8&nbsp;</span> {"}"}
            </code>
          </pre>

          {/* subtle animated blue glow overlay */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-lg opacity-20 bg-gradient-to-r from-blue-400 via-transparent to-blue-400 animate-[pulse_4s_ease-in-out_infinite]"
          ></span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
