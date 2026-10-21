# Poem Quest — Assignment 5

Peihan Jiang · Introduction to Coding for Learning Designers

A semantic HTML foundation for an immersive experience based on Li Bai's 静夜思 (Quiet Night Thought). The content follows my Assignment 4 mockup: cool reality → warm imagined memories → cool reality.

## Section inventory

Header/navigation → Landing → Moonlight → Look Up → Family Memory → Friends Memory → Return & Reflection → Footer.

The six story sections are all visible in normal document flow. Family and friends are imagined memories, not literal events stated in the poem.

## Files

- index.html: document metadata, navigation, six commented story sections, complete poem, reflection and replay links, footer.
- style.css: template reset plus Style Tile fonts, color variables and spacing in multiples of 8px.
- .devcontainer/: development setup inherited from profJoey/nyu-f26-project-template.

## Why these HTML elements?

- header and nav identify the brand and navigation.
- main contains the primary story, separate from navigation and credits.
- section is used for each distinct scene; each has an accessible heading.
- One h1 names the experience. Five h2 headings name the following scenes.
- p holds prose and poetry; br preserves poetic line breaks.
- a moves to another section, so these controls are links rather than buttons with no action.
- details and summary provide native, keyboard-operable menu and reflection disclosure without JavaScript.
- footer identifies the original poem and author.

## Style Tile applied

- Noto Serif SC: headings and Chinese poetry; Inter: navigation, prose and labels.
- Indigo #10182D: reality/background; moon white #F5EEDC: text and primary links.
- Warm ink #4A2D22: imagined memories; amber #D5A35C: decorative memory boundaries.
- Slate #34465F: section dividers.
- Spacing: 8, 16, 24, 48px. Body: 16px/24px; poetry: 28px/42px.
- Solid-color text contrast: moon/indigo 15.24:1; moon/warm ink 10.74:1.

## Preview in Codespaces

Open this repository with Code → Codespaces. Right-click index.html → Open with Live Server, then open the forwarded preview. No build step or dependencies are needed for the page.

## Current assignment scope

This is the HTML and basic CSS stage, not the finished cinematic game. No images, media, Flexbox, Grid, animations, transitions or JavaScript are included. Separate section containers and shared classes leave the structure ready for later responsive composition. The moonlight exploration and camera/memory transitions remain future work; the current links simply move to the next scene.

## AI assistance disclosure

ChatGPT/Codex assisted with translating the existing Assignment 4 scene order, fonts and palette into initial HTML/CSS, explaining semantic elements, and checking the structure. The story concept and prior visual decisions come from Peihan's Poem Quest design. This disclosure does not claim independent coding or completed student review; the student should review and revise the code, be able to explain it, and follow the syllabus's Student Acknowledgement of AI Use before submitting.

## Submission

Submit the repository URL: https://github.com/peihannn/f26-nyu-project-jiang-peihan

Do not submit the temporary Codespaces or Live Server preview URL. Canvas submission is handled by the student.


## Story revision
The six sections are six consecutive moments in one experience:
guest room → floor moonlight → raised gaze / moon → imagined family table →
imagined friends in a courtyard → lowered gaze / homesickness.

The moonlight and raised-gaze disclosures reveal poetry only after the reader
explores. Family and friends have different settings and optional moments to
linger. Links move forward through the story. The last scene restores cold blue,
shows the complete poem, and offers reflection or a return to the beginning.
The reflection field sends nothing and has no persistent storage. Returning to
the beginning scrolls there; it does not reset disclosures or erase the note.
Native disclosure controls support mouse, touch and keyboard without JavaScript.

This is the Assignment 5 semantic HTML and basic CSS foundation, not the finished
cinematic game. All six sections remain in normal document flow as required.
Artwork, camera movement, delayed fades, swipes and scene-state/reset logic are
intended later behavior and are not implemented here. No images, media,
Flexbox/Grid, transitions or animations have been added.

AI assisted this story revision and code checks. Peihan still needs to review
and understand the markup, CSS and design decisions before submitting it.

Source audit: one h1, six labelled story sections, balanced tags, unique IDs,
and every fragment link resolves. Calculated solid-color text contrast:
moon #F5EEDC on indigo #10182D = 15.24:1; on slate #34465F = 8.30:1;
on warm ink #4A2D22 = 10.74:1. Primary links have a 48px minimum height;
story summaries have a 48px minimum height. The browser connection was blank
during this revision, so visual/viewport and interaction QA remains unverified.
