import axios from "axios";
import { baseURL } from "baseUrl";

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
