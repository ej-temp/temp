export const getAllTemps = () => {
  return fetch('https://ej-temp.herokuapp.com/api/v1/temperatures')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch temperatures.';

      return json;
    })
    .then(json => json.map(temp => ({
      name: temp.name,
      temp: temp.temp
    })));
};

export const getDetails = (id) => {
  return fetch(`https://ej-temp.herokuapp.com/api/v1/temperatures/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch temperatures.';

      return json;
    });
};
