// components/Navbar.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" bg-base-100   shadow-md sticky top-0 z-50">
      <div className="navbar max-w-5/6 mx-auto">
        <div className="navbar-start">
          <img src={logo} className=" max-w-[150px] border" alt="" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <Link to="home" smooth={true} duration={400}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={400} offset={-70}>
                About
              </Link>
            </li>

            <li>
              <Link to="skills" smooth={true} duration={400} offset={-70}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={400} offset={-285}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={400}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-3">
          <a
            href="/resume.pdf"
            download
            className="btn btn-sm btn-primary normal-case"
          >
            Download Resume
          </a>

          {/* Mobile Menu Toggle */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
