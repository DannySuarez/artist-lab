export const getArtist = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Cant Fetch';
      return json;
    });
};

export const getReleases = () => {
  return fetch('http://musicbrainz.org/ws/2/release?artist=8bfac288-ccc5-448d-9573-c33ea2aa5c30&fmt=json')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Cant Fetch';
      return json;
    });
};
