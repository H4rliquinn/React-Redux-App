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
  isFetching: false,
  error: "",
  saved: [
    {
      id: "12524",
      icon_url: "",
      value: "Chuck Norris can roundhouse kick you around the world."
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("ACTION", action.type);
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
      return {
        ...state,
        quote: {
          id: action.payload.id,
          icon_url: action.payload.icon_url,
          value: action.payload.value
        },
        isFetching: false,
        error: ""
      };
    case FETCHING_FAIL:
      console.log(action.payload);
      return state;
    case SAVE_JOKE:
      console.log("SAVE", action.payload);
      return {
        ...state,
        saved: [...state.saved, state.quote]
      };
    default:
      console.log("FAIL");
      return state;
  }
};
