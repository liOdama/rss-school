import BattleAnimation from './screens/battle/battle.annimation';

// eslint-disable-next-line
export const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});
export const loadImage = (nameImages, who) => {
  let numResourcesLoaded = 0;
  const totalResources = nameImages.length;
  const images = {};
  nameImages.forEach((element) => {
    images[element] = new Image();
    images[element].src = `./src/screens/battle/img/${who}/${element}.png`;
    images[element].onload = function draw() {
      numResourcesLoaded += 1;
      if (numResourcesLoaded === totalResources) {
        if (who === 'monster') {
          BattleAnimation.drawMonster(images);
        } else {
          BattleAnimation.drawPlayer(images);
        }
      }
    };
  });
};
