// challenge 11:
function tableMultiplication(n) {
  let table = [];
  let i = 1;
  while (i <= 10) {
    table.push(n * i);
    i++;
  }
  return table;
}
