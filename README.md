# Nettify

โปรเจกต์เว็บไซต์ภาพยนตร์สำหรับส่งงาน: Next.js + TypeScript + Supabase + Vercel

## 1) ติดตั้ง
npm install
npm run dev

เปิด http://localhost:3000

## 2) เชื่อม Supabase
สร้างโปรเจกต์ Supabase แล้วเปิด SQL Editor จากนั้นรันไฟล์ `supabase.sql`

สร้างไฟล์ `.env.local` จาก `.env.example` แล้วใส่:
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

## 3) GitHub
git init
git add .
git commit -m "Initial Nettify project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nettify.git
git push -u origin main

## 4) Vercel
นำ GitHub repository เข้า Vercel แล้วเพิ่ม Environment Variables สองตัวเดียวกับ `.env.local`
จากนั้น Deploy

## หน้าเว็บ
/ Home
/movies Movies
/movies/shadow-protocol Movie Detail ตัวอย่าง
/about About
/contact Contact + Database Form
