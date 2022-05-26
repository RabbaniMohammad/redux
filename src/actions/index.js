export function add(num) {
  return {
    type: "ADD",
    payload: num,
  };
}

export function sub(num) {
  return {
    type: "SUB",
    payload: num,
  };
}

export function mul(num) {
  return {
    type: "MUL",
    payload: num,
  };
}
export function div(num) {
  return {
    type: "DIV",
    payload: num,
  };
}
