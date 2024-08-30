import React, { useState, useMemo, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import "./Navbar.css";
import Images from "../constant/Images";
import ls from "localstorage-slim";
import { AppContext } from "../../global/state";

interface NavLink {
  label: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState ("")
  const [role, setRole] = useState ("")
  const activeToken = ls.get("wwph_token", {decrypt : true})
  

  useEffect(() => {
    let u:any = ls.get("wwph_usr", {decrypt : true});
    setRole(u.role);
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navigationLinks: NavLink[] = useMemo(
    () => [
      { label: "Home", path: "/" },
      { label: "For Company", path: "company" },
      { label: "Find Jobs", path: "find-job" },
      { label: "Career Tips", path: "career-tips" },
      { label: "About Us", path: "about" },
      { label: "Log in", path: "login" },
      // Add more links here
    ],
    []
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <div className={isScrolled ? "navbar-wrapper shadow-lg" : "navbar-wrapper"}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={Images.Logo} alt="logo" className="w-[150px] h-[40px]" />
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <LiaTimesSolid size={34} color=" #008000" className="icon" /> : <HiOutlineBars3BottomRight size={34} color="#FF00FF" className="icon" />}
        </div>
        <nav className={`navbar-menu ${isMenuOpen ? "open" : ""} font-sans text-[14px] font-medium`}>
         
          {navigationLinks.map(link => {
            if(link.path == "login" && activeToken) {

            }else{

            return <Link
            key={link.path}
            to={link.path}
            className={`menu-link ${activeLink === link.path ? "active" : ""}`}
            onClick={() => {toggleMenu(); handleClick(link.path);}}
          >
              {link.label}
            </Link>
            }
          }
          )}
         
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-[6px]">
            {
              activeToken
              ?
              <Link to={role == "Company" ? "/employers-dashboard" :"/candidate-dashboard"}>
                <button className="font-sans mr-2 text-[14px] font-medium text-[#000000] border-2 border-[#2AA100] hover:text-[#EE009D] py-[4px] px-[10px] rounded-[5px] ease-in duration-300 ">My Account</button>
              </Link>
              :
              <Link to="register" onClick={toggleMenu}>
                <button className="font-sans mr-2 text-[14px] font-medium text-[#000000] border-2 border-[#2AA100] hover:text-[#EE009D] py-[4px] px-[10px] rounded-[5px] ease-in duration-300 ">Sign Up</button>
              </Link>
            }
            <Link to="hire-talent" onClick={toggleMenu}>
              <button className="font-sans text-[14px] font-medium  text-[#FFFFFF]  bg-[#EE009D] hover:bg-[#2AA100] py-[6px] px-[10px] rounded-[5px] justify-center ease-in duration-300 ">Hire Talent</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
