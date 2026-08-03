"use client";
import { useMemo, useState } from "react";

const data = [
  ["Shadow Protocol","Action",2026,"8.7","🕶️"],["Lost Planet","Sci-Fi",2025,"8.3","🪐"],
  ["Midnight Case","Mystery",2026,"8.9","🌙"],["The Last Signal","Thriller",2025,"8.1","📡"],
  ["Neon City","Sci-Fi",2026,"8.5","🌆"],["Weekend Story","Comedy",2025,"7.8","🎬"],
  ["Ocean 9","Adventure",2024,"8.0","🌊"],["Silent Room","Horror",2026,"8.2","🕯️"]
];

export default function Movies() {
  const [q,setQ]=useState(""); const [genre,setGenre]=useState("All");
  const genres=["All","Action","Sci-Fi","Mystery","Thriller","Comedy","Adventure","Horror"];
  const filtered=useMemo(()=>data.filter(m=>(m[0] as string).toLowerCase().includes(q.toLowerCase())&&(genre==="All"||m[1]===genre)),[q,genre]);
  return <section className="section page">
    <span className="eyebrow">MOVIE LIBRARY</span><h1 className="page-title">สำรวจภาพยนตร์</h1>
    <input className="search" placeholder="ค้นหาชื่อภาพยนตร์..." value={q} onChange={e=>setQ(e.target.value)} />
    <div className="chips">{genres.map(g=><button key={g} className={genre===g?"chip active":"chip"} onClick={()=>setGenre(g)}>{g}</button>)}</div>
    <div className="grid">{filtered.map(m=><article className="movie-card" key={m[0] as string}><div className="poster">{m[4]}<span>NETTIFY</span></div><div className="card-info"><h3>{m[0]}</h3><p>{m[1]} • {m[2]}</p><strong>★ {m[3]}</strong></div></article>)}</div>
  </section>
}