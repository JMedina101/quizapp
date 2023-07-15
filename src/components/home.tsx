import { GameData } from "./../data";

const dummyData: GameData = {
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
  // A use state  which stores the value fetched from the Api endpoint
  // then sets the Heading display in JSX
  const fetchDummyData = (): Promise<GameData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000); // Simulating an asynchronous operation with a delay of 1 second (1000 milliseconds)
    });
  };

  // Usage
  fetchDummyData()
    .then((data) => {
      console.log("Fetched data:", data);
      // Use the fetched data as needed
    })
    .catch((error) => {
      // Handle the error
    });

  return (
    <div className="home-container card">
      <div className="card-heading">
        <h1 className="head-1 heading">heading 1</h1>
        <h2 className="head-2 heading">heading 2</h2>
      </div>
    </div>
  );
}

export default Home;
