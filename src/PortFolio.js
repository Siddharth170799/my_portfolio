import React, { useState } from "react";

const projects = [
  {
    title: "Secure Password Generator",
    description: "Generate strong, secure passwords instantly with customizable options.",
    link: "https://password-generator-woad-six.vercel.app/",
  },
  {
    title: "Pagination Component",
    description: "Elegant pagination solution for handling large datasets seamlessly.",
    link: "https://pagination-updated.vercel.app/",
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz app with timer and scoring features to test your knowledge.",
    link: "https://roadsidecoder-quiz.vercel.app/",
  },
  {
    title: "Nested Comments System",
    description: "A dynamic commenting system supporting infinite nested replies.",
    link: "https://nested-comments-phi-cyan.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Classic Tic Tac Toe game with clean UI and smooth gameplay experience.",
    link: "https://updated-tic-tac-toe-4ghy.vercel.app/",
  },
  {
    title: "Toast Notification System",
    description: "Automatic, stylish toast notifications for enhancing UX in web apps.",
    link: "https://toast-notification-system-fawn.vercel.app/",
  },
  {
    title: "Drag & Drop Quiz Builder",
    description: "Create custom quizzes easily with an intuitive drag and drop interface.",
    link: "https://drag-and-drop-question-builder.vercel.app/",
  },
  {
    title: "Stopwatch with Reverse Timer",
    description: "Feature-rich stopwatch app supporting both forward and reverse countdowns.",
    link: "https://stop-watch-opal-tau.vercel.app/",
  },
  {
    title: "Real-Time Poll Widget",
    description: "Dynamic poll widget allowing users to vote and see live results instantly.",
    link: "https://poll-widget-ucys.vercel.app/",
  },
  {
    title: "Job Portal Platform",
    description: "A modern job portal interface to search, filter, and apply for jobs easily.",
    link: "https://job-portal-qcww.vercel.app/",
  },
  {
    title: "Reverse Unselection UI",
    description: "Unique feature allowing users to unselect items from reverse order efficiently.",
    link: "https://vercel.com/siddharths-projects-24a3e97f/colour",
  },
  {
    title: "Smart AutoComplete Search",
    description: "Intelligent autocomplete feature for fast and predictive text inputs.",
    link: "https://vercel.com/siddharths-projects-24a3e97f/autocomplete",
  },
];


function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`portfolio-container ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>Siddharth Boorgu</h1>
        <p>Full Stack Developer 🚀 | React.js Enthusiast</p>
        {/* <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button> */}
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate developer who loves building fast and scalable
          web apps. I specialize in React, Javascript, and modern frontend
          tools. Let's build something amazing together!
        </p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: boorgusiddharth@gmail.com</p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Siddharth170799"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect Here
          </a>
        </p>
      </section>

      <footer className="footer">
        <p>© 2025 Siddharth Boorgu | Built with React</p>
      </footer>
    </div>
  );
}

export default Portfolio;
