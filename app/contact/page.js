import Header from "../components/Header";

export const metadata = {
  title: "Contact | Elio Fattal",
  description: "Contact Elio Fattal for websites, SEO, SEM, AI workshops, and technical projects."
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="page-hero compact">
        <p className="eyebrow">Contact</p>
        <h1>Bring the goal. I will help shape the next step.</h1>
        <p>
          For website builds, SEO, SEM, AI workshops, or technical project
          support, send the current context and the outcome you want.
        </p>
      </section>

      <section className="contact-section page-contact">
        <div>
          <p className="eyebrow">Start Here</p>
          <h2>Let us build something useful and sharp.</h2>
          <p>
            Include your website, business goal, timeline, and any screenshots
            or references that explain what needs to improve.
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:eliofattal03@gmail.com">eliofattal03@gmail.com</a>
          <a href="tel:+9779803922947">+977 9803922947</a>
          <a href="https://github.com/rOxedthe" target="_blank" rel="noreferrer">
            github.com/rOxedthe
          </a>
        </div>
      </section>
    </main>
  );
}
