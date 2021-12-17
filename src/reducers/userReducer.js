import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
    user: undefined,
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

export const getUser = () => async (
    dispatch,
    getState
  ) => {
    try {
      console.log("==== in get User");
      const url = BASE_URL + "/users/getUser";
      const res = await client.get(url);
      const data = res.data;

      console.log("==== in get User, data is: ", data);
  
      dispatch({
        type: "USER/SETUSER",
        payload: {
          user: data,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getUser err :>> ", err.message);
      return err.message;
    }
};

export const updateUser = (userInfo) => async (
  dispatch,
  getState
) => {
  try {
    console.log("==== in updateUser");
    const url = BASE_URL + "/users/updateUser";

    const payload = {
      ...userInfo
    };

    console.log("payload ", payload);

    const res = await client.post(url, payload);
    const data = res.data;

    console.log("==== in updateUser, data is: ", data);

    dispatch({
      type: "USER/SETUSER",
      payload: {
        user: data,
      },
    });

    return SUCCESS;

  } catch (err) {
    console.log("updateUser err :>> ", err.message);
    return err.message;
  }
};



// export const getUser = () => async (
//     dispatch,
//     getState
//   ) => {
//     try {
//       const url = BASE_URL + "/users/getUser";
//       const res = await client.get(url);
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