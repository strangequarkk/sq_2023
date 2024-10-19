import axios from "axios";
import DOMPurify from "dompurify";
import {
  giveLinksTargetBlank,
  giveImagesLazyLoad,
} from "../utils/processRichText";

const baseURL = import.meta.env.VITE_BASE_URL
  ? import.meta.env.VITE_BASE_URL
  : "https://strange-quark.com/api";

/* Get all projects from django API*/
export const retrieveAllProjects = (callback) => {
  axios
    .get(`${baseURL}/projects/`)
    .then((response) => {
      //project description must be sanitized because it comes from rich text editor, contains html
      const sanitizedData = response.data.map((project) => {
        //after data has been sanitized, ensure links have target blank and images are set to load lazy
        const polishedDescription = giveImagesLazyLoad(
          giveLinksTargetBlank(DOMPurify.sanitize(project.description))
        );
        return {
          ...project,
          description: polishedDescription,
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
