import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const retrieveAllReviews = (callback) => {
  axios
    .get(`${baseURL}/reviews/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

// export const deleteReview = (id, callback) => {
//   axios
//     .delete(`${baseURL}/reviews/${id}/`)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };

// export const createReview = (data, callback) => {
//   axios
//     .post(`${baseURL}/reviews/`, data)
//     .then((response) => {
//       callback(response.data);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// };
