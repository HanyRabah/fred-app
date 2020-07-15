import axios from 'axios';

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export const getSeries = seriesId => {
  return axios
    .get(
      `${BASE_URL}/api/v1/series?file_type=json&series_id=${seriesId}&api_key=${API_KEY}`
    )
    .then(res => res.data);
};

export const getObservations = (seriesId, observationStart, observationEnd) => {
  return axios
    .get(
      `${BASE_URL}/api/v1/observations?file_type=json&series_id=${seriesId}&observation_start=${observationStart}&observation_end=${observationEnd}&api_key=${API_KEY}`
    )
    .then(res => res.data);
};
