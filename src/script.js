function displaylocation(response) {
  console.log("hospital generated");
  let hospitalElement = document.querySelector("#hospital");
  hospitalElement.innerHTML = response.data.answer;
}

let apiKey="6010bf233cce4a37o06e80a3fbt0fe22";
let instructionInput = document.querySelector("#user-instructions");

function generatehospital(event) {
  event.preventDefault();
  
  let userInstructions = instructionInput.value;
  let prompt = `user instructions are: Generate the closest hospital to go to in ${userInstructions}`;
  let context = `You are a helpful assistant that is always helping people locate closest hospital in cases of emergency, Your mission is to generate with accuracy a list of all the closest hospital to go to, Remember to follow the user instructions, make it simple and include a <br> in between line and do not include the heading and list only the hospitals and not other places in the area, do not forget to include the telephone number and the location of the hospital with a <br> in between hospitals and list a maximun of 2 hospital with accuracy.`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;
  
  let hospitalElement = document.querySelector("#hospital");
  hospitalElement.classList.remove("hidden");
  hospitalElement.innerHTML = `<div class="generating">⏳ Generating the closest hospital you can go to ${userInstructions}</div>`;



  
  axios.get(apiURL).then(displaylocation);
}

let hospitalFormElement = document.querySelector("#hospital-generator-form");
hospitalFormElement.addEventListener("submit", generatehospital);