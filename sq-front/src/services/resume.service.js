import axios from "axios";

export const baseURL = "https://strange-quark.com/api";

export const retrieveAllResumeItems = (callback) => {
  axios
    .get(`${baseURL}/resume/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

// export const deleteResumeItem = (id, callback) => {
//   axios
//     .delete(`${baseURL}/resume/${id}/`)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };

// export const createResumeItem = (data, callback) => {
//   axios
//     .post(`${baseURL}/resume/`, data)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };
