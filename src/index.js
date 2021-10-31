const container = document.querySelector(".character-container");
const characters = document.querySelectorAll("template");
const startDemo = document.querySelector("button");
const thunder = new Audio("thunder.mp3");
thunder.volume = 0.25;

startDemo.addEventListener("click", () => {
  document.querySelector(".paused-screen").remove();
  appearsCharacter();
  setInterval(() => appearsCharacter(), 8000);
});

const COLORS = [
  "navy", "red", "lime", "rebeccapurple",
  "gold", "fuchsia", "crimson"
];

const enableFlash = () => {
  const character = container.querySelector(".character");
  document.body.classList.add("flash");
  setTimeout(() => document.body.classList.remove("flash"), 3000);
  setTimeout(() => character.classList.add("halloween"), 1000);
  setTimeout(() => {
    thunder.currentTime = 0;
    thunder.play();
  }, 250);
};

const setNewCharacterGlow = () => {
  const selectedColor = Math.floor(Math.random() * COLORS.length);
  const color = COLORS[selectedColor];
  container.style.setProperty("--character-glow", color);
};

const appearsCharacter = () => {
  const selectedCharacter = Math.floor(Math.random() * characters.length);
  console.log("New character!", selectedCharacter);

  const oldCharacter = container.querySelector(".character");
  if (oldCharacter) { oldCharacter.remove(); }
  setNewCharacterGlow();
  setTimeout(() => enableFlash(), 3000);
  const newCharacter = characters[selectedCharacter].content.cloneNode(true);
  container.appendChild(newCharacter);
};
