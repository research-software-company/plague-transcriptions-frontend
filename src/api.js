import store from "./Store";
import axios from "axios";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://plague-backend.researchsoftwarehosting.org";

export default {
  getPendingManuscripts(formData) {
    //return fetch(`${BASE_URL}/manuscripts`);
    return axios.get(`${BASE_URL}/pending`);
  },

  sendTranscription({ transcriptionId, text }) {
    let user_email =
      store.state.auth.loggedIn && store.state.auth.loggedIn.profileObj.email;
    if (user_email) {
      user_email = "guest";
    }

    return axios.put(`${BASE_URL}/transcription/${transcriptionId}`, {
      text,
      user_email,
    });
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
