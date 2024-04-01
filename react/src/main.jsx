import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router.jsx";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*
      Cung cấp một cách cấu hình router cho toàn bộ ứng dụng, tách biệt phần
      logic routing ra khỏi thành phần giao diện
    */}
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
