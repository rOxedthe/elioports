import Image from "next/image";
import Header from "../components/Header";
import { workshopDetails, workshopImages } from "../data";

const workshopRows = [];

for (let index = 0; index < workshopImages.length; index += 2) {
  workshopRows.push(workshopImages.slice(index, index + 2));
}

export const metadata = {
  title: "Proof Library | Elio Fattal",
  description:
    "AI workshop photos and project proof for Elio Fattal's portfolio."
};

export default function ProofPage() {
  return (
    <main>
      <Header />
      <section className="proof-hero">
        <div>
          <p className="eyebrow">Proof Library</p>
          <h1>Workshop proof.</h1>
        </div>
        <p>
          Advanced AI Workshop media from Premier International School, with
          supporting SEO and SEM delivery notes kept below the gallery.
        </p>
      </section>

      <section className="workshop-showcase">
        <div className="workshop-copy">
          <p className="eyebrow">AI Workshop</p>
          <h2>{workshopDetails[0]}</h2>
          <p>
            Delivered for {workshopDetails[1]}, covering {workshopDetails[2]}.
          </p>
          <div className="metric-row workshop-tags">
            <span>Live training</span>
            <span>Hands-on demos</span>
            <span>AI workflows</span>
          </div>
        </div>
        <div className="proof-photo-rows">
          {workshopRows.map((row, rowIndex) => (
            <div className="proof-photo-row" key={row.join("-")}>
              {row.map((src, imageIndex) => (
                <figure className="photo-card" key={src}>
                  <Image
                    src={src}
                    alt={`Advanced AI Workshop moment ${rowIndex * 2 + imageIndex + 1}`}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 36vw"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="proof-band">
        <article>
          <span>SEO</span>
          <strong>Pilgrims Books</strong>
          <p>Search structure and visibility work for pilgrimsbooks.com.</p>
        </article>
        <article>
          <span>SEM</span>
          <strong>Pilgrims Books</strong>
          <p>Paid search campaign structure and optimization support.</p>
        </article>
        <article>
          <span>SEO</span>
          <strong>Pilgrims Online Shop</strong>
          <p>E-commerce search optimization for pilgrimsonlineshop.com.</p>
        </article>
      </section>
    </main>
  );
}
