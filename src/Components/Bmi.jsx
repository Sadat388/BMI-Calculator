import React from "react";

export const Bmi = () => {
  return (
    <div className="containerBmi">
      <div className="wei-hei">
        <div className="weight">
          <span>Weight: </span>
          <input type="text" placeholder="Enter your weight (KG)" />
        </div>

        <div className="height">
          <span>Height: </span>
          <input type="text" placeholder="Enter your height (meter)" />
        </div>
      </div>
    </div>
  );
};
