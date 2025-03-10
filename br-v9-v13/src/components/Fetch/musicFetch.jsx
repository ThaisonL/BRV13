function MusicFetch(accessKey) {
  const musicFetch = async (music) => {
    const accessKey = "d20e3f050c664757bd75120f5eb7462c";
    const url = "https://api.spotify.com/v1/me";

    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer " + accessKey,
      },
    });

    const data = await response.json();
  };
}
export default MusicFetch;
// Client Id 31a323de92b04237916795f08120acba

const client_id = "31a323de92b04237916795f08120acba";
const client_secret = "CLIENT_SECRET";

var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(client_id + ":" + client_secret).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});
