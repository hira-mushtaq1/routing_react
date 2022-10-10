import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../screens/home";
import Service from "../screens/service";
import About from "../screens/about";
import Contact from "../screens/contact";
import NotFound from "../screens/notFound";
import Profile from "../screens/profile";

export default function RouterApp() {
  return (
    <>
      <Router>
        <div className="new">
          <Link to="/" sx={{ margin: "10px" }}>
            Home
          </Link>
          <Link to="about" sx={{ margin: "10px" }}>
            About
          </Link>
          <Link to="service" sx={{ margin: "10px" }}>
            Service
          </Link>
          <Link to="contact" sx={{ margin: "10px" }}>
            Contact
          </Link>
          <Link to="NotFound" sx={{ margin: "10px" }}>
            NotFound
          </Link>
          <Link to="Profile" sx={{ margin: "50px" }}>
            Profile
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="profile/:userName" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
