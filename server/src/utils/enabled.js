const CarsIds = [
  '673544',
  '687780',
  '694030',
  '693110',
  '678869',
  '673501',
  '683840',
  '694023',
  '690002',
  '692459',
  '689630',
  '673864',
  '689953',
  '687494',
  '688331',
  '694594',
  '686370',
  '686042',
  '685860',
]

const isEnabled = (id) => {
  return CarsIds.includes(id);
}

module.exports = isEnabled;