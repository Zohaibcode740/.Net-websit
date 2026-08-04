"use client";

import { useMemo, useState } from "react";

const data = [
  ["Shadow Protocol", "Action", 2026, "8.7", "🕶️"],
  ["Lost Planet", "Sci-Fi", 2025, "8.3", "🪐"],
  ["Midnight Case", "Mystery", 2026, "8.9", "🌙"],
  ["The Last Signal", "Thriller", 2025, "8.1", "📡"],
  ["Neon City", "Sci-Fi", 2026, "8.5", "🌆"],
  ["Weekend Story", "Comedy", 2025, "7.8", "🎬"],
  ["Ocean 9", "Adventure", 2024, "8.0", "🌊"],
  ["Silent Room", "Horror", 2026, "8.2", "🕯️"],
];

export default function Movies() {
  const [q, setQ] = useState("");
  const [genre, setGenre] = useState("All");

  const genres = [
    "All",
    "Action",
    "Sci-Fi",
    "Mystery",
    "Thriller",
    "Comedy",
    "Adventure",
    "Horror",
  ];

  const filtered = useMemo(
    () =>
      data.filter(
        (m) =>
          (m[0] as string).toLowerCase().includes(q.toLowerCase()) &&
          (genre === "All" || m[1] === genre)
      ),
    [q, genre]
  );

  return (
    <section className="min-h-screen bg-[#0b1120] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <p className="uppercase tracking-[5px] text-red-500 text-sm">
            Movie Library
          </p>

          <h1 className="text-5xl font-bold mt-3">
            🎬 Discover Movies
          </h1>

          <p className="text-gray-400 mt-3">
            Search and explore your favorite movies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between mb-10">

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="🔍 Search movies..."
            className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="flex flex-wrap gap-3">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  genre === g
                    ? "bg-red-600 shadow-lg shadow-red-500/40"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((m) => (
            <article
              key={m[0] as string}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-500/20 transition duration-500"
            >
              <div className="h-64 bg-gradient-to-br from-red-500 via-purple-600 to-blue-600 flex items-center justify-center text-7xl relative">
                {m[4]}

                <span className="absolute top-4 right-4 bg-black/40 backdrop-blur px-3 py-1 rounded-full text-xs">
                  NETTIFY
                </span>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  {m[0]}
                </h2>

                <div className="flex justify-between text-gray-400 text-sm mb-4">
                  <span>{m[1]}</span>
                  <span>{m[2]}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-bold text-lg">
                    ⭐ {m[3]}
                  </span>

                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition">
                    Watch
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
