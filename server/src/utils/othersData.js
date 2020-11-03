
const setupOthersData = (id) => {
  switch (id) {
    case '673544': return { price: '65900', promotion: '62900' }
    case '679905': return { price: '22900', promotion: '19900' }
    case '673480': return { promotion: '69900' }
    case '679879': return { price: '36900', promotion: '33900' }
    case '675652': return { promotion: '39900' }
    case '692937': return { price: '27500', promotion: '23900' }
    case '678869': return { price: '32500', promotion: '29900' }
    case '675454': return { price: '32900', promotion: '29900' }
    case '678870': return { price: '24900', promotion: '20900' }
    case '679942': return { price: '50900', promotion: '49900' }
    case '693110': return { price: '57900', promotion: '55900' }
    case '692242': return { promotion: '30900' }
    case '692141': return { promotion: '23900' }
    case '681247': return { promotion: '28990' }
    case '681851': return { price: '39000', promotion: '35900' }
    case '688436': return { price: '32500', promotion: '30900' }
    case '683840': return { promotion: '61900' }
    case '693125': return { price: '20000', promotion: '19900' }
    case '692459': return { price: '44000', promotion: '43900' }
    default: return {}
  }
}

module.exports = setupOthersData;