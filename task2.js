const check = num => num >=1 && num <=10000
const str1 = process.argv[2];
const str2 = process.argv[3];

if (!check(str1.length) || !check(str2.length)) throw new Error('You\'re asshole!!' )

function go(str1, str2) {
  if (str1.split('').sort()+'' != str2.split('').sort()+'') return -1
  const middle = Math.floor(str1.length / 2);
  return (Math.abs(str1.indexOf(middle) - str2.indexOf(middle)))
}

process.stdout.write(go(str1, str2)+'')
