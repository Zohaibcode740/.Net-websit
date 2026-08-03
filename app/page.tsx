import Link from "next/link";

const movies = [
  {
    title: "Shadow Protocol",
    genre: "Action",
    year: 2026,
    rating: "8.7",
    icon: "🕶️",
  },
  {
    title: "Lost Planet",
    genre: "Sci-Fi",
    year: 2025,
    rating: "8.3",
    icon: "🪐",
  },
  {
    title: "Midnight Case",
    genre: "Mystery",
    year: 2026,
    rating: "8.9",
    icon: "🌙",
  },
  {
    title: "The Last Signal",
    genre: "Thriller",
    year: 2025,
    rating: "8.1",
    icon: "📡",
  },
];

export default function Home() {
  return (
    <main>

      <section className="hero">
        <div className="hero-content">

          <span className="badge">
            ✦ NETTIFY ORIGINAL
          </span>

          <h1>
            Discover your next
            <br />
            <span>favorite story.</span>
          </h1>

          <p>
            Explore movies and series with ratings,
            genres and details in one modern platform.
          </p>


          <div className="actions">

            <Link
              href="/movies"
              className="btn primary"
              aria-label="Explore movies"
            >
              Explore Movies →
            </Link>


            <Link
              href="/about"
              className="btn secondary"
              aria-label="Learn about Nettify"
            >
              About Nettify
            </Link>

          </div>

        </div>
      </section>



      <section className="section">

        <div className="section-head">

          <div>
            <span className="eyebrow">
              TRENDING NOW
            </span>

            <h2>
              Popular Movies
            </h2>
          </div>


          <Link
            href="/movies"
            className="view-all"
          >
            View All →
          </Link>

        </div>



        <div className="grid">

          {movies.map((movie) => (

            <article
              className="movie-card"
              key={movie.title}
            >

              <div className="poster">

                <span className="movie-icon">
                  {movie.icon}
                </span>

                <small>
                  NETTIFY
                </small>

              </div>


              <div className="card-info">

                <h3>
                  {movie.title}
                </h3>


                <p>
                  {movie.genre} • {movie.year}
                </p>


                <strong>
                  ★ {movie.rating}
                </strong>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );
}
