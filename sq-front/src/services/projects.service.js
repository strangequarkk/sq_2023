import axios from "axios";
import DOMPurify from "dompurify";

export const baseURL = "https://strange-quark.com/api";

export const retrieveAllProjects = (callback) => {
  axios
    .get(`${baseURL}/projects/`)
    .then((response) => {
      const sanitizedData = response.data.map((project) => {
        return {
          ...project,
          description: DOMPurify.sanitize(project.description),
        };
      });
      callback(sanitizedData);
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
