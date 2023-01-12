let hoje = new Date();
let cincoDias = dateFns.addDays(hoje, 5);
console.log(dateFns.format(cincoDias, "DD/MM/YYYY HH:MM"));

console.log("É depois?", dateFns.isAfter(cincoDias, hoje))