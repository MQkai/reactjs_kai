import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import MyPages from "./components/MyPages";
import AdminPages from "./components/AdminPages";
import AdminUpdate from "./components/AdminUpdate";
import ForgetPass from "./components/ForgetPass";
import PassUpdate from "./components/PassUpdate";
import UserUpdate from "./components/UserUpdate";
import ConfirmAcc from "./components/ConfirmAcc";
import HOME from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HOME />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyPages" element={<MyPages />} />
        <Route path="/AdminPages" element={<AdminPages />} />
        <Route path="/AdminUpdate" element={<AdminUpdate />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/PassUpdate" element={<PassUpdate />} />
        <Route path="/UserUpdate" element={<UserUpdate />} />
        <Route path="/ConfirmAcc" element={<ConfirmAcc />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
