const check = num => num >=1 && num <=10000
const t1 = +process.argv[2];
const t2 = +process.argv[3];

if (!check(t1) || !check(t2)) throw new Error('You\'re asshole!!' )

function sum(a, b) {
  const ms = (a + b) * 1000;
  const time = new Date(new Date(2000, 0, 1).getTime() + ms).toLocaleTimeString()
  const [hours, minutes, seconds] = time.split(':').map(num => parseInt(num));
  const getDec = (n, arr) => n == 0 ? '' : n + ' ' + ((((dec = n%100) >= 11 && dec <= 19) || (dec = n%10) >= 5 || dec == 0) ? arr[2] : (dec == 1 ? arr[0] : arr[1]));
  return `${getDec(hours, ['час', 'часа', 'часов'])} ${getDec(minutes, ['минута', 'минуты', 'минут'])} ${getDec(seconds, ['секунда', 'секунды', 'секунд'])}`.trim().replace(/  /," ")
}

process.stdout.write(sum(t1, t2))
