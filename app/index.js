import { GithubIo } from "./githubio.js";

document.getElementById("btnRepos").onclick = async () => {
  const url = `https://api.github.com/users/ayseakyol/repos`;
  const response = await fetch(url);
  const result = await response.json();
  ///////////////
  const myGit = new GithubIo(result);
  console.log(myGit);
  const view = await myGit.renderRepos();
  const rootRepo = document.getElementById("root-repo");
  rootRepo.innerHTML = "";
  rootRepo.appendChild(view);
};

document.getElementById("btnSpclRepos").onclick = async () => {
  let repos = ["booklist-app", "budget-app", "calculator-refactor"];
  const rootSpcl = document.getElementById("root-repo");
  rootSpcl.innerHTML = "";
  for (let repo of repos) {
    const url = `https://api.github.com/repos/ayseakyol/${repo}`;

    let response = await fetch(url, {
      method: "GET",
    });
    let result = await response.json();

    const mySpclGit = new GithubIo(result);
    console.log(mySpclGit);
    const view = await mySpclGit.renderSpclRepos();
    rootSpcl.appendChild(view);
  }
};

//myGithub.getInfoRepoCount();

//export { getRepos, getSpclRepos, clear };

// const btnRepos = document.getElementById("btnRepos");
// const btnSpclRepos = document.getElementById("btnSpclRepos");

// const divResult = document.getElementById("root");
// btnRepos.addEventListener("click", getRepos);
// btnSpclRepos.addEventListener("click", getSpclRepos);

// async function getRepos() {
//   clear();
//   let head = document.createElement("h3");
//   head.textContent = "My Repos";
//   divResult.appendChild(head);

//   const url = `https://api.github.com/users/ayseakyol/repos`;
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);

// async function getSpclRepos() {
//   let repos = ["booklist-app", "budget-app", "calculator-refactor"];
//   clear();

//   let head = document.createElement("h3");
//   head.textContent = "My Special Repos";
//   divResult.appendChild(head);

//   for (let repo of repos) {
//     const url = `https://api.github.com/repos/ayseakyol/${repo}`;

//     let response = await fetch(url, {
//       method: "GET",
//     });
//     let result = await response.json();

//     const anchor = document.createElement("a");
//     anchor.href = result.html_url;
//     anchor.textContent = result.full_name;

//     divResult.appendChild(anchor);
//     divResult.appendChild(document.createElement("br"));
//   }
// }

// function clear() {
//   while (divResult.firstChild) divResult.removeChild(divResult.firstChild);
// }

// document.getElementById('choose-pokemon-button').onclick = (event) => {
//     const pokeId = event.target.form.userId.value;
//     console.log('\nfetching pokemon with id ', pokeId);
//     fetch('https://pokeapi.co/api/v2/pokemon/' + pokeId)
//         .then(res => res.json())
//         .then(pokeData => {
//             console.log('pokemon data from API', pokeData);
//             return new Pokemon(pokeData);
//         })
//         .then(pokemon => {
//             console.log('new pokemon instance', pokemon);
//             const view = pokemon.render();
//             document.getElementById('root').appendChild(view);
//         })
//         .catch(err => console.error(err));

// }
