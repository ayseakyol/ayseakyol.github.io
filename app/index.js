import { GithubIo } from "./githubio.js";

// document.getElementById("btnRepos").onclick = async () => {
//   try {
//     const url = `https://api.github.com/users/ayseakyol/repos`;
//     const response = await fetch(url);
//     const result = await response.json();

//     const myGit = new GithubIo(result);
//     console.log(myGit);
//     const view = await myGit.renderRepos();
//     const rootRepo = document.getElementById("root-repo");
//     rootRepo.innerHTML = "";
//     rootRepo.appendChild(view);
//   } catch (err) {
//     console.log(err);
//   }
// };

document.getElementById("btnSpclRepos").onclick = async () => {
  try {
    let repos = [
      "ayseakyol.github.io",
      "summer-camp",
      "tic-tac-toe",
      "booklist-app",
      "budget-app",
      "calculator-refactor",
      "weather-app",
    ];
    const rootSpcl = document.getElementById("root-spcl-repo");
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
  } catch (err) {
    console.log(err);
  }
};
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/
