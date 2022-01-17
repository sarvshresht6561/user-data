import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const returnResponse = async (state, name) => {
  let result;
  try {
    switch (name) {
      case "ADD": {
        result = await axios.post(`${baseUrl}${name.toLowerCase()}`, {
          content: state.add,
        });
        break;
      }
      case "UPDATE": {
        result = await axios.put(`${baseUrl}${name.toLowerCase()}`, {
          searchContent: state.search,
          newContent: state.update,
        });
        break;
      }
    }
    return result;
  } catch (err) {
    console.log(err);
  }
};
