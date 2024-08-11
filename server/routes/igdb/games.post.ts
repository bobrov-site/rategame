export default defineEventHandler(async (event) => {
  const { accessToken, gameName } = await readBody(event);
  const { igdbIdClient } = useRuntimeConfig(event);
  try {
    const games = await axiosInstanceIgdb('/games', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-ID': igdbIdClient,
      },
      data: `search "${gameName}"; fields * ;`,
    });
    return games.data;
  } catch (e) {
    Promise.reject(e);
  }
});
