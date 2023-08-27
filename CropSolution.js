const solution = (message, K) => {
  const pattern = /^(?!\s|\S*\s$)[a-zA-Z\s]*[a-zA-Z]\S*$/;

  if (pattern.test(message)) {
    let a = message.split(" ");

    let sub = message.substring(0, K).split(" ");

    const b = sub.filter((item) => a.includes(item));
    return b.join(" ");
  } else
    console.log(
      "Incorrect message, it must not contain a space at the beginning or end"
    );
};

console.log(solution("Codility We test coders", 14));
console.log(solution("Ihe quick brown fox jumps over the lazy dog", 39));
console.log(solution("To crop or not to crop", 21));
console.log(solution("Why not", 100));
