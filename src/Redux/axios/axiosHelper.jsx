import axios from "axios";

export const get = async (url) => {
    return axios
      .get(url)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  };
  