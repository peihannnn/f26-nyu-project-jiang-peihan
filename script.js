// Assignment 6: the six scenes come from the existing Poem Quest story.
// Each object stores one scene, rather than a block of HTML.
const scenes = [
  {
    "id": "landing",
    "eyebrow": "01 / A quiet night",
    "title": "Poem Quest",
    "headingLevel": "h1",
    "language": "en",
    "description": "Li Bai sits alone in a guest room. Moonlight enters through the window.",
    "memory": false,
    "poem": "静夜思 · 李白",
    "poemBeforeDescription": true,
    "explore": null,
    "nextId": "moonlight",
    "nextLabel": "BEGIN EXPERIENCE",
    "nextInsideExplore": false
  },
  {
    "id": "moonlight",
    "eyebrow": "02 / Moonlight",
    "title": "月光似霜",
    "headingLevel": "h2",
    "language": "zh-Hans",
    "description": "A pale patch of light lies beside the bed. Frost?",
    "memory": false,
    "poem": "床前明月光，\n疑是地上霜。",
    "poemBeforeDescription": false,
    "explore": {
      "label": "EXPLORE THE MOONLIGHT",
      "reveal": "The floor is still. It is moonlight, not frost."
    },
    "nextId": "look-up",
    "nextLabel": "FOLLOW THE LIGHT UPWARD",
    "nextInsideExplore": true
  },
  {
    "id": "look-up",
    "eyebrow": "03 / Look up",
    "title": "举头望月",
    "headingLevel": "h2",
    "language": "zh-Hans",
    "description": "The light leads from the floor to the window.",
    "memory": false,
    "poem": "举头望明月。",
    "poemBeforeDescription": false,
    "explore": {
      "label": "RAISE YOUR GAZE",
      "reveal": "Li Bai lifts his head toward the moon. For a moment, home feels close."
    },
    "nextId": "family-memory",
    "nextLabel": "FOLLOW THE MOON HOME",
    "nextInsideExplore": true
  },
  {
    "id": "family-memory",
    "eyebrow": "04 / Family memory",
    "title": "家人团聚",
    "headingLevel": "h2",
    "language": "zh-Hans",
    "description": "A lantern above the family table. An elder pours tea; a child reaches for a bowl.",
    "memory": true,
    "poem": "",
    "poemBeforeDescription": false,
    "explore": {
      "label": "STAY AT THE TABLE",
      "reveal": "Someone draws an empty chair closer. For a moment, there is a place for him."
    },
    "nextId": "friends-memory",
    "nextLabel": "STEP INTO THE COURTYARD",
    "nextInsideExplore": false
  },
  {
    "id": "friends-memory",
    "eyebrow": "05 / Friends memory",
    "title": "朋友相聚",
    "headingLevel": "h2",
    "language": "zh-Hans",
    "description": "Outside, beneath a pavilion, friends pass a cup of wine and trade lines of poetry.",
    "memory": true,
    "poem": "",
    "poemBeforeDescription": false,
    "explore": {
      "label": "LISTEN A MOMENT",
      "reveal": "A familiar voice begins a verse. He remembers how the others would finish it."
    },
    "nextId": "return-reflection",
    "nextLabel": "LET THE MEMORY FADE",
    "nextInsideExplore": false
  },
  {
    "id": "return-reflection",
    "eyebrow": "06 / Return and reflection",
    "title": "低头思故乡",
    "headingLevel": "h2",
    "language": "zh-Hans",
    "description": "The voices are gone. Alone in the cold guest room again, Li Bai lowers his head toward the moonlit floor.",
    "memory": false,
    "poem": "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。",
    "poemBeforeDescription": false,
    "explore": null,
    "nextId": "landing",
    "nextLabel": "RETURN TO THE BEGINNING",
    "nextInsideExplore": false
  }
];

const container = document.getElementById("story-scenes");

// A small helper avoids repeating createElement + textContent.
function createTextElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

// forEach visits every scene in story order, once.
scenes.forEach(scene => {
  const section = document.createElement("section");
  section.id = scene.id;
  section.setAttribute("aria-labelledby", scene.id + "-title");
  if (scene.memory) section.className = "memory";

  const eyebrow = createTextElement("p", scene.eyebrow, "eyebrow");
  const heading = document.createElement(scene.headingLevel);
  heading.textContent = scene.title;
  heading.id = scene.id + "-title";
  heading.lang = scene.language;
  section.appendChild(eyebrow);
  section.appendChild(heading);

  const description = createTextElement("p", scene.description);
  const poem = createTextElement("p", scene.poem, "poem");
  poem.lang = "zh-Hans";
  // Preserve line breaks in plain text without inserting HTML strings.
  poem.style.whiteSpace = "pre-line";
  if (scene.poemBeforeDescription) section.appendChild(poem);
  section.appendChild(description);

  // Optional exploration keeps the existing click-to-reveal behavior.
  let exploration;
  if (scene.explore) {
    exploration = document.createElement("details");
    exploration.className = "story-action";
    const summary = createTextElement("summary", scene.explore.label);
    const reveal = createTextElement("p", scene.explore.reveal);
    exploration.appendChild(summary);
    exploration.appendChild(reveal);
    section.appendChild(exploration);
  }

  if (scene.poem && !scene.poemBeforeDescription) {
    if (scene.nextInsideExplore) exploration.appendChild(poem);
    else section.appendChild(poem);
  }

  if (scene.memory) {
    const note = createTextElement("p",
      "Imagined memory of home; not a literal event stated in the poem.",
      "scene-note");
    section.appendChild(note);
  }

  const nextLink = createTextElement("a", scene.nextLabel, "primary-link");
  nextLink.setAttribute("href", "#" + scene.nextId);
  // The first two discoveries reveal the next link along with the poem.
  if (scene.nextInsideExplore) exploration.appendChild(nextLink);
  else section.appendChild(nextLink);

  container.appendChild(section);
});

// Keep the existing reflection field inside the final scene.
const reflection = document.getElementById("reflection");
document.getElementById("return-reflection").appendChild(reflection);

// On a direct scene URL, scroll after the target has been generated.
const sceneTarget = document.getElementById(window.location.hash.slice(1));
if (sceneTarget) sceneTarget.scrollIntoView();
