import * as api from '../api';

//Action Creators

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch(action);
  } catch {

  }
}