exports.handler = async (event, context) => {
  try {
    const response = await fetch(
      "https://s3.eu-west-2.amazonaws.com/interview.mock.data/payload.json"
    );
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow requests from any origin
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({
        error: "An error occurred while fetching the data",
      }),
    };
  }
};
