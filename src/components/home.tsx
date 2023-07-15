import { useEffect, useState } from "react";
import { GameData, Activity, Round } from "../data";

function Home() {
  const [data, setData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchDummyData = (): Promise<GameData> => {
      return fetch("/api/payload.json")
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

    fetchDummyData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  return (
    <div className="home-container card">
      {data && (
        <div className="card-heading">
          <h1 className="head-1 heading">{data.heading}</h1>
          <h2 className="head-2 heading">{data.name}</h2>
        </div>
      )}
    </div>
  );
}

// Helper function to check if the object is an Activity or a Round
function isActivity(obj: Activity | Round): obj is Activity {
  return (obj as Activity).activity_name !== undefined;
}

export default Home;
