import React from "react";

const Navbar = () => {
  return (
  <div className="navbar">
    <span className="logo">Maya Chat</span>
    <div className="user">
        <img src="https://i.pinimg.com/736x/bc/37/bb/bc37bbae423af2e926618754f7e992f4.jpg" alt=""/>
        <span>Johny</span>
        <button>Logout</button>

    </div>
  </div>
)
}
export default Navbar;