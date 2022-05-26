function Add(props) {
  const { getValue, method1, dispatch, val, sval, method2, name } = props;
  return (
    <>
      <input type="number" onChange={(e) => getValue(e)} />
      <input type="number" onChange={(e) => method2(e)} />
      <button onClick={() => dispatch(method1([val, sval]))}>
        {name}
      </button>{" "}
      <br />
    </>
  );
}

export default Add;
