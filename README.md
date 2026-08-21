# ⚡ K. Satya Sampath Kumar — Developer Portfolio

A modern, responsive, high-performance portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. Optimized for rapid deployment on **Vercel** with full zero-configuration support.

---

## 🚀 Live Demo & Links

- **GitHub Profile:** [https://github.com/SATYA-916](https://github.com/SATYA-916)
- **LinkedIn:** [https://linkedin.com/in/satya-sampath-93449a28b](https://linkedin.com/in/satya-sampath-93449a28b)
- **Email:** [satyasampath79@gmail.com](mailto:satyasampath79@gmail.com)

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React + Custom SVG Brand Icons
- **Design:** Dark glassmorphism, responsive grid layout, micro-interactions

---

## 📂 Project Structure

```text
portoflio/
├── public/               # Static assets & favicon
├── src/
│   ├── components/       # UI sections
│   │   ├── Navbar.jsx    # Sticky navigation with active scroll tracking
│   │   ├── Hero.jsx      # Animated role cycler, stats, CTA buttons
│   │   ├── About.jsx     # Professional summary, code card, 4 core pillars
│   │   ├── Skills.jsx    # Categorized skill pills with filter tabs
│   │   ├── Experience.jsx# Internship timeline (SLS Nexus, Infosys Springboard)
│   │   ├── Projects.jsx  # Featured project cards with Live Demo & GitHub links
│   │   ├── Education.jsx # GITAM B.Tech (CGPA 8.2), Hackathons & NSS
│   │   ├── Contact.jsx   # Direct mailto contact form & clipboard email copy
│   │   ├── Footer.jsx    # Quick links, social icons, back-to-top button
│   │   └── Icons.jsx     # Custom vector SVG icons
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all personal details
│   ├── App.jsx           # Main application shell
│   ├── main.jsx          # React DOM root entry
│   └── index.css         # Tailwind & custom glassmorphism styles
├── index.html            # Meta tags & fonts
├── package.json          # Scripts & dependencies
├── tailwind.config.js    # Dark theme configuration
├── postcss.config.js     # PostCSS setup
└── vite.config.js        # Vite build configuration
```

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploy to Vercel via GitHub

Run the following commands in your terminal:

```bash
git init
git add .
git commit -m "feat: initial release of developer portfolio website"
git branch -M main
git remote add origin https://github.com/SATYA-916/portfolio.git
git push -u origin main
```

### Import into Vercel:
1. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
2. Select your `portfolio` repository from GitHub.
3. Vercel will automatically detect **Vite** as the framework with build command `npm run build` and output directory `dist`.
4. Click **Deploy**! 🚀
