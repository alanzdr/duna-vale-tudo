
const isEnabled = require('../utils/enabled')
const othersData = require('../utils/othersData')

const setupName = (fullName) => {
  const split = fullName.split(' ')
  if (split.length > 3) {
    const first = split.slice(0, 3).join(' ');
    const secound = split.slice(3, split.length).join(' ');
    return [first, secound];
  } else {
    return [fullName, '']
  }
}

const Car = (data) => {
  const id = data.Codigo[0];
  
  if (!id || !isEnabled(id)) {
    return false;
  }

  const fullName = `${data.Marca[0]} ${data.ModeloVersao[0]}`
  const name = setupName(fullName);
  const promotion = data.Preco[0];
  const year = data.AnoModelo[0];
  const opts = data.Equipamentos[0].split(',').map(value => value.trim())
  const pics = data.Fotos[0].FotoURL
  const thumb = pics[0]
  const license = data.Codigo[0]

  const others = othersData(id);

  return {
    id,
    name,
    fullName,
    year,
    pics,
    license,
    thumb,
    opts,
    promotion,
    ...others
  }
}

module.exports = Car;