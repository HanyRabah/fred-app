import axios from 'axios';

const BASE_URL = `https://api.stlouisfed.org/fred/`;

export default async (req, res) => {
  const seriesId = req.query['series_id'];
  const API_KEY = req.query['api_key'];
  if (req.method === 'GET') {
    const response = await axios.get(
      `${BASE_URL}series?file_type=json&series_id=${seriesId}&api_key=${API_KEY}`
    );
    return res.json(response.data);
  }
};
