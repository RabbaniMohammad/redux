import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul, div } from "./actions/index";
import { useState } from "react";
export default function App() {
  const myState = useSelector((state) => state.upDown);
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);
  const [sval, setSval] = useState(0);

  const getValue = (e) => {
    setVal(Number(e.target.value));
  };
  const valSecond = (e) => {
    setSval(Number(e.target.value));
  };
  return (
    <>
      <div>
        <input type="number" onChange={(e) => getValue(e)} />
        <input type="number" onChange={(e) => valSecond(e)} />
        <button onClick={() => dispatch(add([val, sval]))}>Add</button> <br />
        <input type="number" onChange={(e) => getValue(e)} />
        <input type="number" onChange={(e) => valSecond(e)} />
        <button onClick={() => dispatch(sub([val, sval]))}>Subtract</button>
        <br />
        <input type="number" onChange={(e) => getValue(e)} />
        <input type="number" onChange={(e) => valSecond(e)} />
        <button onClick={() => dispatch(mul([val, sval]))}>Multiply</button>
        <br />
        <input type="number" onChange={(e) => getValue(e)} />
        <input type="number" onChange={(e) => valSecond(e)} />
        <button onClick={() => dispatch(div([val, sval]))}>Division</button>
        <br />
        <input type="text" value={myState} />
      </div>
    </>
  );
}
