import fetch from "node-fetch";

async function getPostcodes(code) {
  try {
    console.log(code);
    const response = await fetch(
      `https://api.postcodes.io/postcodes/${code}/autocomplete?limit=20`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.result);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getPostcodes;
