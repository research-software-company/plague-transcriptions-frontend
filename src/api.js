import store from "./Store";
import axios from "axios";
console.log(process.env);
const BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default {
  getPendingManuscripts(formData) {
    //return fetch(`${BASE_URL}/manuscripts`);
    return axios.get(`${BASE_URL}/pending`);
  },

  sendTranscription({ transcriptionId, text1, text2, notes1, notes2, num_pages }) {
    let user_email =
      store.state.auth.loggedIn && store.state.auth.loggedIn.profileObj.email;
    if (user_email) {
      user_email = "guest";
    }

    return axios.put(`${BASE_URL}/transcription/${transcriptionId}`, {
      text1,
      text2,
      notes1,
      notes2,
      num_pages,
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
