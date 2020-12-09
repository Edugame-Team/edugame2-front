import Toast from 'react-native-toast-message';

// const host = "192.20.10.2:3000";
const host = 'http://192.168.1.87:3000/api';

const request = (type, url, body, setLoading) => {
  const options = {
    method: type,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (type === 'POST') options.body = JSON.stringify(body);
  console.log(options);

  return fetch(`${host}/${url}`, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      Toast.show({
        text1: 'Error',
        text2: error.toString(),
        type: 'error',
        position: 'bottom',
      });
    })
    .finally(() => {
      if (setLoading !== undefined) setLoading(false);
    });
};

export const requestPost = (url, body, setLoading) => request('POST', url, body, setLoading);

export const requestGet = (url, body, setLoading) => request('GET', url, body, setLoading);
