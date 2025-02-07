import React, { useEffect, useState } from "react";

export const HeaderDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="enableDarkMode">
      <div className="form-check form-switch">
        <span>Dark Mode</span>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={darkMode}
          onChange={handleToggle}
        />
        <label
          className="form-check-label"
          htmlFor="flexSwitchCheckDefault"
        ></label>
      </div>
    </div>
  );
};
