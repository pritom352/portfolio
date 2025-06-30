import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 text-5xl" />,
  },
  { name: "GitHub", icon: <FaGithub className="text-black text-5xl" /> },
];

const SkillCardSection = () => {
  return (
    <section
      id="skills"
      className="py-16 px-10 md:px-20 lg:px-35  bg-white text-black"
    >
      {/* <h2 className="text-3xl font-bold mb-10 text-center">🧰 My Skills</h2> */}
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className=" relative  inline-block"
      >
        <h2 className="text-3xl relative font-bold mb-10 text-orange-400 text-shadow-2xs  z-10">
          My Skills <span className="ml-1 z-10">🧰</span>
        </h2>
        <div className="absolute top-4 left-3  opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            data-aos="fade-down"
            data-aos-delay={`${100 * index}`}
            key={index}
            className="bg-white rounded-xl p-5 flex flex-col items-center justify-center shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:rotate-[-4deg]"
          >
            {skill.icon}
            <p className="mt-3 font-medium text-sm sm:text-base text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCardSection;
