const axios = require('axios');
const xml2js = require('xml2js');

const XMLService = () => {
  let API_URL = '';

  const onInit = () => {
    API_URL = process.env.API_URL;
  }

  const onApiGet = async () => {
    // console.log(API_URL)
    const response = await axios.get(API_URL)
    return response.data;
  }

  const onGetXml = async () => {
    try {
      const xmlString = await onApiGet()
      const data = await xml2js.parseStringPromise(xmlString);
      return data.CargaVeiculos.Veiculo;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  return { 
    getXml: onGetXml,
    init: onInit 
  }
} 

module.exports = XMLService;