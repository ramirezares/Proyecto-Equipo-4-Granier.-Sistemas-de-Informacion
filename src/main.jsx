//import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductSetting from "./pages/ProductSetting";
//import { WebRouter } from "./router/WebRouter.jsx";
//import { RouterProvider } from "react-router-dom";
//import { UserProvider } from "./hooks/UserContext"; // Ajusta la ruta si es necesario

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductSetting></ProductSetting> 
);

/*
<React.StrictMode>
    <UserProvider>
      <RouterProvider router={WebRouter} />
    </UserProvider>
  </React.StrictMode>
*/