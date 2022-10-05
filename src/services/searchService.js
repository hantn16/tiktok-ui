import api from '~/utils/api';
export const getSearchResult = async (searchStr, type = 'less') => {
  try {
    const response = await api.get('users/search', {
      params: {
        q: searchStr,
        type,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
