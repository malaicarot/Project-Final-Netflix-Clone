import React from "react";
import "./Banner.css";
const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDw9obTqugByfSJKUlyhDpgjdUeJDAy8tp1g&usqp=CAU')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">Movie Name</h1>
        <div className="banner-button">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h2 className="banner-description">
          {truncate(
            `this is a test description this is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test description`,
            150
          )}
        </h2>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
