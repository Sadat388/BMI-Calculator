import React, { useState } from "react";

export const Bmi = () => {
  // let myStyle = {
  //   color: 'white',
  //   backgroundColor: 'black'
  // }

  const [weight, setWeight] = useState("");
  const [heightFt, setheightFt] = useState("");
  const [heightIn, setheightIn] = useState("");
  // const [heightMeter, setheightMeter] = useState("");

  const [result, setResult] = useState(null);

  const handleClick = () => {
    const weightValue = parseFloat(weight);
    const heightFtValue = parseFloat(heightFt);
    const heightInValue = parseFloat(heightIn);
    // const heightMeterValue = parseFloat(heightMeter);

    if (!isNaN(weightValue) && !isNaN(heightFtValue) && !isNaN(heightInValue)) {
      setResult(
        weightValue / ((heightFtValue * 12 + heightInValue) * 0.0254) ** 2
      );
    } else {
      alert("Please enter valid numbers!");
    }

    // if (!isNaN(weightValue) && !isNaN(heightMeterValue)) {
    //   setResult(weightValue / (heightMeterValue * heightMeterValue));
    // } else {
    //   alert("Please enter valid numbers!");
    // }
  };

  const handleClickClear = () => {
    setWeight("");

    setheightFt("");
    setheightIn("");
    // setheightMeter("");
    setResult(null);
  };

  const nextBox = (current, next) => {
    if (current.value.length >= current.maxLength) {
      document.getElementById(next).focus();
    }
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
              value={heightFt}
              onChange={(event) => setheightFt(event.target.value)}
              className="input-ft"
              maxLength={1}
              onInput={(e) => nextBox(e.target, "in-box")}
            />
            <span>ft</span>
            <input
              type="text"
              value={heightIn}
              onChange={(event) => setheightIn(event.target.value)}
              className="input-in"
              maxLength={2}
              id="in-box"
            />
            <span>in</span>
            {/* <input
              type="text"
              value={heightMeter}
              onChange={(event) => setheightMeter(event.target.value)}
              placeholder="Enter your height (meter)"
            /> */}
          </div>

          {/* <div className="cm-">
            <span>switch to cm</span>
            <span>switch to m</span>
          </div> */}

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
