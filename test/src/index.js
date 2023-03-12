import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import deepCopy from "./deepCopy";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fiber = deepCopy(root._internalRoot);

root.render(
  <App node={fiber.current}/>
);

