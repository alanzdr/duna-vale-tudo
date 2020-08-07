const CarsIds = [
  '681247',
  '672665',
  '673156',
  '672647',
  '673544',
  '673729',
  '672668',
  '675242',
  '673724',
  '676579',
  '678319',
  '673480',
  '684032',
  '685382',
  '679353',
  '685860',
  '683268',
  '679942'
]

const isEnabled = (id) => {
  return CarsIds.includes(id);
}

module.exports = isEnabled;