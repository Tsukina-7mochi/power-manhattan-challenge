const chars = ['パ', 'ワ', 'ー', 'マ', ['ン', 'ソ'], 'ハ', 'ッ', 'タ', ['ン', 'ソ']];
const suffix = [['大学'], ['大聖堂', '大丈夫', '大根', '犬学', '大仏', '大将軍', '大名']];

// charsのそれぞれの最初の1文字 or 1要素目を取り出して結合
const charsFlatMap = (arr: (string | string[])[]): string => arr.map((charOrArr) => charOrArr[0]).join('');
const normalRandom = (mean: number, var_: number) =>
	(Math.sqrt(-2 * Math.log(Math.random())) * Math.cos(2 * Math.PI * Math.random()) + mean) * var_;
const chi2Random   = (k: number) => new Array(k).fill(0).map(_ => normalRandom(0, 1) ** 2).reduce((acc, cur) => acc + cur, 0);
const arrTakeRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generate = function() {
  let result = '';
  for(let i = 0; i < chars.length; i++) {
    const random = normalRandom(0, 2);
    const index = Math.max(0, Math.min(chars.length - 1, Math.floor(Math.abs(i + random)) * Math.sign(i + random)));
    const charOrArr = chars[index];

    if(typeof charOrArr === 'string') {
      result += charOrArr;
    } else {
      if(i >= 2 && result.slice(-2) === charsFlatMap(chars.slice(index - 2, index))) {
        result += charOrArr[Math.max(0, Math.min(charOrArr.length - 1, Math.floor(chi2Random(1) / 2)))];
      } else {
        result += charOrArr[0];
      }
    }
  }

  result += arrTakeRandom(suffix[Math.max(0, Math.min(suffix.length - 1, Math.floor(chi2Random(1) / 1.5)))]);

  return result;
}

export default generate;