import React from "react";
import avatar from "../assets/images/FB_IMG_16575461399887317-removebg-preview.png";

const About = () => {
  return (
    <section className="bg-gray-200 text-black p-6 flex flex-col lg:flex-row lg:items-start w-full h-full">
      {/* Text Section */}
      <div className="m-6 w-auto mt-6 flex flex-col lg:mt-10 lg:w-1/2">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600 rounded-lg shadow-lg">
          <h1 className="font-extrabold text-3xl text-black">ABOUT ME</h1>
        </div>

        <h2 className="py-6 px-4 text-2xl font-semibold">
          I'm{" "}
          <span className="text-purple-600 font-bold">Adanna Nnajiofor</span>,
          Architect & Frontend Developer
        </h2>
        <p className="leading-9 text-lg px-4 mb-6">
          Welcome to my corner of creativity! I’m Adanna, an architect and
          frontend developer who is passionate about both designing physical
          spaces and creating dynamic digital experiences. With my background in
          architecture, I approach every project with a blend of creativity,
          attention to detail, and precision.
        </p>
        <p className="leading-9 text-lg px-4 mb-6">
          As a frontend developer, I’m equally passionate about building user
          interfaces that are not only visually stunning but also highly
          functional. My work focuses on developing websites and applications
          that engage users and provide seamless, intuitive experiences. From
          writing clean, efficient code to ensuring responsive and accessible
          designs, I strive to craft digital products that make a positive
          impact.
        </p>
        <p className="leading-9 text-lg px-4 mb-6">
          Combining my knowledge of architecture with my skills as a frontend
          developer, I bring a unique perspective to my work. I’m committed to
          creating designs and experiences that are not only aesthetically
          pleasing but also user-centric and effective.
        </p>
        <p className="leading-9 text-lg px-4">
          Let’s connect and collaborate on your next project. Together, we can
          turn your ideas into reality, whether it’s a physical structure or a
          beautiful, functional website or app.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex flex-col m-6 w-auto h-full lg:w-1/2 lg:m-0 rounded-xl shadow-md bg-purple-200">
        <img
          className="w-full h-auto object-cover rounded-xl p-6"
          src={avatar}
          alt="Adanna Nnajiofor"
        />
      </div>
    </section>
  );
};

export default About;
