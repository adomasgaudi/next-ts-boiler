import axios from "axios";

const justAxios = (url: string, method: "POST", headers?: any, data?: any) => {
  return axios({
    url,
    method,
    headers,
    data,
  })
    .then(r => r.data)
    .catch(er => {
      throw new Error(er.response.data.message);
    });
};
export default justAxios;
