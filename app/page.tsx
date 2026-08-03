import Link from "next/link";

const movies = [
  { title: "Shadow Protocol", genre: "Action", year: 2026, rating: "8.7", icon: "🕶️" },
  { title: "Lost Planet", genre: "Sci-Fi", year: 2025, rating: "8.3", icon: "🪐" },
  { title: "Midnight Case", genre: "Mystery", year: 2026, rating: "8.9", icon: "🌙" },
  { title: "The Last Signal", genre: "Thriller", year: 2025, rating: "8.1", icon: "📡" },
];

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-modern">
        <div className="hero-overlay" />

        <div className="hero-content-modern">
          <span className="badge-modern">
            ✦ NETTIFY ORIGINAL
          </span>

          <h1>
            Discover your next
            <br />
            <span>favorite story.</span>
          </h1>

          <p>
            Explore movies and series with stunning visuals,
            ratings and details — all in one premium experience.
          </p>

          <div className="actions">
            <Link href="/movies" className="btn-modern primary">
              Explore Movies →
            </Link>

            <Link href="/about" className="btn-modern secondary">
              About Nettify
            </Link>
          </div>
        </div>
      </section>


      {/* TRENDING */}
      <section className="movies-section">

        <div className="section-header">

          <div>
            <span className="eyebrow">
              TRENDING NOW
            </span>

            <h2>
              Popular Right Now
            </h2>
          </div>


          <Link href="/movies" className="view-all">
            View All →
          </Link>

        </div>


        <div className="movie-grid">

          {movies.map((movie) => (

            <article
              className="modern-card"
              key={movie.title}
            >

              <div className="poster-modern">

                <div className="poster-icon">
                  {movie.icon}
                </div>

                <span>
                  NETTIFY
                </span>

              </div>


              <div className="movie-info">

                <h3>
                  {movie.title}
                </h3>

                <p>
                  {movie.genre} • {movie.year}
                </p>


                <div className="rating">
                  ★ {movie.rating}
                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
