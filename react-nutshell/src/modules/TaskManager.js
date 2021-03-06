const remoteURL = "http://localhost:8088"

export default {
  getAll(userId) {
    return fetch(`${remoteURL}/tasks?userId=${userId}&_expand=user`)
    .then(result => result.json())
  },
  getAllCompleted(userId) {
    return fetch(`${remoteURL}/tasks?userId=${userId}&completed=true&_expand=user`)
    .then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/tasks/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(data => data.json())
},
update(editedTask) {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedTask)
  }).then(data => data.json());
},
patchComplete(editedTask) {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({completed : true})
  }).then(data => data.json());
},
patchIncomplete(editedTask) {
  return fetch(`${remoteURL}/tasks/${editedTask.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({completed : false})
  }).then(data => data.json());
}
}