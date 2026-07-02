# Sara Ringkow Petersen — Digital Resume

A single-page digital resume/CV built with Astro and Tailwind, styled to match [my portfolio](https://github.com/sararpetersen)'s design system.

## Project Structure

```text
/
├── public/           # fonts, favicon, illustrations, project screenshots, CVs
├── src/
│   ├── components/    # Header, Footer, Button, ScrollToTop
│   ├── layouts/        # MainLayout
│   ├── pages/           # index.astro (the whole site)
│   └── styles/           # tailwind.css, global.css
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Installs dependencies                        |
| `npm run dev`       | Starts local dev server at `localhost:4321`  |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally, before deploying   |
