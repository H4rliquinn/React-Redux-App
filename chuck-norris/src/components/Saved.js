import React from "react";
import { connect } from "react-redux";

function Saved(props) {
  console.log("SAVED", props.saved);
  return (
    <div className="saved">
      <div className="savedItem">
        <h2>Saved Facts!</h2>
      </div>
      {props.saved.map(item => {
        return (
          <div className="savedItem" key={item.id}>
            <div>{item.id}</div>
            <div>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    saved: state.saved
  };
};

export default connect(
  mapStateToProps,
  {}
)(Saved);
