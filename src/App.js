import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul, div } from "./actions/index";
import { useState } from "react";
import Add from "./Components/Add";
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
        <Add
          getValue={getValue}
          method1={add}
          method2={valSecond}
          dispatch={dispatch}
          val={val}
          sval={sval}
          name="Add"
        />
        <Add
          getValue={getValue}
          method1={sub}
          method2={valSecond}
          dispatch={dispatch}
          val={val}
          sval={sval}
          name="Sub"
        />

        <Add
          getValue={getValue}
          method1={mul}
          method2={valSecond}
          dispatch={dispatch}
          val={val}
          sval={sval}
          name="Mul"
        />

        <Add
          getValue={getValue}
          method1={div}
          method2={valSecond}
          dispatch={dispatch}
          val={val}
          sval={sval}
          name="Div"
        />

        <input type="text" value={myState} />
      </div>
    </>
  );
}
