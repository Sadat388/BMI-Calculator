import React from "react";

export const HeaderDarkMode = () => {
  return (
    <>
      <div className="darkMode">
        <div className="form-check form-switch">
          <span>Dark Mode</span>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
          ></label>
        </div>
      </div>
    </>
  );
};
