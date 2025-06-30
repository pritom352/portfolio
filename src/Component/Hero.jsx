import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import myImg from "../assets/IMG_0117.jpg";
import { motion } from "framer-motion";

// components/Hero.jsx
const Hero = () => {
  return (
    <section
      id="home"
      className="md:min-h-screen  flex flex-col-reverse lg:flex-row items-center justify-between  mx-auto  py-16  "
    >
      {/* Left: Text Content */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center  lg:text-left space-y-4    "
      >
        <div className="relative inline-block pb-2">
          <h1 className="text-4xl relative  lg:text-5xl font-bold text-shadow-lg  z-10">
            Hello! I'm <span className="text-primary">Pritom Proshad</span> 👋
          </h1>
          <div className=" hidden md:block absolute left-4 top-5 opacity-60 w-full h-[40px] bg-orange-100 rounded-md shadow-md z-0"></div>
        </div>

        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-600">
          Frontend Web Developer
        </h2>
        <p className="max-w-md text-gray-500">
          I build modern, responsive, and interactive user interfaces using
          React.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mt-4">
          <a
            href="https://github.com/pritom352"
            target="_blank"
            className="text-2xl p-3 bg-orange-400 rounded-full hover:bg-blue-500 hover:text-white hover:scale-130 transition hover:-translate-y-2 duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pritom-proshad-254330362/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-3 bg-orange-400 rounded-full hover:bg-blue-500 hover:text-white hover:scale-130 transitiontransition transform hover:-translate-y-2 duration-200"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://facebook.com/yourusernamehttps://x.com/PProshad396277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl p-3 shadow-2xl bg-orange-400 rounded-full hover:bg-blue-500 hover:text-white transition  hover:scale-130 hover:-translate-y-2 duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      {/* 👇 Social Icons Section */}

      <motion.div
        animate={{ y: [-20, 20] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="relative w-60 h-60 lg:w-90 lg:h-90 mb-10 lg:mb-0"
      >
        <div className="w-full h-full bg-orange-400 rounded-full"></div>
        <img
          src={myImg}
          alt="Pritom Proshad"
          className="absolute top-1 left-1/2 transform -translate-x-1/2 w-58 h-58 lg:w-88 lg:h-88 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
