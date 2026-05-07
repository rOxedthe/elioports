import Header from "../components/Header";
import { services } from "../data";

export const metadata = {
  title: "Services | Elio Fattal",
  description:
    "Website development, SEO, SEM, AI workshop, and technical operations services by Elio Fattal."
};

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <section className="page-hero compact">
        <p className="eyebrow">Services</p>
        <h1>Practical digital support from build to growth.</h1>
        <p>
          A focused mix of web development, search marketing, AI enablement, and
          technical operations for businesses that need momentum.
        </p>
      </section>

      <section className="section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span />
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
