import axios from "axios";

export const getDataAction = async (data) => {
  const url = `https://api.github.com/users/${data.payload}`;
  const response = await axios.get(url);
  return response.data;
};

export const getAllDataAction = async(data)=>{
  const url = `https://api.github.com/users`;
  const response = await axios.get(url);
  return response.data;
}

