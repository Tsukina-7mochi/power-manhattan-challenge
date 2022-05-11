import generate from './generate';
import "./style.scss";

window.addEventListener('load', () => {
  document.querySelector('#tweet')?.addEventListener('click', () => {
    const tweetText = `${generate()}\n#パワーマンハッタン大学チャレンジ\nhttps://tsukina-7mochi.github.io/power-manhattan-challenge/`;

    const link = document.createElement('a');
    link.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

    console.log(link);


    link.click();
  });
});