import Aos from "aos";
import React, { useEffect } from "react";
import { MdAddIcCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const ContactMe = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <div id="contact" className=" mt-10 md:mt-15 lg:mt-20 py-10 ">
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className=" relative   inline-block"
      >
        <h2 className="text-xl md:text-3xl relative font-bold mb-10 text-orange-400 text-shadow-2xs  z-10">
          Contact <span className="ml-1 z-10">🚀</span>
        </h2>
        <div className="absolute top-4 left-3  opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-6 sm:px-10 md:px-20 lg:px-28  gap-10  ">
        {/* Left: Contact Info */}

        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold text-primary mb-8">
            Get in touch now!
          </h1>

          {/* Phone */}
          <div className="flex gap-4 items-center mb-6">
            <div className="bg-orange-100 rounded-2xl p-3">
              <MdAddIcCall className="text-orange-500" size={20} />
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <p className="md:text-xl font-bold">+8801758665178</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="bg-orange-100 rounded-2xl p-3">
              <TfiEmail className="text-orange-500" size={20} />
            </div>
            <div>
              <p className="text-sm">Email</p>
              <p className="md:text-xl font-bold">pritomproshad@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-5">
          <input
            required
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full  border border-orange-200"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-40  border border-orange-200"
          ></textarea>
          <button className="btn bg-orange-400 text-white hover:bg-orange-500 w-full">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
