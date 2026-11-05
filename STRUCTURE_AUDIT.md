# Structure Audit

## Page organization

The project is a single-page prototype containing three main `<section>` elements: Welcome, Plan Your Visit, and Route Preview. JavaScript shows one section at a time while the hidden sections use the native `hidden` attribute. This keeps the three screens in one clear document without requiring a framework.

Each screen has a meaningful heading hierarchy. The main title of each screen is an `<h1>`, while supporting labels are paragraphs or legends rather than headings used only for visual size.

## Semantic elements

- `<main>` contains the primary experience.
- `<section>` separates the three screens.
- `<header>` groups navigation and language controls.
- `<form>` contains the visit-planning choices.
- `<fieldset>` and `<legend>` group the route-duration question.
- `<button>` is used for every interactive control instead of clickable text or decorative elements.
- `<ol>` presents the ordered route-preview steps.
- `<aside>` contains the selected-preferences summary.
- `<dl>`, `<dt>`, and `<dd>` connect preference labels with their values.

## Accessibility review

- Interactive controls can be reached with a keyboard.
- Visible focus styles are provided for buttons.
- Selected choices expose `aria-checked` values.
- Language buttons expose `aria-pressed` values.
- Button groups and photographs receive translated accessible labels.
- Decorative SVG lines and background shapes use `aria-hidden="true"`.
- Page language changes between `en` and `zh-CN` when the language switcher is used.
- The layout supports reduced-motion preferences.

## CSS layout review

CSS Grid is used only where it communicates a real layout relationship: centering an active screen, arranging the two equal route-duration choices, and presenting route steps. A one-line comment appears above each grid rule in `style.css`.

The base layout is designed for a 375px mobile screen. At `900px`, a media query changes the screens into 1440px desktop compositions. Text and route-duration choices become separate regions, and the route steps become three columns.

## JavaScript behavior review

JavaScript stores the current language, screen, and route duration in one small state object. Event listeners update that state and call the render function. The render function updates visible copy, selection states, accessible labels, route steps, and the route summary. HTML provides the structure, CSS provides the presentation, and JavaScript provides the interaction.

## Changes made after the audit

- Replaced the original React and TypeScript implementation with plain HTML, CSS, and JavaScript.
- Added semantic form groups for visitor choices.
- Added accessible labels and visible keyboard focus states.
- Added comments documenting the layout plan and every CSS Grid.
- Added responsive desktop layouts instead of keeping a phone-width column on large screens.
- Limited the desktop planning image height so it cannot expand unexpectedly.
