// home.js
import { useEffect, useState } from "react";
import { GameData, Activity, Round } from "../data";
import { Link } from "react-router-dom";

function Home() {
  const [headerValues, setHeader] = useState<GameData | null>(null);
  const [activityValues, setActivity] = useState<(Activity | Round)[]>([]);

  useEffect(() => {
    const fetchQuestionaire = (): Promise<GameData> => {
      return fetch("/.netlify/functions/payload")
        .then((response) => response.json())
        .then((fetchedData) => {
          return fetchedData;
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
          throw error;
        });
    };
    fetchQuestionaire()
      .then((fetchedData) => {
        setHeader(fetchedData);
        setActivity(fetchedData.activities);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return (
    <div className="home-container card">
      <div className="card-heading">
        <h1 className="head-1 heading">{headerValues?.heading}</h1>
        <h2 className="head-2 heading">{headerValues?.name}</h2>
      </div>
      <div className="activity-container">
        {activityValues.map((currActivity) => (
          <div key={currActivity.order} className="activity">
            <Link
              to={{
                pathname: "/questions",
                search: `?actNum=${currActivity.order}`,
              }}
              className="activity-link"
            >
              <h2 className="activty">
                {(currActivity as Activity)?.activity_name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
