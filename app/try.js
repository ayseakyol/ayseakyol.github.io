const btnRepos = document.getElementById("btnRepos");
const btnSpclRepos = document.getElementById("btnSpclRepos");

const divResult = document.getElementById("root");
btnRepos.addEventListener("click", getRepos);
btnSpclRepos.addEventListener("click", getSpclRepos);

async function getRepos() {
  clear();
  let head = document.createElement("h3");
  head.textContent = "My Repos";
  divResult.appendChild(head);

  const url = `https://api.github.com/users/ayseakyol/repos`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  for (let element of result) {
    const anchor = document.createElement("a");
    anchor.href = element.html_url;
    anchor.textContent = element.full_name;
    divResult.appendChild(anchor);
    divResult.appendChild(document.createElement("br"));
  }
}

async function getSpclRepos() {
  let repos = ["booklist-app", "budget-app", "calculator-refactor"];
  clear();

  let head = document.createElement("h3");
  head.textContent = "My Special Repos";
  divResult.appendChild(head);

  for (let repo of repos) {
    const url = `https://api.github.com/repos/ayseakyol/${repo}`;

    let response = await fetch(url, {
      method: "GET",
    });
    let result = await response.json();

    const anchor = document.createElement("a");
    anchor.href = result.html_url;
    anchor.textContent = result.full_name;

    divResult.appendChild(anchor);
    divResult.appendChild(document.createElement("br"));
  }
}

function clear() {
  while (divResult.firstChild) divResult.removeChild(divResult.firstChild);
}
