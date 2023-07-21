let homeButton = document.getElementById("home-btn");
let universeButton = document.getElementById("universe-btn");
let explorationButton = document.getElementById("exploration-btn");

export function toggleBackground(html) {
  if (html.includes('id="home"')) {
    makeButtonsDisabled();
    document.body.style.backgroundImage = "url('/assets/universe-1.png')";
    homeButton.style.color = "white";
  } else if (html.includes('id="universe"')) {
    makeButtonsDisabled();
    document.body.style.backgroundImage = "url('/assets/universe-2.png')";
    universeButton.style.color = "white";
  } else if (html.includes('id="exploration"')) {
    makeButtonsDisabled();
    document.body.style.backgroundImage = "url('/assets/universe-3.png')";
    explorationButton.style.color = "white";
  }

  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundSize = "cover";
}

function makeButtonsDisabled() {
  homeButton.style.color = "#c4c4cc";
  universeButton.style.color = "#c4c4cc";
  explorationButton.style.color = "#c4c4cc";
}
