<<<<<<< HEAD
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
=======
# Z Volt

Movie website project for submission: **Next.js + TypeScript + Supabase + Vercel**

## 1) Installation

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

## 2) Connect Supabase

Create a new Supabase project, then open the **SQL Editor** and run the `supabase.sql` file.

Create a `.env.local` file by copying `.env.example`, then add the following:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

## 3) GitHub

```bash
git init
git add .
git commit -m "Initial Z Volt project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/z-volt.git
git push -u origin main
```

## 4) Deploy on Vercel

Import the GitHub repository into Vercel, then add the same two environment variables used in `.env.local`.

After that, deploy the project.

## Website Pages

* `/` — Home
* `/movies` — Movies
* `/movies/shadow-protocol` — Sample Movie Details
* `/about` — About
* `/contact` — Contact (with Database Form)
>>>>>>> 892127dae6dc9c54ef459b0fbc0855c22bb58ca2
