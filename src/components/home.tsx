import { useEffect, useState } from "react";
import { GameData, Activity, Round, Question } from "../data";

const initialData: GameData = {
  name: "My Game",
  heading: "Welcome to My Game",
  activities: [
    {
      activity_name: "Activity 1",
      order: 1,
      questions: [
        {
          is_correct: true,
          stimulus: "Question 1",
          order: 1,
          user_answers: ["Option 1"],
          feedback: "Correct!",
        },
        {
          is_correct: false,
          stimulus: "Question 2",
          order: 2,
          user_answers: ["Option 2"],
          feedback: "Incorrect.",
        },
      ],
    },
    {
      activity_name: "Activity 2",
      order: 2,
      questions: [
        {
          is_correct: true,
          stimulus: "Question 3",
          order: 1,
          user_answers: ["Option 3"],
          feedback: "Correct!",
        },
        {
          is_correct: false,
          stimulus: "Question 4",
          order: 2,
          user_answers: ["Option 4"],
          feedback: "Incorrect.",
        },
      ],
    },
    {
      round_title: "Round 1",
      order: 3,
      questions: [
        {
          is_correct: true,
          stimulus: "Question 5",
          order: 1,
          user_answers: ["Option 5"],
          feedback: "Correct!",
        },
        {
          is_correct: false,
          stimulus: "Question 6",
          order: 2,
          user_answers: ["Option 6"],
          feedback: "Incorrect.",
        },
      ],
    },
  ],
};

function Home() {
  const [data, setData] = useState<GameData | null>(null);

  useEffect(() => {
    const fetchDummyData = (): Promise<GameData> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(initialData);
        }, 1000); // Simulating an asynchronous operation with a delay of 1 second (1000 milliseconds)
      });
    };

    fetchDummyData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        // Handle the error
      });
  }, []);

  return (
    <div className="home-container card">
      {data && (
        <>
          <div className="card-heading">
            <h1 className="head-1 heading">{data.heading}</h1>
            <h2 className="head-2 heading">{data.name}</h2>
          </div>
          <div className="activities-container">
            {data.activities.map((activityOrRound, index) => (
              <div key={index} className="activity">
                {isActivity(activityOrRound) ? (
                  <h3 className="activity-name">
                    {activityOrRound.activity_name}
                  </h3>
                ) : (
                  <h3 className="round-title">{activityOrRound.round_title}</h3>
                )}
                <ul className="questions-list">
                  {activityOrRound.questions.map((question, questionIndex) => (
                    <li key={questionIndex} className="question">
                      <p>{question.stimulus}</p>
                      <p>{`Is Correct? ${question.is_correct}`}</p>
                      <p>{`Feedback: ${question.feedback}`}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Helper function to check if the object is an Activity or a Round
function isActivity(obj: Activity | Round): obj is Activity {
  return (obj as Activity).activity_name !== undefined;
}

export default Home;
