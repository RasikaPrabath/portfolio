# 🌟 Premium Developer Portfolio - Rasika Prabath

> A sleek, highly interactive, and performance-optimized portfolio website built using React, Tailwind CSS, and Framer Motion. 

[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.12-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11.17-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://www.rasikaprabath.me/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🔗 Quick Links

*   **Live Website:** [rasikaprabath.me](https://www.rasikaprabath.me/)
*   **YouTube Channel:** [CodeHavenAcademy](https://www.youtube.com/@CodeHavenAcademy)
*   **LinkedIn Profile:** [Rasika Prabath on LinkedIn](https://linkedin.com/in/rasikaprabath)
*   **Graphic Design Agency:** [Simplify Art](https://www.instagram.com/simplify.art.lk)

---

## ✨ Features

- **🎨 Modern & Premium UI**: Features custom typography, smooth gradients, glassmorphism, and a high-performance interactive `MeshBackground` canvas.
- **📱 Fully Responsive**: Mobile-first design architecture supporting devices from small screens (360px) to ultra-wide desktop monitors (1200px+).
- **🌙 System Theme Aware + Toggle**: Auto-detects user preference for dark mode, with a persistent theme switcher saved in local storage.
- **⚡ Advanced Animations**: Powered by Framer Motion for elegant entry transitions, hover state micro-interactions, mobile navigation slide-ins, and scroll reveal animations.
- **🔍 SEO & Crawl Ready**: Fully optimized with customized metadata, structured JSON-LD schema (Person type), semantic HTML structure, dynamic `sitemap.xml`, and Google Search Console verification.
- **📦 Clean Architecture**: Separated presentation components and static configuration data to make personalization extremely simple.

---

## 🛠️ Technology Stack

| Layer | Technologies & Tools |
| :--- | :--- |
| **Core Framework** | React 18.2.0 (SPA) |
| **Styling** | Tailwind CSS 3.4.12 & PostCSS |
| **Animations** | Framer Motion 11.11.17 |
| **SEO & Analytics** | JSON-LD Schema, Sitemap.xml, Google Search Console |
| **Deployment** | Vercel (Auto-Build) / GitHub Pages |
| **Design & Assets** | Figma, Adobe Photoshop, Simplify Art graphics |

---

## 📂 Repository Structure

```directory
portfolio/
├── .github/                  # GitHub Actions and workflows
├── .vscode/                  # Workspace settings and debugger configurations
├── public/                   # Static assets
│   ├── certificates/         # PDF copies of certificates
│   ├── google36600d273ca1c6f6.html # Google Search Console verification file
│   ├── favicon.ico           # Website favicon
│   ├── index.html            # Core HTML template and SEO meta tags
│   ├── robots.txt            # Search engine crawler instructions
│   ├── sitemap.xml           # XML sitemap mapping the website URL
│   └── resume.pdf            # Downloadable professional CV
├── src/                      # Source code
│   ├── components/           # UI Components
│   │   ├── Header.js         # Navigation bar with responsive drawer and theme toggle
│   │   ├── Hero.js           # Animated hero banner with CV download & social links
│   │   ├── About.js          # Biography section
│   │   ├── Education.js      # Timeline of academic qualifications
│   │   ├── Experience.js     # Professional work history timeline
│   │   ├── Skills.js         # Technical & professional skill bars
│   │   ├── Projects.js       # Grid layout with tags and links to source code
│   │   ├── Certificates.js   # Achievements slider/grid
│   │   ├── Contact.js        # Contact details & form implementation
│   │   ├── Footer.js         # Social copyright footer
│   │   ├── ScrollToTop.js    # Floating scroll helper
│   │   ├── MeshBackground.js # Interactive abstract canvas background
│   │   └── DefaultAvatar.js  # Standard avatar placeholder component
│   ├── data/                 # Personal resumes and portfolio static data
│   │   ├── resumeData.js     # Hardcoded personal profile & credentials data
│   │   └── projectsData.js   # Project showcase list with assets
│   ├── hooks/                # Custom React hook implementations
│   ├── images/               # Image assets (PNG, JPG, WebP)
│   ├── App.js                # Core layout and section container routing
│   ├── index.js              # Application entry point
│   └── index.css             # Main styling entry point (Tailwind directives)
├── package.json              # Direct dependencies and build scripts
├── postcss.config.js         # PostCSS plugins configuration
└── tailwind.config.js        # Custom Tailwind design utility classes and extends
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed:
*   [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
*   [npm](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/rasikaprabath12345/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

### Run Locally

Start the React development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio. The page will reload automatically if you make edits to the files.

### Production Build

Generate a minified and optimized production bundle:
```bash
npm run build
```
The output will be created inside the `build/` directory, ready to be served.

---

## ⚙️ Customization Guide

Personalizing this portfolio template is fast and direct. For a detailed file-by-file breakdown, refer to the [Customization Guide](CUSTOMIZATION_GUIDE.md).

### 1. Update Professional Bio & Contact Details
Open `src/data/resumeData.js` and edit the static JSON exports:
- **`contactData`**: Change your location, email, and phone number.
- **`educationData`**: Add or remove academic milestones.
- **`experienceData`**: Detail your employment history.
- **`skillsData`**: Set your skill levels (0-100) to adjust the visual progress bars.
- **`certificatesData`**: Update certificates, verification URLs, and files.

### 2. Update Projects Portfolio
Open `src/data/projectsData.js` to modify the showcase items:
- Each project object has a title, description, tags list (`techStack`), image link, and GitHub repository URL.
- Place project images under `src/images/` and import them at the top of the file.

### 3. Change Profile Image & Resume
- **Profile Photo**: Overwrite `public/profile.jpg` (ensure it is a square 1:1 ratio image, ~400x400px).
- **Resume CV**: Overwrite `public/resume.pdf` with your updated professional resume.

### 4. Setup SEO, Search Console, & Sitemap
Verify the settings in:
- `public/index.html`: Update `<title>`, `<meta name="description">`, keywords, and the JSON-LD structure inside `<script type="application/ld+json">`.
- `public/sitemap.xml` & `public/robots.txt`: Change domain endpoints to point to your live site domain.

---

## 📈 Google Search Console & SEO Deployment Setup

The website has been configured for custom domain mapping (`https://www.rasikaprabath.me/`) and verified on Google Search Console. 

### Re-verification or Custom Setup Steps:
1.  **Google Search Console Property**: Set up a **URL Prefix** property for `https://www.rasikaprabath.me/`.
2.  **HTML File Upload**: Download the verification file from Google Search Console (e.g., `google36600d273ca1c6f6.html`) and place it inside the `public/` directory.
3.  **Deployment**: Push updates to your GitHub repository (triggering the build cycle on Vercel/GitHub Pages).
4.  **Verification**: Once the file goes live at `https://www.rasikaprabath.me/google36600d273ca1c6f6.html`, click **Verify** in Search Console.
5.  **Submit Sitemap**: Go to Sitemaps in Google Search Console, enter `sitemap.xml`, and click submit.

---

## 👤 Author & Support

Developed by **Rasika Prabath** — a Software Engineer & Creative Graphic Designer.

- 🌐 **Portfolio**: [rasikaprabath.me](https://www.rasikaprabath.me/)
- 📧 **Email**: [rasikaprabath8694@gmail.com](mailto:rasikaprabath8694@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/rasikaprabath](https://linkedin.com/in/rasikaprabath)
- 🐙 **GitHub**: [@rasikaprabath12345](https://github.com/rasikaprabath12345)
- 🎬 **YouTube**: [@CodeHavenAcademy](https://www.youtube.com/@CodeHavenAcademy)

---

## 📄 License

This project is licensed under the MIT License - feel free to fork, customize, and use this template for your own developer portfolio site!
