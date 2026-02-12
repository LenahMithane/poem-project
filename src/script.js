function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Et nos amours Faut-il qu’il m’en souvienne La joie venait toujours après la peine",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);