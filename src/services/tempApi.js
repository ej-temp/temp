export const getAllTemps = () => {
  return fetch('')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch temperatures.';

      return json;
    })
    .then(json => json.map(temp => ({
      location: temp.location,
      temp: temp.temp
    })));
};
