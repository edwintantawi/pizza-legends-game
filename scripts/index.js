import { Overworld } from './Overworld.js';

(() => {
  console.log('Pizza Legends');

  const overworldConfg = {
    element: document.querySelector('.game-container'),
  };

  const overworld = new Overworld(overworldConfg);

  overworld.init();
})();
