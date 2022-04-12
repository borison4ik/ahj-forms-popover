import Popover from './components/popover';

import '../css/style.scss';

window.onload = () => {
  const btn = document.querySelector('.btn');
  let isShown = false;

  btn.addEventListener('click', () => {
    const popover = new Popover('.btn', {
      title: 'Popover',
      text: 'Lorem ipsum dolor sit amet consectetur',
    });

    isShown = !isShown;
    if (isShown) {
      popover.show();
    } else {
      popover.remove();
    }
  });
};
