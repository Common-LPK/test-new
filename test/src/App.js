import React from "react";
import { useState } from "react";

function App({ node }) {
  const [btn, setBtn] = useState(false);
  const arr = [];

  function click() {
    setBtn(!btn);
  }

  console.log('fiber', node);

  function createNode(fiberNode) {
    if (Object.keys(fiberNode).length === 0) return;
    console.log('input', fiberNode);
    let name;
    let node;
    if (fiberNode.alternate) {
      node = fiberNode.alternate;
    } else {
      node = fiberNode;
    }

    if (node.tag === 3) {
      name = "root";
    } else if (node.tag === 0) {
      name = node.elementType.name;
    } else {
      name = node.elementType;
    }

    arr.push(name);

    if (fiberNode.child) {
      console.log('child');
      createNode(fiberNode.child);
    }

    if (fiberNode.sibling) {
      console.log(name, "'s sibling");
      createNode(fiberNode.sibling);
    }
  }

  setTimeout(() => {
    createNode(node.alternate);
    console.log(arr);

  }, 0);

  return (
    <div>
      <A btn={btn}/>
      <button onClick={click}>클릭!</button>
      <D />
    </div>
  );
}

function A({ btn }) {
  return (
    <div>
      {!btn && <C />}
      {!btn && <B />}
    </div>
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

function D() {
  return (
    <div>
      I am D
    </div>
  )
}

export default App;
