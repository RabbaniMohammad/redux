const initialState = 0;

const upDown = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return action.payload[0] + action.payload[1];
    case "SUB":
      return action.payload[0] - action.payload[1];
    case "MUL":
      return action.payload[0] * action.payload[1];
    case "DIV":
      return action.payload[0] / action.payload[1];
    default:
      return state;
  }
};

export default upDown;
