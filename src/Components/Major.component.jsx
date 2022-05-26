import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec } from "../actions";
function Major() {
  const myState = useSelector((state) => state.upDown);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" value={myState} />
      <button
        onClick={() => {
          dispatch(inc(10));
        }}
      >
        inc
      </button>
      <button
        onClick={() => {
          dispatch(dec(10));
        }}
      >
        desc
      </button>
    </div>
  );
}

export default Major;
