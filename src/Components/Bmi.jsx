import React, { useState } from "react";

export const Bmi = () => {
  // let myStyle = {
  //   color: 'white',
  //   backgroundColor: 'black'
  // }

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!isNaN(weightValue) && !isNaN(heightValue)) {
      setResult(weightValue / (heightValue * heightValue));
    } else {
      alert("Please enter valid numbers!");
    }
  };

  const handleClickClear = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <>
      <div className="title">
        <h1>BMI CALCULATOR</h1>
      </div>

      <div className="containerBmi">
        <div className="wei-hei">
          <div className="weight">
            <span>Weight: </span>
            <input
              type="text"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="Enter your weight (KG)"
            />
          </div>

          <div className="height">
            <span>Height: </span>
            <input
              type="text"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              placeholder="Enter your height (meter)"
            />
          </div>

          <div className="bmi-btn">
            <button class="btn btn-warning" onClick={handleClick}>
              Calculate
            </button>

            <button class="btn btn-danger" onClick={handleClickClear}>
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="bmi-result">
        Your BMI: {result !== null ? result.toFixed(2) : ""}
      </div>
    </>
  );
};
