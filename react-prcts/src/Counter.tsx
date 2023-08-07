import { useReducer } from "react";

const initState = {
  count: 0,
};
const actionTyoe = {
  INcrement,
  DEcrement,
}
const reducer =() => {
  switch(action.actionTyoe){
    case INcrement:

    default:
      throw new Error 
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, action);
  return (
    <>
      <h1>Count</h1>
      <button>+</button>
      <button>-</button>
      <input type="text" />
    </>
  );
};

export default Counter;
