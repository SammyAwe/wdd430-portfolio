import SkillsCard from "@/components/SkillsCard";
export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section className="mb-16 bg-white p-8 md:p-10 rounded-2xl border border-orange-100 shadow-sm">
        <p className="text-orange-600 font-semibold mb-3">
          GET TO KNOW ME
        </p>

        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          About Me
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-5">
          I'm Samuel Awe, a software engineering student interested
          in building useful and practical web applications.
          My journey into software development has allowed me to
          explore both frontend and backend technologies.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-5">
          I enjoy turning ideas into working applications,
          experimenting with new technologies, and learning how
          different parts of a web application work together.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed">
          My goal is to continue developing my skills, gain
          practical experience, and build software that solves
          real-world problems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          My Development Journey
        </h2>

        <p className="text-slate-600 leading-relaxed">
          Through my projects, I've been exploring JavaScript,
          React, Next.js, Node.js, Express, APIs, and database
          integration. Each project gives me an opportunity to
          apply what I've learned and improve as a developer.
        </p>
      </section>
      <section className="mt-12">
  <h2 className="text-2xl font-bold text-slate-900 mb-6">
    Technologies I'm Learning
  </h2>

  <SkillsCard
    title="My Technical Skills"
    skills={[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "GitHub",
    ]}
  />
</section>
    </main>
  );
}
