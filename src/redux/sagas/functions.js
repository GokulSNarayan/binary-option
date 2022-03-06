import axios from 'axios';

const apiUrl = `https://v6.exchangerate-api.com/v6/7f84ec1772ade20e2adbceee`;

//api for getting exchange rates value
export async function getExchangeRatesApi(code) {
    console.log("🚀 ~ file: currencySaga.js ~ line 6 ~ getApi ~ code", code)

    return await axios.get(`${apiUrl}/latest/${code}`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response)
        .catch((error) => { throw error })
}


//api for getting currecyCodes
export async function getcurrencyCodeApi() {

    return await axios.get(`${apiUrl}/codes`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response)
        .catch((error) => { throw error })
}
//api for getting conversion pair data
export async function getConversionPair(base, target) {

    return await axios.get(`${apiUrl}/pair/${base}/${target}`, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response)
        .catch((error) => { throw error })
}