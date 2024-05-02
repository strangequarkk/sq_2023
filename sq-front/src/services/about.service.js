import axios from "axios";
import DOMPurify from "dompurify";
import {
  giveLinksTargetBlank,
  giveImagesLazyLoad,
} from "../utils/processRichText";

const baseURL = import.meta.env.VITE_BASE_URL;

/* Get all projects from django API*/
export const retrieveAboutContent = (callback) => {
  axios
    .get(`${baseURL}/about/`)
    .then((response) => {
      //project description must be sanitized because it comes from rich text editor, contains html
      const sanitizedData = response.data.map((about) => {
        //after data has been sanitized, ensure links have target blank and images are set to load lazy
        const polishedContent = giveImagesLazyLoad(
          giveLinksTargetBlank(DOMPurify.sanitize(about.content))
        );
        return polishedContent;
      });
      callback(sanitizedData[0]);
    })
    .catch((e) => {
      console.error(e);
    });
};
