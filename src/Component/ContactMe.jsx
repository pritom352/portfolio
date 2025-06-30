import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const ContactMe = () => {
  return (
    <div>
      <div
        data-aos="fade-up-right"
        data-aos-delay="300"
        className=" relative  inline-block"
      >
        <h2 className="text-3xl relative font-bold mb-10 text-orange-400 text-shadow-2xs  z-10">
          Contact <span className="ml-1 z-10">🚀</span>
        </h2>
        <div className="absolute top-4 left-3  opacity-60 w-full h-[30px] bg-orange-100 rounded-md shadow-md z-0"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center px-6 sm:px-10 md:px-20 lg:px-28 py-16 gap-10 bg-white text-black">
        {/* Left: Contact Info */}

        <div data-aos="fade-right" className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-8">Get in touch now!</h1>

          {/* Phone */}
          <div className="flex gap-4 items-center mb-6">
            <div className="bg-orange-100 rounded-2xl p-3">
              <MdAddIcCall className="text-orange-500" size={30} />
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <p className="text-xl font-bold">+8801758665178</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-center">
            <div className="bg-orange-100 rounded-2xl p-3">
              <TfiEmail className="text-orange-500" size={30} />
            </div>
            <div>
              <p className="text-sm">Email</p>
              <p className="text-xl font-bold">pritomproshad@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-5">
          <input
            required
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full bg-white border border-orange-200"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full h-40 bg-white border border-orange-200"
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
