# Poem Quest — Assignment 6

Peihan Jiang · Introduction to Coding for Learning Designers

Poem Quest is an interactive poetry game concept inspired by Li Bai's 静夜思 (Quiet Night Thought). This repository is the course's browser-based narrative prototype; it does not determine the final game's engine or development platform.

## Latest mockups

The latest design reference is the Assignment 4 six-scene Figma mockup. **Its share link still needs to be added before submission.** The narrative order and cool → warm → cool palette remain the same. The current implementation shows all scenes in normal document flow; the mockup's cinematic artwork and scene transitions are not implemented.

## Weekly update — October 26, 2026

- Converted the six existing scenes from repeated HTML into six objects in the JavaScript scenes array.
- Added script.js and linked it at the end of index.html, after the container exists.
- Used forEach, document.createElement, textContent, attributes, and appendChild to build all six scenes.
- Preserved the existing menu, story order, click-to-reveal exploration, poem, memory colors, and reflection field.
- Kept the existing Style Tile classes and CSS. No extra products, cards, or unrelated content were added.

### Challenges and solutions

Not all scenes contain the same information. The family and friends memories have no poem lines, so their poem fields are empty. Optional explore data controls the discovery panels. nextInsideExplore keeps the next link inside the moonlight and raised-gaze discoveries, while memory scenes allow readers to continue without opening their optional details.

Plain-text poem data uses newline characters. white-space: pre-line preserves those line breaks without innerHTML. The reflection stays in HTML and is moved into the final generated scene with appendChild.

### Questions and next-week goals

- Confirm with the instructor whether the course project should become the browser version of the game or a companion narrative prototype if a separate game engine is used.
- Add the current Figma share link and keep it updated.
- Practice changing one scene's title, explaining the array fields, and explaining the rendering loop without AI assistance.
- Use the next assignment's requirements to decide the next visual or interaction improvement. Artwork and scene switching are future goals, not implemented features.

## Data and why these fields exist

The array contains six real scenes: guest room → moonlight on the floor → looking up at the moon → imagined family table → imagined friends in a courtyard → return and reflection. The memories are creative interpretations, not events explicitly stated in the poem.

| Field | Purpose |
| --- | --- |
| id | Scene identity and destination for navigation links |
| eyebrow | Scene number and short English label |
| title, headingLevel, language | Accessible heading; one h1, five h2s; English or Simplified Chinese |
| description | Existing story context for that moment |
| memory | Applies the warm memory class; reality remains cool blue |
| poem | Chinese text; empty when the scene has no poem |
| poemBeforeDescription | Keeps the landing's poem credit before its description |
| explore | Optional disclosure label and revealed story text |
| nextId, nextLabel | Where to go next and what the link says |
| nextInsideExplore | Whether discovering the scene also reveals the next link |

## How JavaScript builds the HTML

1. getElementById finds the empty story-scenes container.
2. scenes.forEach visits each scene once in array order. forEach fits because every scene should render; no early exit is needed.
3. createElement creates section, heading, paragraph, details, summary, and link elements.
4. textContent inserts story text as text, not executable HTML. IDs, lang, aria-labelledby, classes, and href preserve semantics and styling.
5. appendChild puts each element inside its scene and each scene inside the container.
6. The existing reflection field is moved into the last scene. A direct fragment URL scrolls to its scene after rendering.

The createTextElement helper groups three repeated steps: create a tag, set its text, and optionally give it a class. It returns the element so the loop can append it.

## HTML concepts reviewed

- details / summary: browser-native expandable content, used for exploration and reflection.
- aria-labelledby: points to the heading ID that names each scene for assistive technology.
- lang="zh-Hans": marks Simplified Chinese passages; it does not translate text.

## Files and preview

- index.html: document metadata, header/navigation, dynamic container, reflection markup, footer, and script link.
- script.js: six scene objects and the rendering loop.
- style.css: existing Noto Serif SC / Inter typography, cool blue and warm memory colors, and spacing based on 8px.
- .devcontainer/: inherited course development setup.

Open the existing repository in Codespaces, then open index.html with Live Server. No build dependencies are required. JavaScript must be enabled to generate the scenes; a noscript message explains this when it is disabled.

Returning to the beginning scrolls to the first scene. It does not reset disclosures or erase the reflection. Reflection text is not transmitted or persistently saved.

## AI assistance and learning record

ChatGPT/Codex drafted the JavaScript conversion from Peihan's existing six-scene story and helped explain arrays, heading text, textContent, and appendChild. It also assisted with this README and preserving the earlier markup and styling. The fields and rendering approach were proposed with AI assistance; this is not a claim of independently authored code or completed independent review.

Before submission, Peihan should review and revise this note in her own words, confirm that the scene fields reflect her intended story, and practice explaining forEach, createElement, textContent, and appendChild. Follow the syllabus's Student Acknowledgement of AI Use.

## Submission

Submit the repository URL, not a Codespaces preview:
https://github.com/peihannnn/f26-nyu-project-jiang-peihan

Canvas submission is handled by the student.
