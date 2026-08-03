"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
 const [form,setForm]=useState({name:"",email:"",subject:"",message:""}); const [status,setStatus]=useState("");
 async function submit(e:React.FormEvent){e.preventDefault();setStatus("กำลังส่งข้อมูล...");
   if(!supabase){setStatus("ยังไม่ได้เชื่อม Supabase — กรอกค่าใน .env.local ก่อน");return;}
   const {error}=await supabase.from("contacts").insert(form);
   setStatus(error ? "เกิดข้อผิดพลาด: "+error.message : "ส่งข้อความสำเร็จ ขอบคุณที่ติดต่อ Nettify!");
   if(!error)setForm({name:"",email:"",subject:"",message:""});
 }
 return <section className="section page narrow"><span className="eyebrow">CONTACT</span><h1 className="page-title">ติดต่อเรา</h1><p className="lead">ส่งข้อความหรือข่าวสารถึงทีม Nettify ข้อมูลจะถูกบันทึกลงฐานข้อมูลเมื่อเชื่อม Supabase แล้ว</p>
 <form className="form" onSubmit={submit}><label>ชื่อ<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label><label>Email<input type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></label><label>หัวข้อ<input required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/></label><label>ข้อความ<textarea required rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></label><button className="btn primary" type="submit">ส่งข้อความ →</button>{status&&<p className="status">{status}</p>}</form></section>
}