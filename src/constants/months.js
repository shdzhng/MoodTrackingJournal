const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const feelingCounter = {
  loved: 0,
  happy: 0,
  calm: 0,
  sad: 0,
  anxious: 0,
  angry: 0,
};

const monthsObj = {
  January: 0,
  February: 0,
  March: 0,
  April: 0,
  May: 0,
  June: 0,
  July: 0,
  August: 0,
  September: 0,
  October: 0,
  November: 0,
  December: 0,
};

const monthlyCounterObj = {
  loved: monthsObj,
  happy: monthsObj,
  calm: monthsObj,
  sad: monthsObj,
  anxious: monthsObj,
  angry: monthsObj,
};

export { months, monthlyCounterObj, monthsObj };
