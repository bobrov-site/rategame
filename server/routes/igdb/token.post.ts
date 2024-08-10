import axios from 'axios';

export default defineEventHandler(async (event) => {
  const { igdbIdClient, igdbSecretClient } = useRuntimeConfig(event);
  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', {
      client_id: igdbIdClient,
      client_secret: igdbSecretClient,
      grant_type: 'client_credentials',
    });
    return response.data;
  } catch (e) {
    Promise.reject(e);
  }
});
