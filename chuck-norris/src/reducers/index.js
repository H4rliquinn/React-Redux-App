import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  SAVE_JOKE
} from "../actions";

const initialState = {
  quote: {
    id: "",
    icon_url: "",
    value: ""
  },
  saved: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        isFetching: true,
        quote: {
          id: "",
          icon_url: "",
          value: "Getting your Joke!"
        }
      };
    case FETCHING_SUCCESS:
      //   console.log("ACTION", action);
      return {
        quote: {
          ...state,
          id: action.payload.id,
          icon_url: action.payload.icon_url,
          value: action.payload.value
        },
        isFetching: false,
        error: ""
      };
    case FETCHING_FAIL:
      return state;
    case SAVE_JOKE:
      return {
        ...state,
        saved: [...state.saved, state.quote]
      };
    default:
      return state;
  }
};
