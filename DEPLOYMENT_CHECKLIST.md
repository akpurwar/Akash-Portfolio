# Portfolio Deployment Checklist for Vercel

This file lists the steps to deploy this portfolio site to Vercel and keep it production-ready.

## 1. Prepare the project

- Confirm the app runs locally:
  - `npm install`
  - `npm run dev`
- Make sure the project builds successfully:
  - `npm run build`

## 2. Check the app structure

- Main entry files should exist:
  - `index.html`
  - `src/main.jsx`
  - `src/App.jsx`
- Ensure all images and SVGs used in the app exist in the project, especially under `public/`.
- Confirm no broken imports remain in the app.

## 3. Vercel setup

- Go to: https://vercel.com
- Sign in with your GitHub account
- Import the repository for this portfolio
- Choose the repository root as the project root
- Vercel should auto-detect Vite as the framework

## 4. Build settings

Use defaults unless Vercel asks for custom settings:

- Framework Preset: Vite
- Root Directory: `.`
- Build Command: `npm run build`
- Output Directory: `dist`

## 5. Environment variables

If the project does not require API keys or secrets, no environment variables are needed.

If you add anything later, configure them under:
- Project -> Settings -> Environment Variables

## 6. Domain and custom URL

- After deployment succeeds, Vercel provides a preview URL
- You can also add a custom domain in:
  - Project -> Settings -> Domains

## 7. Final verification

After deployment, verify:

- hero layout looks correct
- social links open properly
- email links work
- project cards render correctly
- footer top button works
- all images and logos load
- site is responsive on mobile

## 8. Common Vercel deployment issues

- Build fails because of missing imports or broken package references
- Images not loading because wrong path or missing file in `public/`
- SEO or layout issues caused by CSS not loading properly
- Vercel static hosting needs all used assets to be inside the project and referenced correctly

## 9. Useful commands

```bash
npm install
npm run build
npm run dev
```

## 10. Recommended final checks before going live

- Test preview URL in browser
- Test on desktop and mobile
- Check all CTA links
- Confirm contact email and social URLs are correct
- Confirm all project cards and logos render
- Ensure the site is visually consistent and polished

## 11. Optional next steps

- Add a custom domain
- Set up analytics
- Add Google Search Console
- Add a favicon and Open Graph metadata
- Optimize images and performance

## 12. Deployment note

If this portfolio is meant to be publicly accessible, make sure:
- the correct personal links are live
- no placeholder content remains
- the final email and contact details are correct
- all project descriptions are finalized
