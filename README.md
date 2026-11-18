# Explore Chengde

**Latest mockups:** [Explore Chengde wireframes and annotated 375px/1440px mockups](https://www.figma.com/design/duDwnLtOWE1ZonyZwKeGUt)

**Live site:** Not published; the course submission uses the GitHub repository.

## Project Log

### Week 10 — November 18, 2026

**Event Plan**

- **User story:** As a first-time visitor who is unfamiliar with Chengde Mountain Resort, I want to search for a stop by its name or description so that I can find the place I need without getting lost.
- **The event:** The `input` event on the route search box fits because a visitor can type or erase words while looking for a place.
- **State:** `searchText` remembers the current search. It is new for Week 10 and starts as an empty string.
- **My function:** `matchesSearch(stop)` answers whether a stop's name or description contains the search text. It takes one stop and returns `true` or `false`.

**What changed:** Added a search field to the route preview. Its `input` event stores the typed text in `searchText` and calls `render()`. The `matchesSearch(stop)` function checks each stop's English and Chinese names and descriptions; `render()` uses its answer to decide which cards to show. Route cards also expand in place to show more information when selected.
**Why redraw on every event:** Each input event may change which stops match. Calling `render()` makes the cards, count, and no-results message reflect the latest `searchText` together.
**What was hard, and what I tried:** I needed search to work with the existing 2-hour and 3-hour routes and both interface languages. I also changed the stop photos from external links to in-page expandable cards, so visitors can read more without leaving the route.
**What happened when I tried to break it:** Not tested yet. I need to try a matching word, a word with no matches, clearing the search, both route lengths, and opening/closing cards, then record what actually happens.
**What I learned or changed my mind about:** A function can answer one small question about a stop, and `render()` can use that answer while building the route list.
**Question for Joey:** Is searching both the English and Chinese stop details useful for the first-time English-speaking visitor, or should this search stay English-only?
**Next week's goal:** Ask a first-time visitor to try searching for a stop and tell me whether the result is easy to recognize.
**AI use:** AI helped draft the plan and code the search input, event handler, matching function, and no-results message. I chose the feature based on the visitor who may be lost. I have not tested this version yet and will run the checks myself before submitting.

### Week 9 — November 12, 2026

**Render Plan**

- **User story:** As an international visitor who is unfamiliar with Chengde Mountain Resort, I want a clear English route based on how much time I have, so that I can explore the site without getting lost.
- **State:** The page remembers the selected visit length in `selectedDuration`; it starts at 120 minutes (2 hours).
- **What changes it:** Clicking the 2-hour or 3-hour option sets `selectedDuration` to 120 or 180 minutes.
- **What `render()` draws:** It rebuilds the route stop cards from the `routeStops` array, including each stop's English name, short description, and photo.
- **The `if` inside the loop:** For the 2-hour route, it includes stops marked for the short route. For the 3-hour route, it includes every stop in the array.
- **What else `render()` works out:** It updates the selected duration style, the route length note, and how many stop cards are displayed.

**What changed:** I extended the route preview from a short summary to an ordered stop-by-stop guide with photos and short descriptions for the visitor who may be lost.

**Patching vs. rendering:** Before, the preview showed a route name and a short summary. Now the click handler only changes `selectedDuration` and calls `render()`, which clears the old cards and rebuilds the stop list from the array. The selected style, stop count, and time note all come from the same state.

**What was hard, and what I tried:** The challenging part was keeping the 2-hour route focused while making the 3-hour route an extension of it. I used a `shortRoute` value on each stop so the loop can include the first six stops for 2 hours and all nine for 3 hours.

**What happened when I tried to break it:** With AI assistance, I checked the initial state (2 hours and 6 cards), switched to 3 hours (9 cards), returned to planning, changed the language, and selected 2 hours ten times. The selected style, route note, and card list stayed in sync; the displayed counts matched the number of cards. I also checked the 3-hour page and confirmed that all nine photo cards loaded.

**What I learned or changed my mind about:** Clearing and rebuilding the list inside `render()` made repeated clicks predictable. The `if` inside the loop checks the current duration, so each stop is either included or skipped based on the visitor's choice.

**Question for Joey:** Does the 2-hour route feel focused enough for a first-time visitor, or should one of the palace stops be replaced by another lake-area stop?

**Next week's goal:** Ask a first-time visitor to try the route cards and note whether the stop names, order, and short descriptions help them feel less lost.

**AI use:** I used AI to help organize the route data, draft short English descriptions, connect each stop to an official resort photo, implement the `render()` loop, and run browser checks. I chose the 2-hour and 3-hour route lengths and reviewed the route stops and descriptions. I will practice explaining how the state and the `if` inside the loop control which cards appear.

### Week 8 — November 5, 2026

**State Plan**

- **User story:** As an international visitor who is unfamiliar with Chengde Mountain Resort, I want a clear English route based on how much time I have, so that I can explore the site without getting lost.
- **What does the page remember?** The visitor's selected route duration: 60 or 90 minutes.
- **What does it start at?** It starts at 60 minutes so the page always has a useful default route.
- **What changes it?** Clicking either duration button changes the selected duration.
- **What does the user see?** The selected button receives the gold selected style, and the Route Preview displays the matching duration, route name, and route description.
- **What does the `if/else` decide?** It decides whether to show the 90-minute Extended Discovery route or the 60-minute Essential Highlights route.

**What changed:** I connected the existing duration controls to one clearly named `let` state variable. I added an `if/else` that updates the route preview with different names and descriptions for the 60- and 90-minute choices.

**What was hard, and what I tried:** My earlier prototype stored several values in one object, which made the assignment's single state change less obvious. I separated the selected duration into its own variable and kept language and page navigation in the existing object.

**What happened when I tried to break it:** I tested the initial 60-minute state, switched between 60 and 90 minutes repeatedly, clicked the same choice more than once, changed languages, and moved backward and forward between screens. The selected style and route summary stayed consistent, and the duration never moved outside the two available choices.

**What I learned or changed my mind about:** I learned that changing a JavaScript variable is separate from updating the screen. The render step has to read the state and deliberately change the text and selected styling.

**Question for Joey:** For the next version, would a simple illustrated route map or more detailed stop cards be the more useful next interaction?

**Next week's goal:** Add real recommended stops to each route and connect the preview to a simple map while keeping the English guidance clear.

**AI use:** I used AI to help review the assignment checklist, translate my State Plan into the required JavaScript pattern, and test edge cases. The visitor problem, route-duration interaction, content, visual direction, and final decisions are my own. I reviewed the code and can explain what the variable stores, what changes it, how the `if/else` works, and how the page is updated.

## Structure Audit — November 5, 2026

**Fixed today:**

- Added an ordered page inventory and clear section comments to `index.html`.
- Corrected the heading hierarchy so the document contains one `<h1>` and the later screen titles use `<h2>`.
- Confirmed that `script.js`, `style.css`, the favicon, and the project photograph all use paths to files that exist.
- Confirmed that the three mockup screens—Welcome, Plan Your Visit, and Route Preview—are present in the same order as the design.

**Still missing (building before the layout assignment):**

- [x] No required mockup sections are missing from the current prototype.
- [x] No dead navigation links remain; screen navigation uses working buttons and existing page states.

**One thing I couldn't figure out:**

- I do not yet have a real location map or live walking directions. Those are future product features rather than missing structural sections in this prototype.

**Partner spot-check:**

- A classmate confirmed that the three required screens were present and suggested developing an **individualized route**. This idea supports the current 60- and 90-minute choices and provides a direction for future routes based on real stops and visitor needs.

Explore Chengde is a bilingual mobile guide prototype for Chengde Mountain Resort. It uses the course-required technologies: semantic HTML, CSS, and vanilla JavaScript.

## Project brief

Chengde Mountain Resort is a historic cultural site in my hometown. Because Chengde is not a major international city, overseas visitors may have difficulty finding clear English information and navigating the large scenic area. I was inspired to create this project after seeing foreign visitors who appeared to be lost during my visit last year.

Explore Chengde is an interactive English-first guide for first-time and international visitors. It helps a visitor choose a 2-hour or 3-hour visit, then previews a clear route with photos and short descriptions for each stop. The current project is a prototype; a future version could add a real map, accessibility information, and live route guidance.

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
- 2-hour and 3-hour route choices (2 hours selected by default)
- A selected route duration carried into the preview screen
- Six stop cards on the 2-hour route and nine on the 3-hour route
- English names, short descriptions, and official resort photos for every route stop
- Responsive mobile-first editorial design

### Suggested route stops

The 2-hour prototype route is: Lizheng Gate → Danbo Jingcheng Hall → Yanbo Zhishuang Hall → Wanhe Songfeng Hall → Yanxun Pavilion → Yanyu Tower.

The 3-hour route includes those six stops, then adds: Jinshan Island → Rehe Spring → Wenjin Pavilion.

These durations are estimates for this class prototype, not official walking-time guarantees. Actual time depends on walking pace, queues, and time spent at each place. See the [official resort route guide](https://www.bishushanzhuang.com.cn/index.php/Scenic/area_index/area_id/1.html) for route information before visiting.

### Photo sources

Each stop card uses a photo from the resort's official gallery. The images are hosted remotely and need an internet connection. Selecting a card expands its additional description in the page instead of opening a different site.

The expanded historical notes are adapted from the resort's [official route guide](https://www.bishushanzhuang.com.cn/index.php/Scenic/area_index.html) and official pages for [Lizheng Gate](https://www.bishushanzhuang.com.cn/index.php/Scenic/spot_view/id/190.html), [Danbo Jingcheng Hall](https://www.bishushanzhuang.com.cn/index.php/Scenic/spot_view/id/77.html), [Yanbo Zhishuang Hall](https://www.bishushanzhuang.com.cn/index.php/Scenic/spot_view/id/85.html), and [Ruyi Islet](https://www.bishushanzhuang.com.cn/index.php/Scenic/spot_view/id/37.html).

- [Lizheng Gate](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/190.html)
- [Danbo Jingcheng Hall](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/77.html)
- [Yanbo Zhishuang Hall](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/85.html)
- [Wanhe Songfeng Hall](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/87.html)
- [Yanxun Pavilion](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/36.html)
- [Yanyu Tower](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/73.html)
- [Jinshan Island](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/39.html)
- [Rehe Spring](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/40.html)
- [Wenjin Pavilion](https://www.bishushanzhuang.com.cn/index.php/Scenic/pic_list/id/75.html)

## Mockup and responsive layout notes

[View the editable Figma wireframes and annotated 375px/1440px mockups](https://www.figma.com/design/duDwnLtOWE1ZonyZwKeGUt)

[View the original visual design reference](./references/design-reference.png)

The interface was planned for two required widths:

- **375px mobile:** content follows a single-column journey, the two duration controls are large enough for touch, and each screen fills the phone viewport.
- **1440px desktop:** introductory content and route-duration controls are separated into left and right regions, and photography uses the additional horizontal space.
- The layout changes at the `900px` media query. This breakpoint gives the content enough room to become a two-column composition without making text or controls too narrow.

The Figma file documents all three screens at both required widths and explains the responsive changes. The original visual reference records the early direction, while the coded prototype is the most current implementation.

## Structure audit

The submitted Week 7 activity is available in [ACTIVITY_7_STRUCTURE_AUDIT.md](./ACTIVITY_7_STRUCTURE_AUDIT.md), with the supporting semantic review in [STRUCTURE_AUDIT.md](./STRUCTURE_AUDIT.md). The project uses semantic sections, headings, fieldsets, legends, buttons, an ordered list, and a description list so the page structure continues to make sense without its visual styling.

## Weekly update

This week, I used an array and `render()` to show a stop-by-stop route with photos and short descriptions. Visitors can choose a 2-hour route with six stops or a 3-hour route with nine stops. The route cards support the visitor story about helping first-time English-speaking visitors find their way around the resort.

With AI assistance, I tested the default 2-hour state, switched to the 3-hour route, changed languages, navigated back, and selected the same duration ten times. The shown counts matched the cards, and all nine photo cards loaded. Next, I would like to ask a first-time visitor to try the route cards and tell me whether the stop order and descriptions are clear.

## How I used AI

I used AI as a coding and learning assistant to help draft the 2-hour and 3-hour stop arrays, write short English descriptions, connect photos from the resort's official galleries, implement the loop and `if` in `render()`, and check the page in a browser. I chose the project topic and visitor problem, specified the two route lengths, reviewed the stops and descriptions, and checked the finished behavior. I will be prepared to explain how `selectedDuration`, the loop, and the `if` determine which cards appear.

## Project structure

```text
index.html   Page structure and accessible content
style.css    Layout, typography, responsive design, and visual styling
script.js    Route data, language switching, navigation, and page rendering
STRUCTURE_AUDIT.md  Semantic structure and accessibility review
ACTIVITY_7_STRUCTURE_AUDIT.md  Week 7 inventory, audit, repairs, and triage
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
