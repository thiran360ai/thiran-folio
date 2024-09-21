// App.js
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/contactus";
import Folio from "./components/Folio";
import NewNavbar from "./components/nav";
import Cwithus from "./chatwithus";
import Employee from "./components/Employee"; // Import the new Employee component
import banner3 from "./banner3.png"; // Import the image

function App() {
  // Style for the first banner section
  const bannerStyle = {
    backgroundImage: `url(${banner3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh", // Full viewport height
    width: "100%",
    display: "flex", // Center the content inside
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "2rem",
  };

  // Style for the rest of the content after the banner
  const contentStyle = {
    background: `url(${banner3}) no-repeat center center fixed`, // Same banner image in the background of the rest of the page
    backgroundSize: "cover",
    minHeight: "50vh", // Ensure content fills the screen
    padding: "20px",
  };

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);

  const cardRefs = {
    card1: card1Ref,
    card2: card2Ref,
    card3: card3Ref,
    card4: card4Ref,
    card5: card5Ref,
  };

  return (
    <div>
      {/* Full-screen banner section
      <div style={bannerStyle}>
      </div> */}

      {/* Main content that appears after the banner, with the banner image in the background */}

      <div style={contentStyle}>
        <Router>
          <NewNavbar cardRefs={cardRefs} />
          <Routes>
            <Route path="/" element={<Folio cardRefs={cardRefs} />} />
            <Route path="/employee/:name" element={<Employee />} />
          </Routes>
          <Cwithus />
          <ContactUs />
        </Router>
      </div>
    </div>
  );
}

const cardStyle = {
  height: "100vh", // Full viewport height for each section
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#e9ecef",
  margin: "10px 0",
};

export default App;
