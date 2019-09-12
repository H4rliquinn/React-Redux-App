import React, { useEffect } from "react";
import "./App.scss";
import { connect } from "react-redux";
import { getJoke, saveJoke } from "./actions";
import Saved from "./components/Saved.js";

function App({ getJoke, saveJoke, quote }) {
  useEffect(() => {
    getJoke();
  }, [getJoke]);

  // console.log("APP-Props", getJoke, quote);
  return (
    <div className="App">
      <header>
        <h1>True facts about Chuck Norris...</h1>
      </header>

      <div className="title">
        <div className="img">
          <img src={quote.icon_url} alt="Chuck Norris rules" />
        </div>
        <div className="quote">
          <p>{quote.value}</p>
        </div>
      </div>
      <div className="buttonBox">
        <button type="button" onClick={saveJoke}>
          Save fact
        </button>
        <button type="button" onClick={getJoke}>
          Next
        </button>
      </div>
      <Saved />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

const catagories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
];

export default connect(
  mapStateToProps,
  { saveJoke, getJoke }
)(App);
