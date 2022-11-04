import { API_STRING, ApiCalling } from '../WebService';


export default class ApiCallback {   

    static getApiCallback = async (apiParams, methodType, api) => {
        console.log(
            'getApiCallback',
            'Request bodyFormData :-' + JSON.stringify(apiParams),
        );

        
        var jsonData = await ApiCalling.callApi(
            api,
            apiParams,
            methodType
        );

        console.log('getApiCallback', 'ApiCallback Response :- ' + JSON.stringify(jsonData));

        if (jsonData != null) {
            if (jsonData.status == 200) {
                return jsonData;
            } else if (jsonData.status == 201) {
                return jsonData;
            }
            else if (jsonData.status == 300) {

                var jsonResponse = {
                    response: "Internet not connected",
                };
                return jsonResponse;
            } else if (jsonData.status == 400) {
                console.log('inside ApiCallback 400 :- ', jsonData);

                var jsonResponse = {
                    response: jsonData.message,
                };
                return jsonResponse;
            } else if (jsonData.status == 500) {

                var jsonResponse = {
                    response: 'Some error occured',
                };
                return jsonResponse;
            } else {
                console.log("api call back class json data==" + JSON.stringify(jsonData))
                return jsonData;
            }
        } else {

           // this.showSnackBar(STRINGS.api_callback_string.some_error_occured);
        }
    };

    static getAuthTokenApiCallback = async (apiParams, methodType, api,token) => {
        console.log(
            'getApiCallback',
            'Request bodyFormData :-' + JSON.stringify(apiParams),
        );

        
        var jsonData = await ApiCalling.callApiWithToken(
            api,
            apiParams,
            methodType,
            token
        );

        console.log('getApiCallback', 'ApiCallback Response :- ' + JSON.stringify(jsonData));

        if (jsonData != null) {
            if (jsonData.status == 200) {
                return jsonData;
            } else if (jsonData.status == 201) {
                return jsonData;
            }
            else if (jsonData.status == 300) {

                var jsonResponse = {
                    response: "Internet not connected",
                };
                return jsonResponse;
            } else if (jsonData.status == 400) {
                console.log('inside ApiCallback 400 :- ', jsonData);

                var jsonResponse = {
                    response: jsonData.message,
                };
                return jsonResponse;
            } else if (jsonData.status == 500) {

                var jsonResponse = {
                    response: 'Some error occured',
                };
                return jsonResponse;
            } else {
                console.log("api call back class json data==" + JSON.stringify(jsonData))
                return jsonData;
            }
        } else {

           // this.showSnackBar(STRINGS.api_callback_string.some_error_occured);
        }
    }
}