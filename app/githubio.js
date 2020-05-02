class GithubIo {
  name = "";
  url = "";

  constructor(data) {
    this.name = data.name;
    this.url = data.html_url;
    this.data = data;
  }
  renderRepos() {
    const repos = document.createElement("div");

    let head = document.createElement("h3");
    head.textContent = "My Repos";
    repos.appendChild(head);

    const olEl = document.createElement("ol");

    for (let repo of this.data) {
      const anchor = document.createElement("a");
      anchor.href = repo.html_url;
      anchor.textContent = repo.name;

      const liEl = document.createElement("li");
      liEl.appendChild(anchor);

      olEl.appendChild(liEl);
    }
    repos.appendChild(olEl);
    return repos;
  }
  renderSpclRepos() {
    const spclRepos = document.createElement("div");

    const ulEl = document.createElement("ul");

    /* let ol = document.createElement("ol");
    spclRepos.appendChild(ol);
 */
    const anchor = document.createElement("a");
    anchor.href = this.data.html_url;
    anchor.textContent = this.data.name;

    const liEl = document.createElement("li");
    liEl.appendChild(anchor);

    ulEl.appendChild(liEl);
    spclRepos.appendChild(ulEl);

    return spclRepos;
  }
}
export { GithubIo };
