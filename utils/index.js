export const convertDateToTimestamp = date => {
  const dateArray = date.split('-');
  const dateToConvert = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0];
  return new Date(dateToConvert).getTime();
};
