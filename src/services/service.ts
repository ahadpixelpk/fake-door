import { axios } from "../config/axios";

export const getLessons = async () => {
  const { data } = await axios.get("/lessons/get-simple");
  return data;
};
