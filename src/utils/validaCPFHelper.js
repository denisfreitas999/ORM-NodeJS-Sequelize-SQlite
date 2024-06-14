const { isCPF } = require('validation-br');

module.exports = (cpf) => {
  return isCPF(cpf);
};