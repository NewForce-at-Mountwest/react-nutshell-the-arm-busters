// import apiKeys from './apiKeys.js'
const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/events/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/events`).then(result => result.json())
  },
  post(newEvent) {
    return fetch(`${remoteURL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    }).then((data) => data.json());
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/events/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
//   archiveEvent(id) {
//     return fetch(`${remoteURL}/events/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({"available": false}),
//     }).then((data) => data.json());
//   },
  updateEvent(editedEvent) {
    return fetch(`${remoteURL}/events/${editedEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEvent)
    }).then(data => data.json());
  }
}