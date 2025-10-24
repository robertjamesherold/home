#!/bin/bash

# GitHub Issues Import Script
# Führe dieses Script in deinem Projekt-Ordner aus: bash create_issues.sh

# Issue #1
gh issue create \
  --title "Hero Section mit Wow-Effekt" \
  --body "**Beschreibung:**
Erste Sektion soll sofort beeindrucken und zeigen, dass ich moderne Frontend-Techniken beherrsche.

**Acceptance Criteria:**
- [ ] Animierter Gradient-Background oder Particle-Effekt (Three.js/Particles.js)
- [ ] Typing-Animation für Jobtitel (\"Frontend Developer | React Specialist\")
- [ ] Smooth-Scroll zu Projekten mit CTA-Button
- [ ] Mobile-optimiert und performant (<2s Ladezeit)
- [ ] Micro-Interactions bei Hover über Elemente

**Tech Stack:** React, Framer Motion, CSS Animations" \
  --label "enhancement,design,high-priority"

# Issue #2
gh issue create \
  --title "Projekt-Cards mit Live-Demos und Code" \
  --body "**Beschreibung:**
Projekte professionell präsentieren mit direkten Links zu Demo und Code.

**Acceptance Criteria:**
- [ ] Mindestens 4 React-Projekte mit Screenshots/GIFs
- [ ] Jedes Projekt: Live Demo Button + GitHub Link + Tech Stack Tags
- [ ] Kurze Beschreibung (Problem → Lösung → Impact)
- [ ] Filter nach Technologie (React, TypeScript, Next.js, etc.)
- [ ] Hover-Effekt zeigt mehr Details
- [ ] Grid-Layout, responsive auf allen Devices

**Tech Stack:** React, CSS Grid/Flexbox, Lazy Loading" \
  --label "feature,high-priority"

# Issue #3
gh issue create \
  --title "Skills-Section mit visueller Darstellung" \
  --body "**Beschreibung:**
Tech-Stack übersichtlich und modern präsentieren.

**Acceptance Criteria:**
- [ ] Skill-Icons (React, TypeScript, Tailwind, Git, etc.)
- [ ] Kategorien: Frontend, Backend (basics), Tools
- [ ] Animierte Skill-Bars oder Progress-Circles
- [ ] \"Currently Learning\" Sektion (z.B. Node.js, PostgreSQL)
- [ ] Hover-Effekt zeigt Erfahrungslevel/Projekte

**Tech Stack:** React, SVG Icons, Framer Motion" \
  --label "enhancement,design"

# Issue #4
gh issue create \
  --title "Mobile-First Responsive Design" \
  --body "**Beschreibung:**
Website muss auf allen Devices perfekt funktionieren.

**Acceptance Criteria:**
- [ ] Breakpoints für Mobile (320px+), Tablet (768px+), Desktop (1024px+)
- [ ] Hamburger-Menü auf Mobile mit smooth Animation
- [ ] Touch-friendly Button-Größen (min. 44x44px)
- [ ] Bilder optimiert (WebP, lazy loading)
- [ ] Lighthouse Score: >90 auf Mobile

**Tech Stack:** CSS Media Queries, React Responsive" \
  --label "bug,high-priority,mobile"

# Issue #5
gh issue create \
  --title "Dark/Light Mode Toggle" \
  --body "**Beschreibung:**
Theme-Switcher für bessere User Experience.

**Acceptance Criteria:**
- [ ] Toggle-Button im Header
- [ ] Smooth Transition zwischen Themes
- [ ] User-Präferenz im LocalStorage speichern
- [ ] System-Präferenz als Default (prefers-color-scheme)
- [ ] Alle Farben in CSS Variables definiert

**Tech Stack:** React Context API, CSS Variables" \
  --label "enhancement,UX"

# Issue #6
gh issue create \
  --title "Interaktive 'Über Mich' Section" \
  --body "**Beschreibung:**
Persönlichkeit zeigen und Weg vom Designer zum Developer erzählen.

**Acceptance Criteria:**
- [ ] Professionelles Foto
- [ ] Timeline: Bachelor Mediendesign → Meta-Zertifikat → aktuell
- [ ] \"Warum Frontend Development?\" Story (max. 150 Wörter)
- [ ] Links zu LinkedIn, GitHub, Email
- [ ] Download CV Button (PDF)

**Tech Stack:** React, CSS" \
  --label "enhancement,content"

# Issue #7
gh issue create \
  --title "Blog/Learning Section (optional)" \
  --body "**Beschreibung:**
Zeigen, dass ich kontinuierlich lerne und mich mit der Community austausche.

**Acceptance Criteria:**
- [ ] 2-3 kurze Artikel über Learning Journey
- [ ] \"TIL\" (Today I Learned) Snippets
- [ ] Code-Beispiele mit Syntax-Highlighting
- [ ] Share-Buttons für LinkedIn/Twitter

**Tech Stack:** Markdown, React-Markdown, Prism.js" \
  --label "feature,content,low-priority"

# Issue #8
gh issue create \
  --title "Performance Optimierung" \
  --body "**Beschreibung:**
Website soll blazing fast sein - zeigt technische Kompetenz.

**Acceptance Criteria:**
- [ ] Code-Splitting mit React.lazy()
- [ ] Image Optimization (Next.js Image oder react-lazy-load-image)
- [ ] Bundle Size < 200KB (gzipped)
- [ ] Lighthouse Score: >95 auf allen Metriken
- [ ] Prefetching für wichtige Routes

**Tech Stack:** Webpack Bundle Analyzer, Lighthouse" \
  --label "performance,optimization"

# Issue #9
gh issue create \
  --title "Animations & Micro-Interactions" \
  --body "**Beschreibung:**
Subtile Animationen, die die Seite lebendig machen.

**Acceptance Criteria:**
- [ ] Page-Transitions mit Framer Motion
- [ ] Scroll-triggered Animations (Fade-in beim Scrollen)
- [ ] Hover-Effekte auf allen interaktiven Elementen
- [ ] Loading-States für Projekt-Bilder
- [ ] Smooth-Scroll Navigation

**Tech Stack:** Framer Motion, Intersection Observer API" \
  --label "enhancement,UX,design"

# Issue #10
gh issue create \
  --title "Contact Form mit Validation" \
  --body "**Beschreibung:**
Einfache Kontaktaufnahme ermöglichen.

**Acceptance Criteria:**
- [ ] Felder: Name, Email, Nachricht
- [ ] Client-Side Validation (React Hook Form + Zod)
- [ ] Backend: Emailjs oder Formspree Integration
- [ ] Success/Error Messages
- [ ] Spam-Protection (Honeypot oder reCAPTCHA)

**Tech Stack:** React Hook Form, Zod, Emailjs" \
  --label "feature"

# Issue #11
gh issue create \
  --title "TypeScript Migration" \
  --body "**Beschreibung:**
Projekt auf TypeScript umstellen - zeigt professionelle Arbeitsweise.

**Acceptance Criteria:**
- [ ] Alle .jsx Files zu .tsx konvertieren
- [ ] Props mit Interfaces/Types definieren
- [ ] Keine \`any\` Types
- [ ] Strict Mode aktiviert

**Tech Stack:** TypeScript" \
  --label "refactor,typescript"

# Issue #12
gh issue create \
  --title "Testing Setup" \
  --body "**Beschreibung:**
Tests schreiben zeigt, dass du produktionsreife Arbeit lieferst.

**Acceptance Criteria:**
- [ ] Jest + React Testing Library Setup
- [ ] Unit Tests für Komponenten
- [ ] Integration Tests für wichtige User Flows
- [ ] Test Coverage >70%
- [ ] CI/CD Pipeline (GitHub Actions)

**Tech Stack:** Jest, React Testing Library, GitHub Actions" \
  --label "testing,quality"

# Issue #13
gh issue create \
  --title "SEO & Accessibility" \
  --body "**Beschreibung:**
Website muss für Suchmaschinen und alle User zugänglich sein.

**Acceptance Criteria:**
- [ ] Meta Tags (Title, Description, OG Tags)
- [ ] Semantic HTML (header, nav, main, footer)
- [ ] Alt-Texts für alle Bilder
- [ ] ARIA-Labels für interaktive Elemente
- [ ] Keyboard-Navigation funktioniert überall
- [ ] WCAG 2.1 Level AA konform

**Tech Stack:** React Helmet, axe DevTools" \
  --label "SEO,a11y,optimization"

echo "✅ Alle 13 Issues wurden erstellt!"
echo "🔗 Öffne dein GitHub Repository um sie zu sehen"
