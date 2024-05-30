import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./component/Navbar";

// Router Import
import Home from "./pages/Home";
// import Registration from "./pages/Registration";
import Event_Details from "./pages/Event_Details";
import Event_Location from "./pages/Event_Location";
import Contact_Us from "./pages/Contact_Us";
import Login from "./pages/loginRegis";
import UserRegister from "./pages/userRegist";
import CheckOut from "./pages/CheckOut";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Registration" element={<Registration />} /> */}
        <Route path="/Event_Details" element={<Event_Details />} />
        <Route path="/Event_Location" element={<Event_Location />} />
        <Route path="/Contact_Us" element={<Contact_Us />} />
        <Route path="/loginRegis" element={<Login />} />
        <Route path="/userRegist" element={<UserRegister />} />
        <Route path="/CheckOut" element={<CheckOut />} />
      </Routes>
    </>
  );
};

export default App;
