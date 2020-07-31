const CarsIds = [
  '675652',
  '681247',
  '672665',
  '673156',
  '675659',
  '672647',
  '673544',
  '673729',
  '673372',
  '672668',
  '672535',
  '675242',
  '675664',
  '673724',
  '672453',
  '676579',
  '678319'
]

const isEnabled = (id) => {
  return CarsIds.includes(id);
}

module.exports = isEnabled;