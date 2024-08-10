export default defineEventHandler(async (event) => {
  const { accessToken } = getQuery(event);
  const { igdbIdClient } = useRuntimeConfig(event);
  try {
    const games = await axiosInstanceIgdb.get('/games', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-ID': igdbIdClient,
      },
    });
    return games.data;
  } catch (e) {
    Promise.reject(e);
  }
});
