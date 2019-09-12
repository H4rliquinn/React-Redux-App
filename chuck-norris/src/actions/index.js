import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";
export const SAVE_JOKE = "SAVE_JOKE";

export const getJoke = () => dispatch => {
  dispatch({ type: FETCHING_START, payload: "Please Wait" });
  axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(res => {
      //   console.log("RES", res.data);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FAIL,
        payload: err
      });
    });
};

export const saveJoke = () => {
  return { type: SAVE_JOKE };
};
