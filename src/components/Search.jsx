import React from "react";

const Search = () => {
  return (
  <div className="search">
    <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
    </div>
    <div className="userChat">
      <img src="https://i.pinimg.com/736x/ae/e6/d4/aee6d45245609592339c8508ae27182d.jpg"/>
      <div className="userchatInfo">
        <span>Meyon</span>
      </div>
    </div>
  </div>
)
}
export default Search;