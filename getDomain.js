/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"*/

let url1 = "http://github.com/carbonfive/raygun";
let url = "https://www.cnet.com";
let url2 = "http://www.zombie-bites.com";

function getDomainName(url) {
  var u = url.split(".");

  const a = [];
  const prefix = ["http://", "http://www", "https://www"];
  for (let x of u) {
    if (!prefix.includes(x)) a.push(x);
  }
  //   return  a[0].replace("http://", "").replace("https://", "");
  let d = a[0].split("//");
  return d.length > 1 ? d[1] : d[0];
}
console.log(getDomainName(url));
console.log(getDomainName(url2));
console.log(getDomainName(url1));

// const domain=(url)=>{
//     let splitDomain= url.split("//")
//     let a=  splitDomain.split(".")[0]
//     console.log(a);
// }
// console.log(domain(url));
