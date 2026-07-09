(function () {
  const savedTheme = localStorage.getItem("nlp-repo-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) document.documentElement.classList.add("dark");

  const pages = [
    ["index", "Home", "index.html"], ["concepts", "Concept Cards", "pages/concepts.html"],
    ["comparisons", "Comparisons", "pages/comparisons.html"], ["workflows", "Workflow", "pages/workflows.html"],
    ["applications", "Applications", "pages/applications.html"], ["research", "Research", "pages/research.html"],
    ["sustainability", "Sustainability", "pages/sustainability.html"], ["contribution", "Contribution", "pages/contribution.html"], ["references", "References", "pages/references.html"]
  ];
  const active = window.ACTIVE_PAGE || "index";
  const prefix = active === "index" ? "" : "../";
  const icon = name => `<i data-lucide="${name}"></i>`;
  const header = document.getElementById("site-header");
  if (header) {
    const links = pages.map(([id,label,path]) => {
      const href = id === "index" ? `${prefix}index.html` : `${prefix}${path}`;
      return `<a href="${href}"${id === active ? ' class="active" aria-current="page"' : ""}>${label}</a>`;
    }).join("");
    header.innerHTML = `<header class="site-header"><div class="nav-inner">
      <a class="brand" href="${prefix}index.html" aria-label="NLP Repository home"><span class="brand-mark">${icon("braces")}</span><span>NLP Repository</span></a>
      <nav class="links" id="site-links" aria-label="Primary navigation">${links}</nav>
      <div class="nav-actions"><button class="theme-toggle" id="theme-toggle" type="button" aria-label="Switch color theme" title="Switch color theme">${icon(document.documentElement.classList.contains("dark") ? "sun" : "moon")}</button><button class="nav-toggle" id="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" title="Open navigation">${icon("menu")}</button></div>
    </div></header>`;
    const themeButton = document.getElementById("theme-toggle");
    themeButton.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem("nlp-repo-theme", isDark ? "dark" : "light");
      themeButton.innerHTML = icon(isDark ? "sun" : "moon"); window.lucide?.createIcons();
    });
    const navButton = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("site-links");
    navButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open"); navButton.setAttribute("aria-expanded", String(open));
      navButton.innerHTML = icon(open ? "x" : "menu"); window.lucide?.createIcons();
    });
  }
  const footer = document.getElementById("site-footer");
  if (footer) footer.innerHTML = `<footer><div class="wrap footer-grid"><div><strong>Prepared By</strong>Jayraj Sanas (TYCM3-53)<br>Shivam Sankpal (TYCM3-54)<br>TY B.Tech Computer Engineering<br>Shah &amp; Anchor Kutchhi Engineering College</div><div class="footer-meta">Natural Language Processing | Educational Repository<div class="footer-links"><a href="${prefix}pages/references.html">References</a><a href="${prefix}pages/ai-declaration.html">AI Declaration</a></div></div></div></footer>`;
  const script = document.createElement("script"); script.src = "https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js";
  script.onload = () => window.lucide.createIcons(); document.head.appendChild(script);
})();
