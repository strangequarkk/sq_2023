import axios from "axios";

export const baseURL = "http://localhost:8000/api";

export const retrieveAllProjects = (callback) => {
  axios
    .get(`${baseURL}/projects/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

// export const deleteProjects = (id, callback) => {
//   axios
//     .delete(`${baseURL}/projects/${id}/`)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };

// export const createProject = (data, callback) => {
//   axios
//     .post(`${baseURL}/projects/`, data)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };
