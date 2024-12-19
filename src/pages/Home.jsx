import React from "react";
import { Link } from "react-router-dom";
import web from "../assets/images/woman-codes.jpg"; // Adjust if needed

const Home = () => {
  return (
    <section className="bg-purple-100 p-6 text-black flex flex-col w-full h-full items-center lg:items-start">
      {/* Hero Section */}
      <div className="w-full h-full bg-gray-100 p-8 flex flex-col lg:flex-row shadow-lg lg:justify-between lg:items-center">
        <div className="p-4 lg:w-1/2">
          <h2 className="text-2xl text-purple-600">HELLO THERE!</h2>
          <h1 className="text-4xl py-6 font-extrabold">
            I'M <span className="text-purple-600">ADANNA</span>
          </h1>
          <div className="bg-purple-600 text-2xl text-white text-center p-4 mt-4 lg:mt-8">
            <h6>ARCHITECT | FRONTEND DEVELOPER</h6>
          </div>
          <p className="pt-3 pb-3 mt-8 leading-9 text-xl">
            Welcome to the intersection of architecture and technology. As an
            architect turned frontend developer, I combine my creative vision
            with my technical skills to craft beautiful and functional spaces,
            both physical and digital. Whether designing real-world structures
            or immersive web experiences, I aim to bring your ideas to life with
            precision and passion. Let's collaborate and make something
            incredible!
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md mt-10 w-44 hover:text-black transition-all duration-300 ease-in-out">
              LET'S TALK
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 m-8 lg:items-end">
          <img
            className="object-contain"
            src={web}
            alt="Adanna - Architect and Frontend Developer"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row mt-12">
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 shadow-lg lg:mr-3">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            With a background in architecture and frontend development, I am
            passionate about creating impactful solutions in both the digital
            and physical realms. I have transitioned from designing spaces to
            building digital experiences, using my creativity and
            problem-solving skills to craft responsive, user-centric websites
            and applications.
          </p>
          <Link to="/about">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 mt-12 shadow-lg lg:ml-3">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-lg mb-4">
            Explore the wide range of services I offer, including architectural
            design, UI/UX design, and frontend development. Each service is
            tailored to your specific needs, with the goal of creating
            beautiful, functional, and user-friendly solutions.
          </p>
          <Link to="/services">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Portfolio Preview Section */}
      <div className="flex flex-col lg:flex-row mt-12">
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 shadow-lg lg:mr-3">
          <h2 className="text-3xl font-bold mb-4">My Work</h2>
          <p className="text-lg mb-4">
            Take a look at some of my recent projects. These showcase my
            expertise in both architecture and frontend development, combining
            aesthetics with functionality to deliver memorable experiences.
          </p>
          <Link to="/work">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black transition-all duration-300">
              View Portfolio
            </button>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-8 shadow-lg lg:ml-3 mt-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            I look forward to connecting with you. Whether you have a project in
            mind, need guidance on your web development journey, or just want to
            chat, feel free to reach out.
          </p>
          <Link to="/contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:text-black transition-all duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="w-full flex justify-center mt-12 space-x-6">
        <a
          href="https://github.com/adanna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/adanna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="mailto:adanna.nnajiofor@gmail.com"
          className="text-purple-600 hover:text-purple-800 transition-colors duration-300"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Home;
