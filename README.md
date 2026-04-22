<div align="center">

# Danish Butt | Portfolio Website

Modern full-stack developer portfolio built with React, interactive motion design, and immersive 3D scene integration.

<p>
	<img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
	<img src="https://img.shields.io/badge/Router-v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
	<img src="https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
	<img src="https://img.shields.io/badge/Three.js-3D-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
	<img src="https://img.shields.io/badge/License-MIT-1F6FEB?style=for-the-badge" alt="MIT License" />
</p>

</div>

---

## Why This Project

This portfolio is designed to communicate engineering capability and design maturity in one experience. It combines:

- performance-oriented React architecture,
- cinematic entry motion and transitions,
- clear professional storytelling,
- responsive behavior across phone, tablet, desktop, and large screens.

## Experience Highlights

| Area                 | What It Delivers                                                          |
| -------------------- | ------------------------------------------------------------------------- |
| Hero Experience      | Animated intro, modern visual hierarchy, and clear CTA actions            |
| Command Palette      | Keyboard and click/tap-driven quick actions for CV, contact, and profiles |
| Professional Pages   | Dedicated About and Blog routes with overlay modal reading experience     |
| Responsiveness       | Adapted layouts and controls for all common viewport sizes                |
| Deployment-Ready SPA | Routing rewrite strategy for static hosting environments                  |

## Core Features

1. Animated loader sequence powered by GSAP and SVG draw effects.
2. Dynamic hero section with metrics, highlights, and navigation actions.
3. Command menu for fast user actions.
4. About page with 3D background and detailed professional profile popup.
5. Blog page with curated long-form technical content.
6. Resume download integration via static CV assets.

## Interaction Map

| Action                      | Trigger                      |
| --------------------------- | ---------------------------- |
| Open command menu           | `Ctrl + Enter`               |
| Close command menu          | `Esc`                        |
| Open command menu (touch)   | `Actions` button in hero nav |
| Open detailed About content | `Read More`                  |
| Open full blog article      | `Read More`                  |

## Tech Stack

### Frontend

- React 19
- React Router DOM 7
- React Icons

### Animation and Graphics

- GSAP
- Spline (`@splinetool/react-spline`)
- Three.js ecosystem (`three`, `@react-three/fiber`, `@react-three/drei`, `three-stdlib`)

### Tooling

- Create React App (`react-scripts`)
- Testing Library stack

## Project Structure

```text
src/
	animations/       # Shared animation utilities
	components/       # Loader, mobile helper components, 3D wrappers
	pages/            # Route-level pages (About, Blog)
	ui/               # Home UI modules (OverlayText, CommandMenu)
	App.js            # Router and top-level app shell
	index.js          # React root mount
public/
	assets/           # Static public assets
	CV/               # Downloadable resume files
build/              # Production output
versal.json         # SPA rewrite config currently in repository
```

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install

```bash
npm install
```

### Start development server

```bash
npm start
```

### Run tests

```bash
npm test
```

### Create production build

```bash
npm run build
```

## Deployment Notes

This app is compatible with static SPA hosting.

For Vercel deployments, keep an SPA rewrite that sends all routes to `index.html`.

Note: the repository currently uses `versal.json`. If you deploy on Vercel directly, rename this file to `vercel.json` so Vercel can detect and apply rewrites automatically.

## Author

**Danish Butt**

- GitHub: https://github.com/DanishButt586
- LinkedIn: https://www.linkedin.com/in/danish-butt-b41090369/
- Email: danishnaveed212@gmail.com

## License

Distributed under the MIT License. See [LICENSE](LICENSE).
