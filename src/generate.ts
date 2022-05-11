const chars = ['パ', 'ワ', 'ー', 'マ', ['ン', 'ソ'], 'ハ', 'ッ', 'タ', ['ン', 'ソ']];
const suffix = [['大学'], ['大聖堂']];

const normalRandom = (mean: number, var_: number) =>
	(Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random()) + mean) * var_;
const chi2Random   = (k: number) => new Array(k).fill(0).map(_ => normalRandom(0, 1) ** 2).reduce((acc, cur) => acc + cur, 0);

const generate = function() {
  let result = '';
  for(let i = 0; i < chars.length; i++) {
    const index = Math.max(0, Math.min(chars.length - 1, Math.floor(i + normalRandom(0, 2))));
    const charOrArr = chars[index];

    if(typeof charOrArr === 'string') {
      result += charOrArr;
    } else {
      result += charOrArr[Math.max(0, Math.min(charOrArr.length - 1, Math.floor(chi2Random(1) / 2)))];
    }
  }

  result += suffix[Math.max(0, Math.min(suffix.length - 1, Math.floor(chi2Random(1) / 2)))];

  return result;
}

export default generate;