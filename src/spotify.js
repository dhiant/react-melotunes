const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

// where authorization will done
const authEndpoint = "https://accounts.spotify.com/authorize";

// this is the URL where users'll be redirected to when authorization completes
const redirectURI = "http://localhost:5173/";

// scopes are basically the information Spotify user choose to share
const scopes = [
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
];

// link to direct users to spotify authorize page
export const loginURL = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirectURI}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;

// grap the access token from url of home page - after the authorization completed and been redirected to the home page
export const getAccessTokenFromURL = () => {
  return window.location.hash.substring(1).split("&")[0].split("=")[1];
};
