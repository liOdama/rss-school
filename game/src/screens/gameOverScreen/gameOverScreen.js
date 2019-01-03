import $ from 'jquery';

import template from './gameOverScreen.template';
import './gameOverScreen.scss';

class GameOverScreen {
  static draw() {
    const contentEl = document.querySelector('.starter-template');
    contentEl.insertAdjacentHTML('beforeend', template);
    $('#battle').remove();
  }

  static empty() {
    $('#winScreen').empty();
  }
}

export default GameOverScreen;
