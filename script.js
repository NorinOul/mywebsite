const moonPath =
  "M18 27.5C18 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 18 12.3122 18 27.5Z";
const circlePath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");
let toggleStatus = false;

darkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  morphTo(timeline, toggleStatus);
  toggleStatus = !toggleStatus;
});

function morphTo(timeline, toggler) {
  const ModeText = document.getElementById("ModeText");
  if (ModeText.innerHTML === "Dark Theme") {
    ModeText.innerHTML = "Light Theme";
  } else {
    ModeText.innerHTML = "Dark Theme";
  }
  ModeText.classList.toggle("DarkMode");
  timeline
    .add({
      targets: ".circle",
      d: [{ value: toggler ? circlePath : moonPath }]
    })
    .add(
      {
        targets: "#darkMode",
        rotate: toggler ? 40 : 320
      },
      "-=700"
    )
    .add(
      {
        targets: ".scene",
        backgroundColor: toggler ? "#f1f1f1" : "#333"
      },
      "-=700"
    );
};
function changeDarkModeText(darkMode){
  const DarkModeText = "Turn to Dark Mode";
  if(darkMode){
    DarkModeText = "Turn to Light Mode"
  }
  return DarkModeText
}
