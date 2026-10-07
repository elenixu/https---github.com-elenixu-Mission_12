# Elena Portfolio

Personal portfolio of Elena Gil Salazar, a Front-End developer focused on React and TypeScript. The site introduces my background, presents selected projects and skills, and provides a contact form and a printable CV.

**Live portfolio:** [https://https-github-com-elenixu-mission-12.vercel.app/](https://https-github-com-elenixu-mission-12.vercel.app/)

## Features

- Responsive portfolio with About, Skills, Projects, and Contact sections.
- French, English, and Spanish interface translations.
- Project cards with descriptions, technologies, repository links, and live demos where available.
- Dedicated CV page at `/cv`, with French, English, and Spanish content.
- Print-to-PDF CV layout designed for a single A4 page, with clickable LinkedIn, GitHub, and portfolio links.
- Contact form powered by EmailJS.
- Basic page metadata and Person structured data for search engines.

## Built with

- React 18 and Create React App
- Material UI
- React Router
- i18next and react-i18next
- EmailJS

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

The development server opens the site at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

The optimized production files are generated in the `build/` directory.

### Tests

```bash
npm test
```

## Project structure

```text
public/                  Static files, app metadata, and images
src/
  assets/                Project screenshots and other imported assets
  components/            Shared UI such as the header, footer, cards, and contact form
  pages/
    Home/                Introduction and profile
    Competences/         Skills section
    Travaux/             Project portfolio
    Contact/             Contact section
    CV/                  CV page and language-specific CV data
  translations/          French, English, and Spanish interface strings
```

## CV and languages

The main portfolio is available at `/`, and the CV is available at `/cv`. Use the language selector to switch between French, English, and Spanish. On the CV page, choose **Download** to open the browser print dialog and save the page as a PDF. For best results, select A4 paper and enable background graphics in the print dialog.

## Contact

- **Email:** [elegil93@gmail.com](mailto:elegil93@gmail.com)
- **LinkedIn:** [linkedin.com/in/elenagilsalazar](https://www.linkedin.com/in/elenagilsalazar/)
- **GitHub:** [github.com/elenixu](https://github.com/elenixu)
