import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <Section>This is my section</Section>
      <Counter setCount={setCount}> Count is {count} </Counter>
      <List
        items={["cofee", "tako", "mako"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;