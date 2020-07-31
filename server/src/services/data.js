const Car = require('../models/Car')

const DataService = () => {
  const data = [];

  const updateData = (value) => {
    const car = Car(value);
    if (car) {
      const index = data.findIndex((value) => value.id === car.id);
      if (index >= 0) {
        data[index] = car;
      } else {
        data.push(car)
      }
    }
  }

  const onSet = (xmlData) => {
    xmlData.forEach(value => {
      updateData(value);
    })
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