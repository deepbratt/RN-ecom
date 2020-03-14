import axios from 'axios';
const BASE_URL = "http://wanted7-backendapi.herokuapp.com";

export const api = async (url, method, body = null) => {

    try {
      const endPoint = BASE_URL.concat(url);

      const fetchPromise = await axios.post(endPoint, body)
      .then(result => {
          return result;
      })

      const timeOutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject("Request Timeout");
          }, 3000);
      });

      const response = await Promise.race([fetchPromise, timeOutPromise]);

      return response;
    } catch (e) {
      return e;
    }
}

export const fetchApi = async (url, method, body, statusCode, token = null, loader = false) => {
    try {
        const result = {
            token: null,
            success: false
        };
        const response = await api(url, method, body);

        console.log(response);

        if(response.status === statusCode) {
            result.success = true;

            if(response.data.id !== null) {
                result.token = response.data.id;
            }
            return result;
        }
        console.log(result);

        throw result;
    } catch (error) {
        return error;
    }
}
