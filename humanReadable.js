/**
 * Write a function, which takes a non-negative integer (seconds) as input and returns
 *  time in a human-readable format (HH:MM:SS)
 
HH = hours, padded to 2 digits, range: 00 - 99 MM = minutes, padded to 2 digits,
range: 00 - 59 SS = seconds, padded to 2 digits, range: 00 - 59
maximum time never exceeds 359999 (99:59:59)
 
humanReadable(0); // '00:00:00'
humanReadable(5); // '00:00:05'
humanReadable(90); // '00:01:30'
humanReadable(86399); // '23:59:59'
humanReadable(359999); // '99:59:59'
 */

const humanReadable = (num) => {
  let hr = Math.floor(num / 60 / 60);
  let min = Math.floor((num / 60) % 60);
  let sec = Math.floor(num % 60);

  //   console.log(min);
  //   console.log(sec);

  //   const originalString = String(hr);
  hr = String(hr).padStart(2, "0");

  sec = String(sec).padStart(2, "0");

  min = String(min).padStart(2, "0");

  let rst = `${hr}: ${min}:${sec}`;

  return rst;
};

console.log(humanReadable(86399));
console.log(humanReadable(90));
console.log(humanReadable(0));
console.log(humanReadable(359999));
console.log(humanReadable(5));
