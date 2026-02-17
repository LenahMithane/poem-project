function displayPoem(response) {
  console.log("poem generated");
   new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let apiKey="6010bf233cce4a37o06e80a3fbt0fe22";
let instructionInput = document.querySelector("#user-instructions");

function generatePoem(event) {
  event.preventDefault();
  
  let userInstructions = instructionInput.value;
  let prompt = `user instructions are: Generate a french poem about ${userInstructions}`;
  let context = `You are a romantic love poem expert and love to write short poems, Your mission is to generate a four line poem, Remember to follow the user instructions, make it simple and include a <br> in between line and do not include the heading`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;
  
  console.log("generating poem...");
  console.log("prompt:", prompt);
  console.log("context:", context);
  
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);