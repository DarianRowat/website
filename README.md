# darianrowat.ca (React + Tailwind + Liquid Ether)

This project migrates your current static HTML site into a **single-page React app** (Vite + Tailwind),
ready for GitHub Pages with your **custom domain**.

## Run locally

```bash
npm i
npm run dev
```

## Add the Liquid Ether background (ReactBits)

This repo includes a **stub** `src/components/LiquidEther.jsx` so it runs immediately.
To install the real component, run:

```bash
npx shadcn@latest add @react-bits/LiquidEther-JS-TW
npm i three
```

After that, the background will render automatically (see `src/components/BackgroundLiquidEther.jsx`).

## Deploy (GitHub Pages + custom domain)

- `public/CNAME` is set to `darianrowat.ca`.
- `.github/workflows/deploy.yml` builds and deploys `dist/` on every push.
- In GitHub: **Settings → Pages → Source = GitHub Actions**.
