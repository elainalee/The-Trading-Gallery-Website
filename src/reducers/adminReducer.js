import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";
import { SUCCESS } from "../utils/constants";

const initialState = {
    feedbacks: undefined,
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADMIN/SETFEEDBACKS":
            return {
                ...state,
                feedbacks: action.payload.feedbacks,
            }

        default:
            return state;
    }
}

export const getFeedbacks = () => async (dispatch, getState) => {
    try {
      const url = BASE_URL + "/admin/getFeedbacks";
      const res = await client.get(url);
      const data = res.data;

      dispatch({
        type: "ADMIN/SETFEEDBACKS",
        payload: {
            feedbacks: data,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getFeedbacks err :>> ", err?.response?.data?.error);
      return err?.response?.data?.error;
    }
};

export default adminReducer;