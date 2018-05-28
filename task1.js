const check = num => num >=1 && num <=10000
const str = process.argv[2];

if (!check(str.length)) throw new Error('You\'re asshole!!' )

const replaceLetters = str => str.replace(/[ркн]/gi, "")

process.stdout.write(replaceLetters(str))
