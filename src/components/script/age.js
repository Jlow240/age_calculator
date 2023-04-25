const actualDate = new Date();
console.log(actualDate);

const birth =  new Date(`${ birthyear}, ${birthmonth}, ${birthday} `)
console.log(birth)

let dateDiference = (actualDate - birth)
console.log(dateDiference)

let diferenciaEnDias = Math.floor(dateDiference / (1000 * 60 * 60 * 24));
console.log(diferenciaEnDias)

let years = Math.floor(diferenciaEnDias / 365);
console.log(years)

let months = Math.floor((diferenciaEnDias % 365) / 30);
console.log(months)

let days = Math.floor((diferenciaEnDias % 365) % 30);
console.log(days)