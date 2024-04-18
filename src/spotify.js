import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "883798b6203c4253a7545d00b47acdce";
const client_secret = "15192d1f27aa46c288f6de2305f7336b"
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&client_secrete=${client_secret}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;