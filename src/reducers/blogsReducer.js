import axios from "axios";
import client from "../Axios/auth";
import BASE_URL from "../Axios/BASE_URL";

import { SUCCESS } from "../utils/constants";

const initialState = {
  blogs: undefined,
  mainBlog: undefined,
  subBlogs: undefined,
  recentBlogs: undefined,
}

const blogsReducer = (state = initialState, action) => {
  switch (action.type) {
        case "BLOGS/SETBLOGS":
            return {
                ...state,
                blogs: action.payload.blogs,
            }

        case "BLOGS/SETMAINBLOG":
            return {
                ...state,
                mainBlog: action.payload.blogs,
            }    
        
        case "BLOGS/SETSUBBLOGS":
            return {
                ...state,
                subBlogs: action.payload.blogs,
            }

        case "BLOGS/SETRECENTBLOGS":
            return {
                ...state,
                recentBlogs: action.payload.blogs,
            }
    
        case "BLOGS/ADDBLOG":
            return {
                ...state,
                blogs: state.blogs + action.payload.blog,
            }

        default:
            return state;
}
}

export const getBlogs = (blogType) => async (
    dispatch,
    getState
  ) => {
    try {
      const url = BASE_URL + "/blogs/getBlogs" + ((blogType === undefined) ? "" : "?" + blogType + "=true");

    //   console.log("getBlogs: ", url);

      const res = await axios.get(url);
      const data = res.data;

      const blogTypeQuery = (blogType === "mainBlog") ? "MAINBLOG" : (blogType === "subBlog") ? "SUBBLOGS" : (blogType === "recentBlog") ? "RECENTBLOGS" : "BLOGS";
  
      dispatch({
        type: "BLOGS/SET" + blogTypeQuery,
        payload: {
            blogs: data,
        },
      });

      return SUCCESS;
  
    } catch (err) {
      console.log("getBlogs err :>> ", err.message);
      return err.message;
    }
};

export const getBlogDetail = (blogId) => async (
  dispatch,
  getState
) => {
  try {
    const url = BASE_URL + "/blogs/" + blogId;1
    const res = await axios.get(url);
    const data = res.data;

    return data;

  } catch (err) {
    console.log("getBlogDetail err :>> ", err.message);
    return err.message;
  }
};



export default blogsReducer;