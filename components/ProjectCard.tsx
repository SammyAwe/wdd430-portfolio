
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="p-6 border border-orange-100 border-l-4 border-l-orange-500 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>

      <p className="text-sm text-slate-700">
        <strong>Technologies:</strong> {technologies.join(", ")}
      </p>

      {link && (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-semibold hover:underline"
          >
            View Project →
          </a>
        </p>
      )}
    </article>
  );
}
