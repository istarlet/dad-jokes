const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

// Using Async/Await

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.textContent = data.joke;
}

// Using .then()

// function generateJoke() {
//     const config = {
//       headers: {
//         Accept: "application/json",
//       },
//     };
//     fetch("https://icanhazdadjoke.com", config)
//       .then((res) => res.json())
//       .then((data) => {
//         jokeEl.textContent = data.joke;
//       });
//   }

jokeBtn.addEventListener("click", generateJoke);
