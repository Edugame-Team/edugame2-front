const request = (type, url, body, setLoading) => {
  const options = {
    method: type,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (type === "POST") options.body = JSON.stringify(body);

  return fetch(url, options)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => { if(setLoading !== undefined) setLoading(false) });
};

export const requestPost = (url, body, setLoading) => {
  return request("POST", url, body, setLoading);
};

export const requestGet = (url, body, setLoading) => {
  return request("GET", url, body, setLoading);
};
