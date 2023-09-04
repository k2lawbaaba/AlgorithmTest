const prompt = require("prompt-sync")();

const DevID = (num) => {
  let lastDigitOfDevID = 0;
  let a = num.toString().split("");

  if (a.length > 0 && a.length <= 9) {
    let divide = num % lastDigitOfDevID;
    if (divide == 0) {
      let d = num / lastDigitOfDevID;
      if (d == 0) return "invalid argument";
      else return d;
    } else return "invalid argument";
  } else return "Minimum of 1-digit and max of 9-digits";
};

let digit = parseInt(prompt("Enter a digit "));
console.log(DevID(digit));
