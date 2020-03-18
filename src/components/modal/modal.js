import './modal.scss';
import $ from 'jquery';

class Modal {
  constructor($component) {
    this.$component = $component;
    this.modalName = $component.attr('data-modal');
    this._attachEventHandler();
  }

  _attachEventHandler() {
    const _this = this;

    $(`button[data-modal=${this.modalName}]`).on('click', () => {
      _this.$component.length > 0 && _this.$component[0].removeAttribute('hidden');
    });
  
    $('.js-close-modal').on('click', () => {
      _this.$component.length > 0 && _this.$component[0].setAttribute('hidden', true);
    });
  }
}

$(() => {
  $('.js-modal').each((_, node) => {
    new Modal($(node));
  });
});