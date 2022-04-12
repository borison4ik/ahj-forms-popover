import Popover from '../components/popover';

describe('Popover class:', () => {
  test('should show popover', () => {
    document.body.innerHTML = `<div class="app" id="app">
                                <button type="button" class="btn">Show Tooltip</button>
                              </div>`;

    const btn = document.querySelector('.btn');

    const popover = new Popover('.btn', {
      title: 'Popover',
      text: 'Lorem ipsum dolor sit amet consectetur',
    });

    btn.addEventListener('click', () => {
      popover.show();
    });

    btn.click();

    expect(document.body.querySelector('.popover')).toBeTruthy();
    expect(document.body.querySelector('.popover-body')).toBeTruthy();
    expect(document.body.querySelector('.popover-body').textContent).toBe(
      'Lorem ipsum dolor sit amet consectetur'
    );
  });
});
