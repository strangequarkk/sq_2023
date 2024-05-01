import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const retrieveAllResumeItems = (callback) => {
  axios
    .get(`${baseURL}/resume/`)
    .then((response) => {
      const orderedByEndDate = response.data.sort((a, b) => {
        let orderResult = b.end_date == null ? true : b.end_date > a.end_date;

        console.log(
          "date sorting: b end date",
          b.end_date,
          "a end date",
          a.end_date,
          "result",
          orderResult
        );
        return orderResult;
      });
      callback(orderedByEndDate);
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
