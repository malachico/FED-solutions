const reducer = (accumulator, currentValue) => accumulator + currentValue;

result = process.argv.slice(2).map(x => Number(x)).reduce(reducer);

console.log(result);


