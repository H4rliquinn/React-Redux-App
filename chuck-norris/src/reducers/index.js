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
      id: "12523",
      icon_url: "",
      value: "Chuck Norris can track a bloodhound."
    },
    {
      id: "12523",
      icon_url: "",
      value: "Chuck Norris can roundhouse kick you around the world."
    }
  ]
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
      return {
        ...state,
        saved: [...state.saved, state.quote]
      };
    default:
      return state;
  }
};
