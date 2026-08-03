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
