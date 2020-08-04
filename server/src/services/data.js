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

    // const sortedData = newData.sort((a, b) => {
    //   if (a.promotion > b.promotion) return -1;
    //   if (b.promotion > a.promotion) return 1;
    //   return 0;
    // })

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