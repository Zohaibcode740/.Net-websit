import Link from "next/link";

export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const title = decodeURIComponent(id).replaceAll("-", " ");
  return <section className="section page detail">
    <div className="detail-poster">🎬<span>NETTIFY</span></div>
    <div><span className="eyebrow">MOVIE DETAIL</span><h1 className="page-title">{title || "Movie Detail"}</h1>
    <div className="rating">★ 8.7 / 10</div><p className="lead">รายละเอียดภาพยนตร์ ตัวอย่างเรื่องย่อ ประเภท และข้อมูลที่เกี่ยวข้อง</p>
    <div className="meta"><span>2026</span><span>Action / Thriller</span><span>2h 10m</span></div>
    <p>นี่คือตัวอย่างหน้ารายละเอียดสำหรับโปรเจกต์ Nettify สามารถต่อยอดด้วยฐานข้อมูลภาพยนตร์จริงได้</p>
    <Link className="btn primary" href="/movies">← กลับไปหน้าหนัง</Link></div>
  </section>
}