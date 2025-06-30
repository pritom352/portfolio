import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { animate, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "TaskLinker",
    description:
      "TaskLinker is a freelance micro-task marketplace where users can post tasks and freelancers can bid to complete them. It includes secure authentication, task management features, and a smooth user experience across devices.",
    features: [
      "Secure email/password and Google login via Firebase",
      "Add, update, delete, and browse tasks with full CRUD support",
      "Protected routes using JWT and role-based access",
      "Bidding system for freelancers to apply on posted tasks",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js", "Firebase"],
    images: [
      "/tasklinker-1.png",
      "/tasklinker-2.png",
      "/tasklinker-3.png",
      "/tasklinker-4.png",
    ],
    live: "https://assignment10-22f98.web.app/",
    githubClient: "https://github.com/pritom352/Tasklinker",
    githubServer: "https://github.com/pritom352/Tasklinker-server",
    animated: true,
  },

  {
    id: 2,
    name: "VibeVenue",
    description:
      "VibeVenue is a local event discovery platform where users can explore upcoming conferences, workshops, exhibitions, and more. Users can register, log in, browse event cards, and reserve seats for events. Includes protected routes and user profile editing.",
    features: [
      "User authentication with email/password and Google via Firebase",
      "Protected routes using React Router + Firebase auth state",
      "Event card listing with dynamic JSON data",
      "Event details page with reservation form (protected)",
      "Dynamic page titles, 404 page, and responsive UI",
    ],
    tech: ["React", "Firebase Auth", "Tailwind CSS", "React Router"],
    images: [
      "/VibeVenue-1.png",
      "/VibeVenue-2.png",
      "/VibeVenue-3.png",
      "/VibeVenue-4.png",
    ],
    live: "https://reliable-caramel-061636.netlify.app/",
    githubClient: "https://github.com/pritom352/VibeVenue",
    // githubServer: "https://github.com/pritom352/VibeVenue-server",
    animated: true,
  },
  {
    id: 3,
    name: "Runova – Marathon Management System",
    description:
      "Runova is a full-stack Marathon Management platform where users can create marathons, register for events, manage their created and applied marathons through a protected dashboard. Built with Firebase Auth, JWT, MongoDB, and React Router.",
    features: [
      "Firebase-based email/password and Google login with JWT token",
      "Add, update, delete marathon events with server-side storage",
      "Apply to marathons with countdown timer, form, and status",
      "User dashboard to manage created marathons and applications",
      "Server-side search, and responsive UI",
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "React Router",
    ],
    images: [
      "/Runova-1.png",
      "/Runova-2.png",
      "/Runova-3.png",
      "/Runova-4.png",
      "/Runova-5.png",
    ],
    live: "https://assignment-11-f435a.web.app/",
    githubClient: "https://github.com/pritom352/-Marathon-Management-System",
    githubServer:
      "https://github.com/pritom352/-Marathon-Management-System-server",
    animated: true,
  },
];

const ProjectCard = ({ project, onOpen }) => (
  <div
    id="projects"
    data-aos="fade-up"
    className="bg-white shadow-md rounded-xl p-5 w-full flex flex-col lg:flex-row gap-6 mb-8"
  >
    {/* Image Section */}
    <div className="w-full lg:w-1/2 overflow-hidden rounded-lg h-[260px] relative">
      {project.animated && project.images ? (
        <motion.div
          className="flex flex-col gap-3 absolute"
          animate={{ y: ["0%", "-80%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.name}-${i}`}
              className="w-full object-cover rounded-md"
            />
          ))}
        </motion.div>
      ) : (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>

    {/* Text Section */}
    <div className="flex-1 space-y-3">
      <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
      <ul className="list-disc ml-5 text-sm text-gray-500">
        {project.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-500 border border-orange-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 flex-wrap pt-2">
        <a
          href={project.live}
          target="_blank"
          className="btn btn-sm btn-primary"
        >
          Live <FaExternalLinkAlt className="ml-1" />
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          className="btn btn-sm btn-outline"
        >
          Client <FaGithub className="ml-1" />
        </a>
        <a
          href={project.githubServer}
          target="_blank"
          className="btn btn-sm btn-outline"
        >
          Server <FaGithub className="ml-1" />
        </a>
        <button
          className="btn btn-sm bg-orange-400 text-white hover:bg-orange-500"
          onClick={() => onOpen(project)}
        >
          Details <IoMdInformationCircleOutline className="ml-1" />
        </button>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-10  px-6  bg-base-100 text-base-content mt-10 md:mt-15 lg:mt-20">
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className=" relative  inline-block"
      >
        <h2 className="text-3xl relative font-bold mb-6 lg:mb-10 text-orange-400 text-shadow-2xs  z-10">
          Projects <span className="ml-1 z-10">🚀</span>
        </h2>
        <div className="absolute top-4 left-3  opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onOpen={setSelected} />
      ))}

      {/* Modal */}
      {selected && (
        <dialog
          open
          className="modal modal-bottom sm:modal-middle"
          onClick={() => setSelected(null)}
        >
          <div className="modal-box bg-white text-black">
            <h3 className="font-bold text-lg mb-3">
              {selected.name} – Details
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Tech Stack:</span>{" "}
              {selected.tech.join(", ")}
            </p>
            <p className="text-sm text-gray-500 mb-3">{selected.description}</p>
            <p className="text-sm text-gray-700 mb-2 font-semibold">
              Challenges:
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-500">
              <li>Managing component structure</li>
              <li>Ensuring mobile responsiveness</li>
              <li>Integrating secure backend APIs</li>
            </ul>
            <p className="mt-3 font-semibold text-sm text-gray-700">
              Future Improvements:
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-500">
              <li>Dark mode toggle</li>
              <li>Admin dashboard</li>
              <li>Payment integration</li>
            </ul>
            <div className="modal-action">
              <button className="btn btn-sm" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
};

export default ProjectsSection;
