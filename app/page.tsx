
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Trivia Game",
    description:
      "An interactive trivia application that retrieves questions from the Open Trivia Database API. It allows users to answer questions, track their progress, and restart the game.",
    technologies: ["JavaScript", "HTML", "CSS", "OpenTDB API"],
    link: "",
  },
  {
    title: "Pet Pregnancy Tracker",
    description:
      "A web application designed to help dog and cat owners monitor pregnancy progress, track weight changes, manage whelping checklists, and record puppy or kitten counts.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
  {
    title: "CSE 341 Books API",
    description:
      "A REST API that allows users to retrieve book information from a MongoDB database. It includes endpoints for accessing all books and individual book records.",
    technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
    link: "https://github.com/SammyAwe/cse341-books",
  },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="text-center py-16">
        <p className="text-orange-600 font-semibold mb-4">
          SOFTWARE ENGINEERING STUDENT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Hi, I'm Samuel Awe.
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          I'm a software engineering student passionate about
          building web applications that solve everyday problems.
          I enjoy working with modern technologies and continuously
          improving my development skills.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}

