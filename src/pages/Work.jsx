import React, { useRef } from "react";
import background from "../assets/images/background_image-removebg-preview.png";
import project1 from "../assets/images/PEACE 2024_1a.jpg";
import project2 from "../assets/images/interior lounge 1a.jpg";
import project3 from "../assets/images/security unth 3a.jpg";
import project4 from "../assets/images/hos7a.jpg";
import project5 from "../assets/images/JJJ2aaaaa.jpg";
import project6 from "../assets/images/block of flats 2a.jpg";
import project7 from "../assets/images/ASIGN 1a.jpg";
import project8 from "../assets/images/BT 2a.jpg";
import cvPdf from "../assets/pdfs/cv.pdf"; // Path to your CV PDF file
import portfolioPdf from "../assets/pdfs/portfolio.pdf"; // Path to your Portfolio PDF file

const Work = () => {
  const scrollRef = useRef(null); // Create a reference to the image container

  const handleDownloadCV = () => {
    window.open(cvPdf); // Open the CV PDF in a new tab
  };

  const handleDownloadPortfolio = () => {
    window.open(portfolioPdf); // Open the Portfolio PDF in a new tab
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-200 text-black p-6 w-full h-full flex flex-col lg:flex-row lg:items-start">
      {/* Left Section: Introduction and Image */}
      <div className="p-6 w-full flex flex-col lg:w-1/2">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600 rounded-lg shadow-lg">
          <h1 className="font-extrabold text-3xl text-black">WORK</h1>
        </div>
        <p className="py-8 text-xl leading-9">
          As an architect and frontend developer, my work spans both physical
          and digital realms. Each project is a testament to my commitment to
          excellence and innovation. Explore a collection of my architectural
          and web development projects, each crafted with precision and passion.
          From innovative architectural designs that shape physical spaces to
          dynamic web solutions that redefine digital experiences, my work
          reflects a dedication to creativity, functionality, and excellence.
        </p>
        <img
          className="object-contain p-6 w-full max-w-md mx-auto"
          src={background}
          alt="Avatar"
        />

        {/* Project Showcase */}
        <div className="py-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Project Showcase
          </h2>
          <div className="relative flex items-center">
            {/* Left scroll button */}
            <button
              onClick={scrollLeft}
              className="bg-purple-600 text-white p-3 rounded-full shadow-lg z-10"
            >
              &#8592;
            </button>

            <div
              ref={scrollRef} // Attach the ref to the container
              className="flex space-x-4 overflow-x-auto scrollbar-hidden mx-4"
            >
              <img
                src={project1}
                alt="Project 1"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project2}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project3}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project4}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project5}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project6}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project7}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
              <img
                src={project8}
                alt="Project 2"
                className="w-80 h-60 object-cover rounded-lg"
              />
            </div>

            {/* Right scroll button */}
            <button
              onClick={scrollRight}
              className="bg-purple-600 text-white p-3 rounded-full shadow-lg z-10"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Frontend Development and Architectural Designs */}
      <div className="my-6 w-full flex flex-col lg:w-1/2">
        {/* Frontend Development */}
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-black">
            FRONTEND DEVELOPMENT
          </h1>
          <p className="py-4 leading-9 text-xl">
            In the ever-evolving digital landscape, a strong online presence is
            essential. As a frontend developer, I specialize in creating
            visually appealing, functional, and user-friendly websites. My focus
            is on building seamless user experiences through modern frameworks
            like React, Next.js, and TypeScript.
            <br />
            From crafting sleek, responsive designs to implementing robust
            frontend solutions, my goal is to build engaging digital experiences
            that captivate users. I ensure every project is optimized for both
            performance and aesthetics, making sure it delivers value to my
            clients and users.
          </p>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row md:flex-row lg:flex-row">
            <a
              href="https://github.com/Adanna-Nnajiofor?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md w-auto hover:text-black">
                VIEW MY WORKS
              </button>
            </a>
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-md w-auto hover:text-black"
              onClick={handleDownloadCV}
            >
              DOWNLOAD CV
            </button>
          </div>
        </div>

        {/* Architectural Designs */}
        <div className="bg-purple-200 mx-4 my-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-black">
            ARCHITECTURAL DESIGNS
          </h1>
          <p className="py-4 leading-9 text-xl">
            My architectural work is driven by a passion for creating spaces
            that inspire and endure. I design structures that blend aesthetics
            with functionality, offering solutions that are visually striking
            and sustainable. Each project is an opportunity to tell a unique
            story through thoughtful design and attention to detail.
            <br />
            Whether it's residential, commercial, or public spaces, I focus on
            crafting environments that enhance the lives of those who inhabit
            them, creating spaces that are not only beautiful but also practical
            and comfortable.
          </p>
          <div className="flex flex-col gap-4 items-center justify-center sm:flex-row md:flex-row lg:flex-row">
            <a
              href="https://wa.me/c/2348160507179"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md w-auto hover:text-black">
                VIEW MY WORKS
              </button>
            </a>
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-md w-auto hover:text-black"
              onClick={handleDownloadCV}
            >
              DOWNLOAD CV
            </button>
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-md w-auto hover:text-black"
              onClick={handleDownloadPortfolio}
            >
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
