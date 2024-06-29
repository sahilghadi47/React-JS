# Weather Application

A weather application built using React, Vite, and TailwindCSS.Deployed  on vercel

## [Link to Application](https://react-js-mudo.vercel.app/)

## Table of Contents

- [Summary](#summary)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Technologies Used](#technologies-used)
- [Development](#development)

## Summary

This Weather Application is designed to provide real-time weather information using a modern tech stack. It leverages React for the user interface, Vite for fast development and building, and TailwindCSS for styling. The application fetches weather data from an API and displays it in an easy-to-read format, with support for different weather conditions represented by various icons.

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Usage

- To start the development server, run:

```bash
npm run dev
```

- To build the project for production, run:

```bash
npm run build
```

- To preview the production build, run:

```bash
npm run preview
```

- To lint the project files, run:

```bash
npm run lint
```

## Project Structure

```css
src/
├── assets/
│   └── images/
│       ├── clear.png
│       ├── clouds.png
│       ├── drizzle.png
│       ├── dust.png
│       ├── haze.png
│       ├── humidity.png
│       ├── mist.png
│       ├── rain.png
│       ├── smoke.png
│       ├── snow.png
│       ├── sunrise.png
│       ├── sunset.png
│       ├── thunderstorm.png
│       └── windspeed.png
├── components/
│   ├── Container.jsx
│   ├── DisplayBoards.jsx
│   ├── Header.jsx
│   ├── WeatherInfo.jsx
│   └── WeatherItem.jsx
├── hooks/
│   └── useWeather.js
├── App.jsx
├── index.css
├── main.jsx

```

---

## Dependencies

### Main Dependencies

- **_axios: ^1.7.2_**
- **_lucide-react: ^0.399.0_**
- **_react: ^18.3.1_**
- **_react-dom: ^18.3.1_**

---

### Dev Dependencies

- **_@types/react: ^18.3.3_**
- **_@types/react-dom: ^18.3.0_**
- **_@vitejs/plugin-react: ^4.3.1_**
- **_autoprefixer: ^10.4.19_**
- **_eslint: ^8.57.0_**
- **_eslint-plugin-react: ^7.34.2_**
- **_eslint-plugin-react-hooks: ^4.6.2_**
- **_eslint-plugin-react-refresh: ^0.4.7_**
- **_postcss: ^8.4.38_**
- **_tailwindcss: ^3.4.4_**
- **_vite: ^5.3.1_**

---

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A next-generation front-end tool for faster and more efficient development.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- Axios: A promise-based HTTP client for making API requests.
- Lucide React: A collection of simple and beautiful SVG icons for React.
- ESLint: A static code analysis tool to identify and fix problems in JavaScript code.
- PostCSS: A tool for transforming CSS with JavaScript plugins.
- Autoprefixer: A PostCSS plugin to parse CSS and add vendor prefixes automatically.

---

## Development

### Vite Configuration

The project uses Vite for bundling. Configuration can be found in vite.config.js.

### TailwindCSS Configuration

TailwindCSS configuration is in tailwind.config.js.

### PostCSS Configuration

PostCSS configuration is in postcss.config.js.

---
