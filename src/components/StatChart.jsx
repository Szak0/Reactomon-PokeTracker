import React from "react";
import Plot from "react-plotly.js";

const StatChart = ({ hp, attack, defense, sAttack, sDefense, speed }) => {
  return (
    <div className="pokemon-stats-bar-chart">
      <Plot
        data={[
          {
            type: "bar",
            x: [
              "Health",
              "Attack",
              "Defense",
              "Special attack",
              "Special defense",
              "Speed",
            ],
            y: [hp, attack, defense, sAttack, sDefense, speed],
          },
        ]}
        layout={{
          autosize: true,
          width: 275,
          height: 240,
          title: "A Fancy Plot",
        }}
      />
    </div>
  );
};

export default StatChart;
