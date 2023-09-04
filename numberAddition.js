const prompt = require("prompt-sync")();

const NumberAddition = (str) => {
  const Num = "0123456789";

  let a = str.split(/[a-zA-Z\W]+/);

  let c = a.join(" ");

  let sum = 0;
  let z = c.split(" ");
  for (let x of z) {
    if (x !== "") {
      sum += parseInt(x);
    }
  }
  return sum;
};
let Sring = prompt("Enter your string ");
console.log(NumberAddition(Sring));
