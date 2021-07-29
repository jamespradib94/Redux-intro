import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ReduxBasic(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.user.counter);
  const handleIncrease = () => {
    dispatch({ type: "Increase" });
  };
  const handleDecrease = () => {
    dispatch({ type: "Decrease" });
  };
  return (
    <>
      <p style={{ fontSize: "20px" }}>Redux Intro</p>
      <button
        id="button"
        className="btn btn-secondary"
        onClick={handleIncrease}
      >
        Increase Counter
      </button>

      <button
        id="button"
        className="btn btn-secondary"
        onClick={handleDecrease}
      >
        Decrease Counter
      </button>
      <p>{counter}</p>
    </>
  );
}

export { ReduxBasic };
