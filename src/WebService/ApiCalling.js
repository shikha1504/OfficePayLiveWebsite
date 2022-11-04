
const axios = require('axios');
const BASE_URL = 'https://goinvoicy.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


class ApiCalling {
  static IMAGE_URL = 'https://goinvoicy.com/api/';
  static create() {
    // Set config defaults when creating the instance
    var instance = axios.create({
      baseURL: BASE_URL,
    });

    return instance;
  }
  //*-----Api calling function-----------*//
  static callApi = async (remainingUrl, bodyFormData, methodType) => {
    console.log("req body is----"+  BASE_URL + remainingUrl)
    // return await axios
    //     .post(
    //       BASE_URL + remainingUrl+"?"+bodyFormData,
    //     )
    //     .then(function (response) {
    //         return response.data;
    //       }) .catch(function (response) {
    //         console.log('Catch Call api', response);
    //       });;


    return await axios({
      method: methodType,
      url: BASE_URL + remainingUrl,
      data: bodyFormData,
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",

      },
    })
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        console.log('Catch Call api', response);
      });
  };

  //*-----Api calling function with token-----------*//
  static callApiWithToken = async (remainingUrl, bodyFormData, methodType, token) => {

    console.log("api url==" + BASE_URL + remainingUrl)
    return await axios({
      method: methodType,
      url: BASE_URL + remainingUrl,
      data: bodyFormData,
      headers: {
        Accept: 'application/json',
        //'Content-Type': 'multipart/form-data;',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        'Authorization':  `Bearer ${token}`//token
      },
    })
      .then(function (response) {

        return response.data;
      })
      .catch(function (response) {
        console.log('Catch Call api', response);
      });
  };

}

export default ApiCalling;
