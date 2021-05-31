import React from "react";
import './ChartBar.css'

const ChartBar = ({month, amount, max}) => {
  console.log(`Hello ${month} ${amount} ${max}`);
  const percent = (amount * 100) / max;
  const topMargin = 100 - percent;
  const percentText = `${percent}%`
  const topMarginText = `${topMargin}%`;
  return (
    <div className="chart-bar">
      <div className="inner-top-margin" style={{height: topMarginText}}></div>
      <div className="inner" style={{height: percentText}}></div>
      <p>{month}</p>
    </div>
  )
};

export default ChartBar;
