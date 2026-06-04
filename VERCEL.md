# Fix Vercel 404 (NOT_FOUND)

The Next.js app lives in the **`jubilee-site`** folder, not the repo root.

If you see **404: NOT_FOUND** after a deploy, the Root Directory was reset or left blank.

## In Vercel Dashboard (required)

1. Open your project → **Settings** → **General**
2. Find **Root Directory** → click **Edit**
3. Enter exactly: `jubilee-site` (no slash)
4. **Save**
5. **Deployments** → ⋮ on latest → **Redeploy** → check **Use existing Build Cache** off if it still fails

Framework must be **Next.js**. Build command: `npm run build` (default).

**Do not** set Root Directory to empty or `/` — that causes 404.

## Run locally

```bash
cd jubilee-site
npm install
npm run dev
```

Open http://localhost:3000
