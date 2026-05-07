import Header from "../components/Header";
import { personalProjects } from "../data";

export const metadata = {
  title: "Personal Projects | Elio Fattal",
  description:
    "Personal and GitHub projects by Elio Fattal, including SN-Interpreter, PBH Task Viewer, Pilgrims Newsletter, and emulator development."
};

export default function PersonalProjectsPage() {
  return (
    <main>
      <Header />
      <section className="page-hero compact">
        <p className="eyebrow">Personal Projects</p>
        <h1>Code experiments, tools, and production systems.</h1>
        <p>
          A GitHub-backed project page covering AI tools, full-stack systems,
          TypeScript work, and systems programming experiments.
        </p>
      </section>

      <section className="section">
        <div className="case-grid">
          {personalProjects.map((project) => (
            <article className="case-card" key={project.title}>
              <div>
                <p className="card-kicker">GitHub / Product Work</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="metric-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                Open link
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
