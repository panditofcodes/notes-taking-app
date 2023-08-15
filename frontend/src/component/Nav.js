import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Nav() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  const [navbarClass, setNavbarClass] = useState(
    "navbar navbar-expand-lg bg-body-tertiary"
  );

  const logout = async () => {
    try {
      window.alert("You will be Logged Out!");
      const res = await fetch("/logout");

      if (res.ok) {
        navigate("/");
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleScroll = () => {
    const top = window.scrollY;
    if (top > 100) {
      setNavbarClass("navbar fixed-top navbar-expand-lg bg-body-tertiary");
    } else {
      setNavbarClass("navbar navbar-expand-lg bg-body-tertiary");
    }
  };

  const getData = async () => {
    try {
      const response = await fetch("/getData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      setUserData(data);

      if (!response.status === 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className={navbarClass} data-bs-theme="dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/Landingpage" className="navbar-brand">
          {userData.name}'s Notes
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Addnote" className="nav-link active" aria-current="page">
                Add Note
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SavedNote" className="nav-link active" aria-current="page">
                Saved Note
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bin" className="nav-link active" aria-current="page">
                Bin
              </Link>
            </li>
          </ul>
          <Link
            onClick={logout}
            className="nav-link active"
            aria-current="page"
            style={{
              backgroundColor: "#FF0000",
              borderRadius: "4px",
              padding: "8px 16px",
              color: "#FFFFFF",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
          >
            Sign Out
          </Link>
        </div>
      </div>
    </nav>
  );
}
