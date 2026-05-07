import Image from "next/image";
import Header from "../components/Header";
import { clientProjects } from "../data";

export const metadata = {
  title: "Client Work | Elio Fattal",
  description:
    "Client website, SEO, and SEM projects by Elio Fattal, including Globalingo and Pilgrims Books."
};

export default function WorkPage() {
  return (
    <main>
      <Header />
      <section className="page-hero compact">
        <p className="eyebrow">Client Work</p>
        <h1>Websites and growth systems built for real clients.</h1>
        <p>
          Selected work across web development, SEO, and SEM, with a focus on
          clear presentation, search visibility, and business outcomes.
        </p>
      </section>

      <section className="section">
        <div className="case-grid">
          {clientProjects.map((project) => (
            <article className="case-card" key={project.title}>
              <div className="case-preview">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 36vw"
                  className={project.imageMode === "logo" ? "project-image logo-image" : "project-image"}
                />
              </div>
              <div>
                <p className="card-kicker">{project.category}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="metric-row">
                {project.highlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                Visit project
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
