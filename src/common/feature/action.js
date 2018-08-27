export const FETCH_SOME_DATA = 'fetch_some_data';

export const fetchData = () => async (dispatch, getState, api) => {
  const response = await api.get('/users');

  dispatch({
    type: FETCH_SOME_DATA,
    payload: response.data
  });
};
