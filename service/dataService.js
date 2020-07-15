import { getSeries, getObservations } from '../actions';
import { convertDateToTimestamp } from '../utils';

let cacheObject = {}; // caching data inside that object to save api requests

export const getData = async seriesId => {
  if (cacheObject[`chart-${seriesId}`]) {
    return cacheObject[`chart-${seriesId}`];
  }
  const seriesDetails = await getSeries(seriesId);
  // get the observation end and start date from observations
  const dates = getObservationsDates(seriesDetails.seriess[0]);
  // use the dates and series Id to load the observations data
  const observationsDetails = await getObservations(
    seriesId,
    dates.start,
    dates.end
  );
  // clean up the data
  const series = filterSeriesData(observationsDetails);
  // cache api response in chache object to save requests later
  cacheObject[`chart-${seriesId}`] = { series, ...seriesDetails.seriess[0] };
  return { series, ...seriesDetails.seriess[0] };
};

const getObservationsDates = seriesDetails => {
  const { observation_start, observation_end } = seriesDetails;
  return { start: observation_start, end: observation_end };
};

const filterSeriesData = data => {
  let { observations } = data;
  // remove '.' in values which is mean nothing
  const filteredData = observations.filter(a => !isNaN(a.value));
  // return filtered data after converting the value to number not string
  // and converting the dates to timestamp as used in charts
  return filteredData.map(series => {
    const date = convertDateToTimestamp(series.date);
    const value = Number(series.value);
    return [date, value];
  });
};

export const subtractSeriesValues = (dataOne, dataTwo) => {
  const subtractedData = [];
  // Subtract the value of 2 data and add it to a new Array
  dataOne.series.filter(a => {
    return dataTwo.series.some(b => {
      if (a.date === b.date) {
        const date = a[0];
        const value = Number((a[1] - b[1]).toFixed(2));
        subtractedData.push([date, value]);
        return true;
      }
      return false;
    });
  });
  return subtractedData;
};
