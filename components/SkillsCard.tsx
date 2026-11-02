
interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({
  title,
  skills,
}: SkillsCardProps) {
  return (
    <section className="bg-white border border-orange-100 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-4">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-orange-50 text-orange-700 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
