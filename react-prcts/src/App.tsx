/* import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum = 30;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("USers: ", users);

    return () => console.log("unmounting");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  const result = useMemo(() => fib(myNum), [myNum]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
 */

function App() {
  return (
    <>
      <h1>a</h1>
    </>
  );
}

export default App;
