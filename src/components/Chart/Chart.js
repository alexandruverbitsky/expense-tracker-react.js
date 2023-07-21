import React, { useState } from "react";
import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((dp) => dp.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMax}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
