import axios from "axios";
import BASE_URL from "../Axios/BASE_URL";

import client from "../Axios/auth";
import { SUCCESS } from "../utils/constants";

const initialState = {
    user: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER/SETUSER":
            return {
                ...state,
                user: action.payload.user,
            }

        default:
            return state;
    }
}

// export const getUser = () => async (
//     dispatch,
//     getState
//   ) => {
//     try {
//       const url = "/api/users/getUser";
//       const res = await axios.get(url);
//       const data = res.data;
  
//       dispatch({
//         type: "USER/SETUSER",
//         payload: {
//           user: data,
//         },
//       });

//       return SUCCESS;
  
//     } catch (err) {
//       console.log("getUser err :>> ", err.message);
//       return err.message;
//     }
//   };


export default userReducer;