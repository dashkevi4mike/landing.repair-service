import './input.scss';
import $ from 'jquery';

class Input {
  constructor($component) {
    this.$component = $component;
    this._attachEventHandler();
  }

  _attachEventHandler() {
    const _this = this;
    this.$component.on('focus', () => {
      _this.$component.addClass('input__input_toched');
    });
  }
}

$(() => {
  $('.js-input').each((_, node) => {
    new Input($(node));
  });
});