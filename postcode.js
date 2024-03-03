import fetch from "node-fetch";

async function getLat(postcode) {
  try {
    console.log(postcode);
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${postcode}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.result.longitude);
    console.log(data.result.latitude);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getLat;
