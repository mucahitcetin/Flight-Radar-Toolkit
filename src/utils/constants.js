export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185981",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "30418d35bamsh50070aa98b8accbp1ebf89jsnb5d8639c1cb0",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headers = {
  "x-rapidapi-key": "30418d35bamsh50070aa98b8accbp1ebf89jsnb5d8639c1cb0",
  "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  "Content-Type": "application/json",
};
