import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title:
        "My Journey in Frontend Development at AltSchool Africa / Enugu SME",
      date: "May 29, 2024",
      excerpt:
        "Follow my journey into the world of frontend development as I share insights, challenges, and lessons learned during my time at AltSchool Africa / Enugu SME.",
      slug: "my-journey-in-frontend-development-at-altschool-africa-enugu-sme",
      link: "https://adanna-nnajiofor.hashnode.dev/my-journey-in-frontend-development-at-altschool-africa-enugu-sme",
    },
    {
      title: "Journey from Architect to Frontend Developer",
      date: "July 10, 2024",
      excerpt:
        "From designing physical spaces to crafting digital experiences, my journey from Architect to Frontend Developer has been a transformation fueled by curiosity and a passion for creating meaningful interfaces.",
      slug: "From Architect to Frontend: My Tech Transition",
      link: "https://medium.com/@adanna.nnajiofor/journey-from-architect-to-frontend-developer-ed97f7bb8401",
    },
  ];

  return (
    <section
      id="blog"
      className="bg-gray-100 py-12 text-black flex flex-col lg:flex-row items-center lg:items-start p-6 w-full h-full"
    >
      {/* Blog Intro */}
      <div className="lg:w-1/3 w-full flex flex-col p-6 mb-8 lg:mb-0">
        <div className="py-4 text-center border-solid border-2 bg-gray-300 border-purple-600 mb-6 rounded-md">
          <h1 className="font-extrabold text-3xl lg:text-4xl">BLOG</h1>
        </div>
        <p className="py-6 text-xl leading-9 font-semibold">
          Welcome to my blog! Here, I share insights, tips, and stories about
          architecture, frontend development, and design trends.
        </p>
        <p className="text-lg leading-8 mb-6">
          Whether you’re a fellow developer, a design enthusiast, or just
          curious about how architecture and technology intertwine, this blog
          has something for you. Join me on my journey of learning, building,
          and sharing knowledge.
        </p>
        <p className="font-semibold text-xl">Happy reading!</p>
      </div>

      {/* Blog Posts */}
      <div className="lg:w-2/3 w-full max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-purple-200 p-6 rounded-lg shadow-md mb-6 hover:bg-purple-300 transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                {post.title}
              </a>
            </h3>
            <p className="text-gray-600 text-sm mb-4">{post.date}</p>
            <p className="text-lg mb-4">{post.excerpt}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-semibold"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
