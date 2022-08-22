let alturaCentimetros = 159;
let alturaMetros = parseFloat(1.59);
let pesoKg = parseFloat(55.2);
let alturaRedondeada = Math.floor(alturaMetros);
let pesoRedondeado = Math.ceil(pesoKg);
let maxVal = Number.MAX_VALUE + 1;

console.log(
  alturaCentimetros,
  alturaMetros,
  alturaRedondeada,
  pesoKg,
  pesoRedondeado,
  maxVal
);
