// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
export const sortByDate = (sortBy) => ({
  type: 'SORT_BY_DATE',
  sortBy
})

// SORT_BY_AMOUNT
export const sortByAmount = (sortBy) => ({
  type: 'SORT_BY_AMOUNT',
  sortBy
})
// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
