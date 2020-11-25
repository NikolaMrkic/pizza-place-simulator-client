import axios from "axios";

const api = axios.create({
  //baseURL: apiUrl
  baseURL: `http://127.0.0.1:4000`,
});

const get = async function (url, options = {}) {
  let result = [];
  let error;
  await api.get(url, options).then(
    (res) => (result = res),
    (err) => (error = err)
  );

  if (error !== undefined) {
    throw error.response;
  }
  const dataAndStatusForGet = { data: result.data, status: result.status };
  return dataAndStatusForGet;
};

const post = async function (url, data, options = {}) {
  let result = [];
  await api.post(url, data, options).then((res) => (result = res));
  const dataAndStatusForPost = { data: result.data, status: result.status };

  // return result.data
  return dataAndStatusForPost;
};

const put = async function (url, data, options = {}) {
  let result = [];
  await api.put(url, data, options).then((res) => (result = res));
  const dataAndStatusForUpdate = { data: result.data, status: result.status };
  // return result.data
  return dataAndStatusForUpdate;
};

const del = async function (url, options = {}) {
  var result = [];
  await api.delete(url, options).then((res) => (result = res));
  const dataAndStatusForDelete = { data: result.data, status: result.status };

  return dataAndStatusForDelete;
  // return result.data
};

export default {
  get,
  post,
  put,
  del,
};
