import Link from "next/link";

const movies = [
  { title: "Shadow Protocol", genre: "Action", year: 2026, rating: "8.7", icon: "🕶️" },
  { title: "Lost Planet", genre: "Sci-Fi", year: 2025, rating: "8.3", icon: "🪐" },
  { title: "Midnight Case", genre: "Mystery", year: 2026, rating: "8.9", icon: "🌙" },
  { title: "The Last Signal", genre: "Thriller", year: 2025, rating: "8.1", icon: "📡" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">NETTIFY ORIGINAL</span>
          <h1>Discover your next<br /><span>favorite story.</span></h1>
          <p>ค้นพบภาพยนตร์และซีรีส์ที่น่าสนใจ พร้อมข้อมูลที่ค้นหาได้ง่ายในที่เดียว</p>
          <div className="actions">
            <Link href="/movies" className="btn primary">สำรวจหนัง →</Link>
            <Link href="/about" className="btn secondary">เกี่ยวกับ Nettify</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><span className="eyebrow">TRENDING NOW</span><h2>กำลังเป็นที่นิยม</h2></div>
          <Link href="/movies" className="view-all">ดูทั้งหมด →</Link>
        </div>
        <div className="grid">
          {movies.map((m) => (
            <article className="movie-card" key={m.title}>
              <div className="poster">{m.icon}<span>NETTIFY</span></div>
              <div className="card-info"><h3>{m.title}</h3><p>{m.genre} • {m.year}</p><strong>★ {m.rating}</strong></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}