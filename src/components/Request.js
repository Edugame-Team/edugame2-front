/* eslint-disable no-console */
import { AlertOk } from './Alert';

const host = 'http://192.20.10.2:3000';
// const host = 'http://google.com/api';

const request = (type, url, body, setLoading) => {
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
      AlertOk(error);
    })
    .finally(() => {
      if (setLoading !== undefined) setLoading(false);
    });
};

export const requestPost = (url, body, setLoading) => request('POST', url, body, setLoading);

export const requestGet = (url, body, setLoading) => request('GET', url, body, setLoading);
