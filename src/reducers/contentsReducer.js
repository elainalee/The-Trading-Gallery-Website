import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
  contents: undefined,
}

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
        return state;
}
}

export const submitFeedback = (firstName, lastName, email, subject, message) => async (
    dispatch,
    getState
  ) => {
    try {
      console.log("==== in submitFeedback");
      const url = BASE_URL + "/contents/submitFeedback";

      const payload = {
        firstName, lastName, email, subject, message
      };

      console.log("url: ", url);
      console.log("payload: ", payload);

      const res = await client.post(url, payload);

      const data = res.data;

      console.log("==== in submitFeedback, data is: ", data);

      return SUCCESS;
  
    } catch (err) {
      console.log("submitFeedback err :>> ", err.message);
      return err.message;
    }
};



export default contentsReducer;