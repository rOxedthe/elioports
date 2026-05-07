import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import { clientProjects, personalProjects, services, workshopImages } from "./data";

const strengths = [
  ["IT Leadership", "Reliable operations and technical decisions"],
  ["Web Projects", "Client websites ready for review and launch"],
  ["Search Growth", "SEO and SEM work built around intent"],
  ["AI Enablement", "Workshops that turn tools into workflows"]
];

const process = [
  {
    label: "Discover",
    text: "Understand the client goal, audience, offer, and current digital presence."
  },
  {
    label: "Build",
    text: "Create the website, campaign, automation, or training system with a clean execution plan."
  },
  {
    label: "Improve",
    text: "Measure what matters, refine weak points, and make the system easier to use."
  }
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">IT Officer / Web / SEO / SEM / AI</p>
          <h1>Client-ready digital systems with a future-facing edge.</h1>
          <p className="hero-text">
            I am Elio, a developer and cyber security student helping businesses
            look sharper online, improve search performance, and adopt practical
            AI workflows with confidence.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/work">
              View Work
            </Link>
            <Link className="button secondary" href="/contact">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-label="Advanced AI Workshop at Premier International School">
          <Image
            src={workshopImages[0]}
            alt="Advanced AI Workshop session"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 48vw"
          />
          <div className="signal-card signal-card-one">
            <span>ADVANCED AI WORKSHOP</span>
            <strong>Premier International School</strong>
          </div>
          <div className="signal-card signal-card-two">
            <span>LIVE SESSION</span>
            <strong>Practical AI workflows and training</strong>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Professional strengths">
        {strengths.map(([title, text]) => (
          <div key={title}>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2>Client work that connects websites, search, and business goals.</h2>
        </div>
        <div className="project-grid">
          {clientProjects.slice(0, 3).map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 31vw"
                  className={project.imageMode === "logo" ? "project-image logo-image" : "project-image"}
                />
                <span>{project.category}</span>
              </div>
              <div className="project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Link className="text-link" href="/work">
                  Read case notes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-copy">
          <p className="eyebrow">Proof Library</p>
          <h2>AI workshop proof from Premier International School.</h2>
          <p>
            A focused look at the Advanced AI Workshop, with session photos and
            delivery proof kept separate from the web, SEO, and SEM case work.
          </p>
          <Link className="button secondary" href="/proof">
            View Proof
          </Link>
        </div>
        <div className="gallery-grid">
          {workshopImages.slice(1, 7).map((src, index) => (
            <div className="gallery-photo" key={src}>
              <Image
                src={src}
                alt={`Advanced AI Workshop preview ${index + 1}`}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 22vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">How I Help</p>
          <h2>Technical support, digital presence, and growth execution.</h2>
          <p>
            A practical mix of development, campaign thinking, IT judgment, and
            AI training for teams that need clarity and momentum.
          </p>
          <Link className="button secondary" href="/services">
            View Services
          </Link>
        </div>
        <div className="service-panel">
          {services.map((service) => (
            <div className="service-item" key={service.title}>
              <span />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Personal Projects</p>
          <h2>GitHub work, internal tools, and systems experiments.</h2>
        </div>
        <div className="mini-grid">
          {personalProjects.slice(0, 3).map((project) => (
            <article className="mini-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
        <Link className="button secondary spaced-button" href="/personal-projects">
          View Personal Projects
        </Link>
      </section>

      <section className="process">
        {process.map((item, index) => (
          <div className="process-step" key={item.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.label}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something sharp for your business.</h2>
          <p>
            Share your current website, the result you want, and any proof or
            reference material. I will help turn it into a clear next step.
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:eliofattal03@gmail.com">eliofattal03@gmail.com</a>
          <a href="tel:+9779803922947">+977 9803922947</a>
          <Link href="/contact">Open contact page</Link>
        </div>
      </section>
    </main>
  );
}
