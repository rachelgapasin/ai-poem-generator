function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 20
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
