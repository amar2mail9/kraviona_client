import React from "react";

const OurProject = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A personal portfolio built using React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "Todo App",
      desc: "MERN stack todo manager with full CRUD support.",
    },
    {
      id: 3,
      title: "E-commerce Backend",
      desc: "Node.js and Express API for managing store data.",
    },
    {
      id: 4,
      title: "Blog Platform",
      desc: "Rich text blog editor with media upload features.",
    },
    {
      id: 5,
      title: "Weather App",
      desc: "React app fetching live weather updates using API.",
    },
    {
      id: 6,
      title: "Chat App",
      desc: "Socket.io based real-time chat with authentication.",
    },
    {
      id: 7,
      title: "Expense Tracker",
      desc: "Track expenses with charts and user authentication.",
    },
    {
      id: 8,
      title: "Landing Page",
      desc: "Responsive UI for marketing websites using Tailwind.",
    },
    {
      id: 9,
      title: "Image Gallery",
      desc: "React grid layout with image lightbox feature.",
    },
    {
      id: 10,
      title: "Login System",
      desc: "JWT-based authentication system using Node.js.",
    },
  ];

  return (
    <section className="w-full py-16 bg-sky-50  text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-600 mb-4">
          Our Projects
        </h2>
        <p className="text-gray-600 mb-12 text-base sm:text-lg">
          We’ve completed{" "}
          <span className="font-semibold text-sky-600">10+ mini projects</span>{" "}
          showcasing our full-stack development expertise.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 text-left border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-sky-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProject;
