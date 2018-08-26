export const FETCH_SOME_DATA = 'fetch_some_data';

const { dump } = require('dumper.js');

export const fetchData = () => async (dispatch, getState, api) => {
  dump(api);
  const response = await api.get('/users');

  dispatch({
    type: FETCH_SOME_DATA,
    payload: response.data
  });
};
