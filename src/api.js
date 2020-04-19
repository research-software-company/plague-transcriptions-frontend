import store from "./Store";
import axios from "axios";
const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : "https://plague-backend.researchsoftwarehosting.org";

export default {
  getPendingManuscripts(formData) {
    //return fetch(`${BASE_URL}/manuscripts`);
    return axios.get(`${BASE_URL}/pending`);
  },

  startTranscribing(pageId) {
    return axios.put(`${BASE_URL}/pending/${pageId}`);
  },

  populateManuscripts() {
    this.getPendingManuscripts().then((response) => {
      store.state.manuscripts = response.data && response.data.manuscript;
    });
  },

  populate() {},
};
