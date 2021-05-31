import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = ({ values, max }) => {
  return <div className="chart">
    {Object.keys(values).map((key) => {
      return <ChartBar key={key} month={key} amount={values[key]} max={max} />
    })}
  </div>;
};

export default Chart;
