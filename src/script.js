function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt-input");
  let key = "d60fd2e148aef51f4643441eotf6b3fb";
  let context =
    "Each poem should have exactly 4 lines that are written in HTML format, using <br /> to separate each of the lines. Do not include a title. Here is an example: How do I love thee? Let me count the ways. <br />I love thee to the depth and breadth and height <br />My soul can reach, when feeling out of sight <br />For the ends of being and ideal grace.";
  let prompt = `Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayPoem);

  let poemContainer = document.querySelector(".poem-container");
  poemContainer.removeAttribute("hidden");

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 20,
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
