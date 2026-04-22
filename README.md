# Portfolio Website

A modern, desktop-first personal portfolio built with React, focused on clean presentation, smooth animation, and practical navigation for hiring managers and clients.

## Overview

This project is designed to present professional profile details, experience highlights, and technical capabilities in an interactive format. It includes a command-style action menu, animated entry flow, dedicated About and Blog routes, and quick access to CV, social profiles, and contact options.

## Highlights

- Animated first-load experience using GSAP and SVG draw effects.
- Desktop-first UX with an explicit mobile guidance overlay.
- Command menu launcher with keyboard controls.
- Dedicated routes for Home, About, and Blog pages.
- Integrated external actions: CV download, email, LinkedIn, and GitHub.
- Vercel-compatible SPA rewrite configuration.

## Tech Stack

- React 19
- React Router DOM 7
- GSAP
- Spline (`@splinetool/react-spline`)
- Three.js ecosystem (`three`, `@react-three/fiber`, `@react-three/drei`)
- React Icons
- Create React App toolchain

## Key Interactions

- Open command menu: `Ctrl + Enter`
- Close command menu: `Esc`
- Command actions include:
	- Copy current page link
	- Download CV
	- Open LinkedIn / GitHub
	- Send email

## Project Structure

```text
src/
	animations/       # Shared animation utilities
	components/       # Loader, mobile warning, canvas/model wrappers
	pages/            # Route-level pages (About, Blog)
	ui/               # Home UI modules (OverlayText, CommandMenu)
	App.js            # Main router and app shell
	index.js          # React entry point
public/
	CV/               # Downloadable resume files
	assets/           # Static assets
build/              # Production build output
versal.json         # SPA rewrite rules for deployment
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm start     # Start development server
npm test      # Run test suite
npm run build # Create production build
npm run eject # Eject CRA configuration (irreversible)
```

## Deployment

This project supports static SPA hosting.

For Vercel-style deployments, rewrite rules are provided in `versal.json` to route all paths to `index.html` so client-side routing works correctly.

## Author

**Danish Butt**

- GitHub: https://github.com/DanishButt586
- LinkedIn: https://www.linkedin.com/in/danish-butt-b41090369/

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
