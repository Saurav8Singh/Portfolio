# Saurav Singh — Portfolio

Personal portfolio website built with **React 18**, vanilla CSS, and scroll-reveal animations.

## Tech Stack
- React 18 + Create React App
- CSS Modules (per-component CSS files)
- react-icons
- IntersectionObserver for scroll animations
- Google Fonts: Syne + DM Sans

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm start
```
Opens at `http://localhost:3000`

---

## Build for Production
```bash
npm run build
```
Outputs optimised files to `/build` folder.

---

## Free Deployment Options

### Option A — Vercel (Recommended, fastest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
3. Click **"Add New Project"** → Import your repo
4. Leave all settings as default → Click **Deploy**
5. Live in ~60 seconds at `https://your-project.vercel.app`

### Option B — Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repo → Build command: `npm run build` → Publish dir: `build`
5. Click **Deploy site**

### Option C — GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
3. Set `"homepage"` in `package.json`:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/portfolio"
```
4. Run:
```bash
npm run deploy
```

---

## Project Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── Hero.jsx   + Hero.css
│   │   ├── About.jsx  + About.css
│   │   ├── Skills.jsx + Skills.css
│   │   ├── Experience.jsx + Experience.css
│   │   ├── Projects.jsx   + Projects.css
│   │   ├── Education.jsx  + Education.css
│   │   ├── Contact.jsx    + Contact.css
│   │   └── Footer.jsx     + Footer.css
│   ├── data/
│   │   └── index.js       ← Edit your info here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Customisation
All personal data lives in **`src/data/index.js`** — edit your name, bio, experience, projects, education, and skills there. No need to touch component files.

To update project GitHub/Live links, edit the `liveUrl` and `githubUrl` fields in `src/data/index.js`.
# portfolio
