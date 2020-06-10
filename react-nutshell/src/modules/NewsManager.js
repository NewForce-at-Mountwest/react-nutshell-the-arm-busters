const remoteURL = "http://localhost:8088";

const NewsManager = {
  get(id) {
    return fetch(`${remoteURL}/newsArticles/${id}`).then((result) => result.json());
  },
  getAll() {
    // Refactor this fetch call to ask for animals that match the logged in user's id
    return fetch(`${remoteURL}/newsArticles`).then((result) => result.json());
  },
  delete(id) {
    return fetch(`${remoteURL}/newsArticles/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  post(newNewsArticle) {
    // refactor this fetch call to make sure that the new animal has the employeeId of the logged in user
    return fetch(`${remoteURL}/newsArticles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNewsArticle),
    }).then((data) => data.json());
  },
  update(editedNewsArticles) {
    // refactor this fetch call as well to make sure that the edited animal retains the logged in user's id
    return fetch(`${remoteURL}/newsArticles/${editedNewsArticles.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNewsArticles),
    }).then((data) => data.json());
  },
};

export default NewsManager;