function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt-input");
  let poemType = document.querySelector('input[name="poem_type"]:checked');

  if (!poemType) {
    alert("Please select a poem type.");
    return;
  }

  let key = "d60fd2e148aef51f4643441eotf6b3fb";
  let context =
    "The poem must be AI-generated. Do NOT take a poem off of the Internet. The poem should have the proper amount of lines depending on the type of poem selected in poemType, and it should follow the rules for that poem type (for example, a sonnet has 14 lines and uses iambic pentameter). If the type is 'haiku', generate a poem with exactly 3 lines. If the type is 'free-verse', generate a poem with only 4-6 lines. If the type is 'sonnet', generate a poem with exactly 14 lines. Use <br /> to separate each of the lines. Do not include a title. Here is an example: How do I love thee? Let me count the ways. <br />I love thee to the depth and breadth and height <br />My soul can reach, when feeling out of sight <br />For the ends of being and ideal grace.";
  let prompt = `Generate a ${poemType.value} about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayPoem);

  let poemContainer = document.querySelector(".poem-container");
  poemContainer.removeAttribute("hidden");

  new Typewriter("#poem", {
    strings: "Generating poem...",
    autoStart: true,
    delay: 20,
    deleteSpeed: 20,
    loop: true,
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
