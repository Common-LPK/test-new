import React from "react";
import { useState } from "react";

const arr = [];

function App(props) {
  const [btn, setBtn] = useState(false);
  const fiberNode = { ...props.node };

  function click() {
    setBtn(!btn);
  }

  // console.log(fiberNode.alternate);
  createNode(fiberNode.alternate);

  console.log(arr);

  return (
    <div>
      <A />
      <button onClick={click}>클릭!</button>
      {btn && <B />}
    </div>
  );
}

function A() {
  return (
    <C />
  )
}

function B() {
  return (
    <div>
      This is B
    </div>
  )
}

function C() {
  return (
    <div>
      This is C
    </div>
  )
}

function createNode(fiberNode) {
  const obj = { ...fiberNode };

  arr.push(obj);
  console.log('child',obj, obj.child)
  if (obj.child === null) {
    if (obj.sibling === null) {
      return;
    }
    console.log('s', obj.sibling)
    createNode(obj.sibling);
  }
  console.log('c', obj.child)
  createNode(obj.child);
}

export default App;
