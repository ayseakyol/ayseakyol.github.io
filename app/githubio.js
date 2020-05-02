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

    for (let repo of this.data) {
      const anchor = document.createElement("a");
      anchor.href = repo.html_url;
      anchor.textContent = repo.name;
      repos.appendChild(anchor);
      repos.appendChild(document.createElement("br"));
    }
    return repos;
  }
  renderSpclRepos() {
    const spclRepos = document.createElement("div");

    let head = document.createElement("h3");
    head.textContent = "My Special Repos";
    spclRepos.appendChild(head);

    const anchor = document.createElement("a");
    anchor.href = this.data.html_url;
    anchor.textContent = this.data.name;
    spclRepos.appendChild(anchor);
    spclRepos.appendChild(document.createElement("br"));

    return spclRepos;
  }
}
export { GithubIo };
