const Car = require('../models/Car')

const DataService = () => {
  let data = [];

  const onSet = (xmlData) => {
    const newData = []
    xmlData.forEach(value => {
      const carEnabled = Car(value);
      if (carEnabled) {
        newData.push(carEnabled)
      }
    })
    
    data = newData;
  }

  const onGet = () => {
    return data;
  }

  return {
    get: onGet,
    set: onSet
  }
} 

module.exports = DataService;