import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router";
import MainLayouts from "./Layout/MainLayouts.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Login from "./AccountAuth/Login.jsx";
import Regsisation from "./AccountAuth/Regsisation.jsx";
import AuthContext from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthContext>
   <BrowserRouter>
      {/* main */}
      <Routes>
        <Route index element={<MainLayouts />} />

        {/* home here */}





        

        {/* authlayout */}
        <Route path="account">
          {/* this is parent */}
          <Route index element={<AuthLayout />} />
          {/* this is child */}

          <Route path="/account/login" element={<Login />} />
          <Route path="/account/registation" element={<Regsisation />} />
        </Route>



      </Routes>
    </BrowserRouter>
   </AuthContext>

  </StrictMode>
);
