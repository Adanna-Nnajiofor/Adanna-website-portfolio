import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-200 text-black flex flex-col p-6 w-full h-full items-center lg:flex-row lg:items-start">
      <div className="p-6 w-full flex flex-col lg:sticky top-0 bottom-0 lg:w-1/2">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600 rounded-lg shadow-lg">
          <h1 className="font-extrabold text-3xl text-black">OUR SERVICES</h1>
        </div>
        <p className="py-8 text-xl leading-9">
          Our services are designed to bridge the gap between innovative design
          and practical implementation. With a unique blend of architectural
          expertise and software development proficiency, we offer a
          comprehensive range of services that cater to both physical and
          digital spaces. Whether you're looking to transform your living
          environment or create a compelling online presence, our team is
          dedicated to bringing your vision to life with precision, creativity,
          and a commitment to excellence.
        </p>

        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">WHY CHOOSE US</h2>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              <strong>Experience</strong>: With years of experience in both
              architecture and web development, we bring a unique perspective to
              every project.
            </li>
            <li>
              <strong>Innovation</strong>: Our innovative approach ensures that
              your projects stand out from the crowd and meet the evolving needs
              of your audience.
            </li>
            <li>
              <strong>Client-Centric</strong>: We prioritize open communication
              and collaboration to ensure that we exceed your expectations and
              deliver results that align with your vision.
            </li>
            <li>
              <strong>Quality Assurance</strong>: Our commitment to quality
              ensures that every project is executed with precision and
              attention to detail, delivering exceptional results every time.
            </li>
          </ul>
        </div>
      </div>

      <div className="my-4 p-6 w-full flex flex-col lg:mt-0 lg:w-1/2">
        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">FRONTEND DEVELOPMENT SERVICES</h2>
          <p className="pt-8 text-xl leading-9">
            Build a strong online presence with custom frontend development
            solutions tailored to meet your business goals and engage your
            audience.
          </p>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              <strong>Responsive Website Design</strong>: Modern and responsive
              website design tailored to your brand identity and user experience
              goals.
            </li>
            <li>
              <strong>Custom Web Development</strong>: Frontend development
              solutions using the latest web technologies to ensure performance,
              security, and scalability.
            </li>
            <li>
              <strong>Interactive User Interfaces</strong>: Design and implement
              engaging, dynamic user interfaces that enhance user interaction
              and experience.
            </li>
            <li>
              <strong>SPA Development</strong>: Create seamless and fast
              single-page applications (SPAs) that provide a smooth user
              experience without reloading the page.
            </li>
            <li>
              <strong>UI/UX Optimization</strong>: Improve the usability and
              visual appeal of your website or application through strategic
              UI/UX design enhancements.
            </li>
          </ul>
        </div>

        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">ARCHITECTURAL SERVICES</h2>
          <p className="pt-8 text-xl leading-9">
            Transform your living and working spaces with innovative and
            functional architectural designs that reflect your vision and
            lifestyle.
          </p>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              <strong>Custom Home Design</strong>: Tailored architectural
              designs for residential properties, reflecting your unique style
              and requirements.
            </li>
            <li>
              <strong>Commercial Spaces</strong>: Innovative designs for office
              buildings, retail spaces, and other commercial properties to
              enhance functionality and appeal.
            </li>
            <li>
              <strong>Interior Design</strong>: Comprehensive interior design
              solutions to bring your spaces to life, from concept to execution.
            </li>
            <li>
              <strong>Renovation & Restoration</strong>: Expert renovation and
              restoration services to breathe new life into existing structures
              while preserving their original charm.
            </li>
          </ul>
        </div>

        <div className="bg-purple-200 mx-4 mb-10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">ADDITIONAL SERVICES</h2>
          <p className="pt-8 text-xl leading-9">
            Beyond architecture and frontend development, we offer specialized
            services tailored to your unique needs:
          </p>
          <ul className="list-disc p-4 leading-9 text-xl">
            <li>
              <strong>Tech Consultation</strong>: Guidance on choosing the right
              technologies for your projects and business.
            </li>
            <li>
              <strong>Project Management</strong>: We oversee projects from
              concept to completion, ensuring they are delivered on time and
              within budget.
            </li>
            <li>
              <strong>UI/UX Design</strong>: Enhance user experience with
              aesthetically pleasing and functional user interface designs.
            </li>
            <li>
              <strong>Branding and Identity</strong>: Develop a strong brand
              identity with professional logo and visual design services.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
