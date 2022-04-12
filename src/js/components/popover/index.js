export default class Popover {
  constructor(selector, options) {
    this.title = options?.title || '';
    this.text = options?.text || '';
    this.selector = selector;
  }

  show() {
    this.target = document.querySelector(this.selector);
    this.popover = document.createElement('div');
    this.popover.className = 'popover';
    this.popoverWrapper = document.createElement('div');
    this.popoverWrapper.className = 'popover-wrapper';
    this.popoverHeader = document.createElement('h3');
    this.popoverHeader.className = 'popover-header';
    this.popoverHeader.textContent = this.title;
    this.popoverBody = document.createElement('div');
    this.popoverBody.className = 'popover-body';
    this.popoverBody.textContent = this.text;

    this.popoverWrapper.appendChild(this.popoverHeader);
    this.popoverWrapper.appendChild(this.popoverBody);
    this.popover.appendChild(this.popoverWrapper);

    this.target.parentNode.appendChild(this.popover);
    this.popover.style.top = `${
      this.target.offsetTop - this.popover.offsetHeight - 10
    }px`;
    this.popover.style.left = `${
      this.target.offsetLeft +
      this.target.offsetWidth / 2 -
      this.popover.offsetWidth / 2
    }px`;
  }

  remove() {
    this.target = document.querySelector(this.selector);
    const parent = this.target.offsetParent;
    parent.removeChild(parent.querySelector('.popover'));
  }
}
