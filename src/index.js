import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import MyPages from "./components/MyPages";
import AdminPages from "./components/AdminPages";
import AdminUpdate from "./components/AdminUpdate";
import ForgetPass from "./components/ForgetPass";
import PassUpdate from "./components/PassUpdate";
import UserUpdate from "./components/UserUpdate";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyPages" element={<MyPages />} />
        <Route path="/AdminPages" element={<AdminPages />}/>
        <Route path="/AdminUpdate" element={<AdminUpdate />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/PassUpdate" element={<PassUpdate />} />
        <Route path="/UserUpdate" element={<UserUpdate />} />
       
      </Routes>
    </BrowserRouter>
);
