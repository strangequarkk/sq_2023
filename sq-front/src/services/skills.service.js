import axios from "axios";

export const baseURL = "http://localhost:8000/api";

export const retrieveAllSkills = (callback) => {
  axios
    .get(`${baseURL}/skills/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const deleteSkill = (id, callback) => {
  axios
    .delete(`${baseURL}/skills/${id}/`)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};

export const createSkill = (data, callback) => {
  axios
    .post(`${baseURL}/skills/`, data)
    .then((response) => {
      callback(response.data);
    })
    .catch((e) => {
      console.error(e);
    });
};
