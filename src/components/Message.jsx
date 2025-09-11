import React from "react";

const Message = () => {
  return (
  <div className="message owner">
    <div className="messageInfo">
      <img src="https://i.pinimg.com/736x/bc/37/bb/bc37bbae423af2e926618754f7e992f4.jpg" alt=""/>
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>Hello</p>
      {<img src="https://i.pinimg.com/736x/ae/e6/d4/aee6d45245609592339c8508ae27182d.jpg"/>}      

    </div>
  </div>
)
}
export default Message;