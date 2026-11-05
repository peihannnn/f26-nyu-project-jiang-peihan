# Activity 7 — The Structure Audit

**Project:** Explore Chengde  
**Date completed:** November 5, 2026  
**Repository:** https://github.com/peihannnn/f26-nyu-project-jiang-peihan

## Phase 1 — Audit

### Page inventory

Welcome screen → Plan Your Visit screen → Route Preview screen

This inventory is also written as a comment near the top of `index.html`. Each screen has a matching section comment in the HTML.

### Section-by-section check

| Mockup section | Does it exist? | Is it visible? | Does it match the mockup? | Is the heading right? |
| --- | --- | --- | --- | --- |
| Welcome | Yes. It is the first `<section>` in `<main>`. | Yes. It is the default screen when the page loads. | Yes. It includes the bilingual brand, title, introduction, photograph, themes, language control, and Begin Journey button. | Yes. `Explore Chengde` is the document's single `<h1>`. |
| Plan Your Visit | Yes. It is the second `<section>` and contains the route-selection form. | Yes. The Begin Journey button opens it. | Yes. It includes the heading, 60- and 90-minute choices, route descriptions, back control, language control, and Continue button. | Yes. `Plan Your Visit` is an `<h2>`, and the question is a form `<legend>`. |
| Route Preview | Yes. It is the third `<section>` and contains the route flow and summary. | Yes. Continue opens it after a duration is selected. | Yes. It includes the heading, photograph, vertical route steps, selected route name, duration, description, back control, and language control. | Yes. `Your Route Preview` is an `<h2>`. |

### Whole-page check

- **Fonts:** The page intentionally uses Georgia with Times New Roman as a fallback. Chinese text uses Songti SC or SimSun. The computed styles display the expected serif stack.
- **Colors:** The screen-level `--ivory`, `--navy`, and `--gold` custom properties are connected to the design. Changing `--gold` temporarily changed the selected control and decorative route lines, and the value was restored after testing.
- **Dead declarations:** I checked the stylesheet for missing units, invalid property names, and incomplete declarations. No invalid declarations or syntax errors remain.
- **Links and controls:** This prototype does not use anchor navigation. The Begin, Back, Continue, duration, and language buttons all point to existing JavaScript actions. The stylesheet, script, favicon, photograph, and reference image paths point to files that exist.
- **Console:** `script.js` loads through a deferred `<script>` element. The browser reports `script.js is connected`, and the tested interaction produces no red console errors.

## Phase 2 — Repair

**Fixed today:**

- Added the ordered page inventory near the top of `index.html`.
- Added a clear HTML comment before each of the three screen sections.
- Corrected the heading hierarchy so the document has one `<h1>` and the later screen titles use `<h2>`.
- Confirmed that all three mockup screens exist, appear in the correct order, and can be reached through working controls.
- Confirmed that the CSS, JavaScript, favicon, and image files load from valid paths.
- Updated `STRUCTURE_AUDIT.md` so it accurately describes the current Week 8 duration state and `if/else` interaction.

## Phase 3 — Triage

**Still missing (building after the current prototype):**

- [ ] Replace the prototype route steps with real named locations and verified walking directions.
- [ ] Add a simple illustrated or geographic map after the route content is researched.
- [ ] Complete an in-person partner spot-check with a classmate when possible.

**One thing I couldn't figure out:**

- I have not yet determined the most reliable source and format for real walking-route data inside Chengde Mountain Resort. This is a future content and mapping task, not a missing HTML section in the current prototype.

## Phase 4 — Spot-check

I completed a second independent comparison between the 1440px mockup and the browser build. I did not find a required screen missing from the coded page. Because this audit was completed outside the original in-class pairing time, an in-person classmate spot-check is still recorded in the checklist instead of being claimed as complete.

## Result

All three required screens are present and usable. The page now has an explicit inventory, clear section comments, a correct heading hierarchy, working assets and controls, and no console errors in the tested Welcome → Plan → Route flow.
