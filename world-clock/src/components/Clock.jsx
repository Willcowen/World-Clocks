import React from "react";

export default function Clock({timeData}) {
    console.log(timeData)
  return (
    <div className="clock">
      <div className="clock--longhand"></div>
      <div className="clock--clock-shortHand"></div>
      <h2 className="clock--city-title"></h2>
      <h3 className="clock--address-line-1"></h3>
      <h3 className="clock--address-line-2"></h3>
      <h4 className="clock--HH-MM"></h4>
    </div>
  );
}
