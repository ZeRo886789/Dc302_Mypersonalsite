export const metadata = {
  title: "Projects | Kent Jhuros Manatad",
};

const projects = [
  {
    id: 1,
    name: "Personal Portfolio Site",
    description: "A three-page Next.js site with navigation and metadata.",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "A web app for organizing daily tasks and deadlines.",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A dashboard that displays current weather and forecasts.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900">
        Projects
      </h1>
      <ul className="mt-8 space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="p-4 border border-stone-200 rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-slate-900">
              {project.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
