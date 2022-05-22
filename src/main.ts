import generate from './generate';
import "./style.scss";

window.addEventListener('load', () => {
  let resultStr = generate();

  const renderResult = function(): void {
    const resultDiv = document.querySelector('#result > span');

    if(!resultDiv) {
      throw Error('Element "#result > span" does not exist.');
    }

    resultDiv.textContent = resultStr;
  }

  document.querySelector('#generate')?.addEventListener('click', () => {
    resultStr = generate();

    renderResult();
  });

  document.querySelector('#tweet')?.addEventListener('click', () => {
    const tweetText = `${resultStr}\n#パワーマンハッタン大学チャレンジ\nhttps://tsukina-7mochi.github.io/power-manhattan-challenge/`;

    const link = document.createElement('a');
    link.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    // console.log(link);

    link.click();
  });

  renderResult();
});