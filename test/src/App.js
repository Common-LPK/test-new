import React from "react";
import { useState } from "react";


function App(props) {
  const [btn, setBtn] = useState(false);
  const fiberNode = { ...props.node };
  const arr = [];

  function click() {
    setBtn(!btn);
  }


  function createNode(fiberNode) {
    // console.log('input', fiberNode);
    const obj = { ...fiberNode };
    let name;
  
    if (fiberNode.tag === 3) {
      name = "root";
    } else if (fiberNode.tag === 0) {
      name = fiberNode.elementType.name;
    } else {
      name = fiberNode.elementType;
    }
  
    arr.push(name);
    // console.log(obj);

    if (obj.child) {
      const obj2 = { ...obj.child };
      createNode(obj2);
    }

    if (obj.sibling) {
      const obj1 = { ...obj.sibling };
      createNode(obj1);
    }

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

export default App;
