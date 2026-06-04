# Fix Vercel 404 (NOT_FOUND)

The Next.js app lives in the **`jubilee-site`** folder, not the repo root.

## In Vercel Dashboard

1. Open your project → **Settings** → **General**
2. Find **Root Directory**
3. Set it to: `jubilee-site`
4. Save, then go to **Deployments** → **Redeploy** (latest commit)

Framework should auto-detect **Next.js**.

## Run locally

```bash
cd jubilee-site
npm install
npm run dev
```

Open http://localhost:3000
