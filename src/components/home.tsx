import { useState, useEffect } from "react";

import { GameData, Activity, Round } from "./../data";
import React from "react";

function Home() {
  // A use state  which stores the value fetched from the Api endpoint
  // then sets the Heading display in JSX
  const [headerValues, setHeader] = useState<GameData>();
  const [activityValues, setActivity] = useState<(Activity | Round)[]>([]);

  return (
    <div className="home-container card">
      <div className="card-heading">
        <h1 className="head-1 heading">{headerValues?.heading}</h1>
        <h2 className="head-2 heading">{headerValues?.name}</h2>
      </div>
      <div className="activity-container"></div>
    </div>
  );
}

export default Home;
