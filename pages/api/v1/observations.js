import axios from 'axios';

const BASE_URL = `https://api.stlouisfed.org/fred/`;

export default async (req, res) => {
  const seriesId = req.query['series_id'];
  const observationStart = req.query['observation_start'];
  const observationEnd = req.query['observation_end'];
  const API_KEY = req.query['api_key'];

  if (req.method === 'GET') {
    const response = await axios(
      `${BASE_URL}series/observations?file_type=json&series_id=${seriesId}&observation_start=${observationStart}&observation_end=${observationEnd}&api_key=${API_KEY}`
    );
    return res.json(response.data);
  }
};
