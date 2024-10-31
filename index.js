const containerEl = document.querySelector(".container");

const careers = ["PIYUSH", "DEV", "DIVYA", "HET","KAYURE","MEET","NEEL","NIRMAL","EVERYONE"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>HAPPY DIWALI TO ${careers[careerIndex].slice(0, 1) === "HAPPY" ? "DIWALI TO" : ":-"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
