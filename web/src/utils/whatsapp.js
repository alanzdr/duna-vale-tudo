
// Criciúma = 0
// Tubarão = 1
// Imbituba = 2
// Araranguá = 3
const getCityNumber = (city) => {
  switch (city) {
    case 0: return '5548991835855';
    case 1: return '554836210461';
    case 2: return '554836210461';
    case 3: return '5548991835855';
    default: return '5548991835855';
  }
}

export const getWhatsLink = (city) => {
  const phone = getCityNumber(city)
  const {protocol, host, pathname} = window.location;
  const url = `${protocol}//${host}${pathname}`;
  const text = `Olá, gostaria de solicitar uma proposta para este carro ( ${url} ). Você pode me ajudar?`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
}

//https://api.whatsapp.com/send?phone=5548991835855&text=Ol%C3%A1,%20gostaria%20de%20solicitar%20uma%20proposta%20para%20este%20carro%20(%20http://www.fiatduna.com.br/carros/volkswagen-golf-gti-2-0-mi-8v/?xd=32%20).%20Voc%C3%AA%20pode%20me%20ajudar?