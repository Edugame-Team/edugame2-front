/* eslint-disable no-console */
import Toast from 'EGComponents/Toast/';

const host = 'http://192.20.10.2:3000';
// const host = 'http://google.com/api';

const request = (
  type, url, body, setLoading, toastText
) => {
  if (setLoading !== undefined) setLoading(true);

  const options = {
    method: type,
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (type === 'POST') options.body = JSON.stringify(body);

  return fetch(`${host}/${url}`, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error);
      if (toastText !== undefined) {
        Toast.show({
          text: toastText,
          type: 'error',
          timeoutHide: 7000
        });
      }
    })
    .finally(() => {
      if (setLoading !== undefined) setLoading(false);
    });
};

export const requestPost = ({
  url, body, setLoading = () => {}, toastText = undefined
}) => request('POST', url, body, setLoading, toastText);

export const requestGet = ({
  url, body, setLoading = () => {}, toastText = undefined
}) => request('GET', url, body, setLoading, toastText);
