import generate from './generate.ts';

const str = 'パワーマンハッタン';
const hitTarget = 'パワーマンハッタン大学';
const chars = ['パ', 'ワ', 'ー', 'マ', 'ン', 'ハ', 'ッ', 'タ'];
const suffixes = ['大学', '大聖堂', '大丈夫', '大根', '犬学', '大仏', '大将軍', '大名']

const sampleNum = 1000000;

const statistics: Map<string, number>[] = new Array(str.length).fill(0).map(_ => new Map());
for(const char of chars) {
  statistics.forEach(map => map.set(char, 0));
}
const statistics2 = new Map<string, number>();
for(const suffix of suffixes) {
  statistics2.set(suffix, 0);
}

let hitCount = 0;
console.log(`testing for ${sampleNum} times...`);

for(let i = 0; i < sampleNum; i++) {
  const result = generate();

  if(result === hitTarget) {
    hitCount += 1;
  }

  for(let i = 0; i < str.length; i++) {
    const char = result[i] == 'ソ' ? 'ン' : result[i];
    const num = statistics[i].get(char);
    if(num == undefined) {
      throw Error(`Element "${char}" is not set on ${i} th set!`);
    }
    statistics[i].set(char, num + 1);
  }

  const suffix = result.slice(str.length);
  const num = statistics2.get(suffix);
  if(num == undefined) {
    throw Error(`Element "${suffix}" is not set!`);
  }
  statistics2.set(suffix, num + 1);
}

for(let i = 0; i < str.length; i++) {
  const map = statistics[i];
  const results = <{ key: string, value: number }[]>[...map.keys()].map(key => ({key, value: map.get(key)}));
  results.sort((a, b) => b.value - a.value);
  const sum = results.map(result => result.value).reduce((acc, cur) => acc + cur, 0);

  console.log(`== ${i + 1}th char ==`);
  results.forEach(result => {
    console.log(`${result.key}: ${result.value} (${result.value / sum})`);
  });
}

console.log(`== suffix ==`);
const result = <{ key: string, value: number }[]>[...statistics2.keys()].map(key => ({key, value: statistics2.get(key)}));
result.sort((a, b) => b.value - a.value);
const sum = result.map(r => r.value).reduce((acc, cur) => acc + cur, 0);
result.forEach(result => {
  console.log(`${result.key}: ${result.value} (${result.value / sum})`);
});

console.log(`== ${str} ==`);
console.log(`hit count: ${hitCount} (${hitCount / sampleNum})`);