# NLP Knowledge Artifact Repository

Static site for **CCE Activity I – Knowledge Artifact Repository**
(Course: CMCOR1PE301.1, Natural Language Processing), Week 1.

Prepared by **Jayraj Sanas** & **Shivam Sankpal**, TY B.Tech Computer Engineering,
Shah & Anchor Kutchhi Engineering College (SAKEC), Mumbai.

## Structure
```
index.html                    Home page — intro, objectives, nav cards, Week 1 topics
pages/concepts.html           Section A – Concept Cards (4 assigned concepts with focused illustrations)
pages/comparisons.html        Section B – Comparative Analysis (3 comparisons)
pages/workflows.html          Section C – Workflow Diagrams (3 SVG pipelines)
pages/applications.html       Section D – Real-World Applications (5)
pages/research.html           Section E – Research & Industry Insights
pages/sustainability.html     Sustainability & Societal Impact essay
pages/contribution.html       Contribution Matrix + Reflection Notes
pages/references.html         References (NLTK, spaCy, Stanford NLP, Hugging Face, Google Research, Jurafsky & Martin, OpenAI)
pages/ai-declaration.html     AI Usage Declaration
css/style.css                 Shared stylesheet (light + dark theme, animations)
js/nav.js                     Shared header/footer injector + dark/light mode toggle
```

## Features
- Dark / light mode toggle (top-right of the navigation bar, persisted via `localStorage`).
- Smooth hover and entrance animations on all cards and diagrams.
- SVG workflow diagrams for all three Section C pipelines.
- Category icons, mini flow-diagrams, and one-line summary boxes on every concept card.
- Fully responsive layout (mobile, tablet, desktop).

## Deploy to GitHub Pages
1. Push everything in this folder to the `main` branch of a GitHub repo
   (`index.html` must sit at the repo root, or in `/docs` — either works).
2. On GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Choose branch `main`, folder `/ (root)`, then Save.
4. Your site will be live at `https://<username>.github.io/<repo-name>/` within a
   couple of minutes.

## Before you submit
- [ ] Export this repo as a PDF/ZIP for submission alongside the live link.
- [ ] Double-check the Contribution Matrix in `pages/contribution.html` still matches
      your actual split of work.
- [ ] Review the AI Usage Declaration (`pages/ai-declaration.html`) for accuracy.
