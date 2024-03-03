import fetch from "node-fetch";

async function getPost(lat, lon) {
  try {
    console.log(lat, lon);
    const response = await fetch(
      `https://re.jrc.ec.europa.eu/api/PVcalc?lat=${lat}&lon=${lon}&raddatabase=PVGIS-SARAH&peakpower=3.5&pvtechchoice=crystSi&mountingplace=building&loss=20&outputformat=json`
    );
    const data = await response.json();
    console.log(data);

    const TotalsData = data.outputs.totals;
    const TotalsData2 = data.outputs.totals.fixed.E_y;
    console.log(TotalsData);
    console.log(TotalsData2);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default getPost;
