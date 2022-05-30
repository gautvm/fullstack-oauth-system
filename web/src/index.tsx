import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextComponent } from "./contexts/UserContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextComponent>
      <App />
    </UserContextComponent>
  </React.StrictMode>
);
