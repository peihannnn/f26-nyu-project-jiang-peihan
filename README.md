# Explore Chengde

Explore Chengde is a bilingual mobile guide prototype for Chengde Mountain Resort. It uses the course-required technologies: semantic HTML, CSS, and vanilla JavaScript.

## Project brief

Chengde Mountain Resort is a historic cultural site in my hometown. Because Chengde is not a major international city, overseas visitors may have difficulty finding clear English information and navigating the large scenic area. I was inspired to create this project after seeing foreign visitors who appeared to be lost during my visit last year.

Explore Chengde is an interactive English-first guide for first-time and international visitors. It helps a visitor choose a 60 or 90 minute visit, then previews how that choice could shape a clear route. The current project is a prototype; a future version could add a real map, detailed stops, accessibility information, and live route guidance.

### Audience and goals

- International and English-speaking visitors to Chengde Mountain Resort
- First-time visitors who may be unfamiliar with the site
- Visitors with limited time who need a manageable route
- Visitors who want cultural context, not only directions

The goal is to make the site easier to explore while introducing its history, landscape, architecture, and stories.

## User story

- As an international visitor who is unfamiliar with Chengde Mountain Resort, I want a clear English route based on how much time I have, so that I can explore the site without getting lost.

## Features

- English and Chinese language switching
- Welcome, visit-planning, and route-preview screens
- 60 and 90 minute route choices
- A selected route duration carried into the preview screen
- Responsive mobile-first editorial design

## Mockup and responsive layout notes

[View the editable Figma wireframes and annotated 375px/1440px mockups](https://www.figma.com/design/duDwnLtOWE1ZonyZwKeGUt)

[View the original visual design reference](./references/design-reference.png)

The interface was planned for two required widths:

- **375px mobile:** content follows a single-column journey, the two duration controls are large enough for touch, and each screen fills the phone viewport.
- **1440px desktop:** introductory content and route-duration controls are separated into left and right regions, and photography uses the additional horizontal space.
- The layout changes at the `900px` media query. This breakpoint gives the content enough room to become a two-column composition without making text or controls too narrow.

The Figma file documents all three screens at both required widths and explains the responsive changes. The original visual reference records the early direction, while the coded prototype is the most current implementation.

## Structure audit

The complete audit is available in [STRUCTURE_AUDIT.md](./STRUCTURE_AUDIT.md). The project uses semantic sections, headings, fieldsets, legends, buttons, an ordered list, and a description list so the page structure continues to make sense without its visual styling.

## Weekly update

This week, I rebuilt the original React and TypeScript prototype in course-supported HTML, CSS, and vanilla JavaScript. I recreated the Welcome, Plan Your Visit, and Route Preview screens; added bilingual content and interactive 60 and 90 minute route choices; and made separate mobile and desktop layouts. I also tested the navigation and corrected a desktop image that became too large at some viewport sizes.

Next, I would like to develop real recommended stops, connect the route preview to a map, and test the guide with people who are unfamiliar with Chengde Mountain Resort.

## How I used AI

I used AI as a coding and learning assistant while translating the original prototype into HTML, CSS, and JavaScript. AI helped me explain the roles of the three technologies, troubleshoot responsive layout problems, and review the project against the assignment requirements. I selected the topic, defined the visitor problem, chose the visual direction and content, evaluated the results, and requested the final design changes. I reviewed the code and will be prepared to explain how the page navigation, route-duration selection, language switcher, CSS Grid, and media queries work.

## Project structure

```text
index.html   Page structure and accessible content
style.css    Layout, typography, responsive design, and visual styling
script.js    Language switching, navigation, selections, and DOM updates
STRUCTURE_AUDIT.md  Semantic structure and accessibility review
images/      Project photography
references/  Original design reference
```

## Run locally

No installation or build step is required. Open `index.html` directly in a browser, or serve the folder with any simple local web server.

For example:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.
