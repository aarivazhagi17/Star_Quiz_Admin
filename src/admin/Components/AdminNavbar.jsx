import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import "./AdminNavbar.css";
import AOS from 'aos';
function AdminNavbar() {
  const navigate = useNavigate();

  //AOS Animation
   useEffect(()=>{
      AOS.init({
        duration: 1000,
        once:true
      });
    },
  []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div data-aos="fade-down" className="Nav_Bar"
    >
      <h2 data-aos="fade-right">Admin Panel</h2>

      <button data-aos="fade-left" className="Nav_button"
      onClick= {handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
export default AdminNavbar;