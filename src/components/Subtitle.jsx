import React from "react";
const Subtitle = ({ title = "| Motivation" }) => {
  // const Subtitle = ({ title }) => {
  const blueColor = "#1151D3";
  const greenColor = "#80C393";
  return (
    <div>
      <h2 style={{ color: blueColor }}>{title}</h2>
      <p style={{ color: greenColor }}>
        Rural communities are already disadvantaged socioeconomically
      </p>
    </div>
  );
};

export default Subtitle;
