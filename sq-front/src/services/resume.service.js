import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const retrieveAllResumeItems = (callback) => {
  axios
    .get(`${baseURL}/resume/`)
    .then((response) => {
      //order by end dates most recent to oldest, with null (present) end dates
      //at the top
      const orderedByEndDate = response.data.sort((a, b) => {
        let orderResult = b.end_date == null ? true : b.end_date > a.end_date;
        return orderResult;
      });
      callback(orderedByEndDate);
    })
    .catch((e) => {
      console.error(e);
    });
};
