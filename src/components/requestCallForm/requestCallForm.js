import './requestCallForm.scss';
import $ from 'jquery';

class RequestCallForm {
  constructor($component) {
    this.$component = $component;
    this._attachEventHandler();
  }

  _attachEventHandler() {
    const _this = this;
    $('.js-request-call-button').on('click', () => {
      _this.$component.length > 0 && _this.$component[0].removeAttribute('hidden');
    });
  
    $('.js-close-request-call-form').on('click', () => {
      _this.$component.length > 0 && _this.$component[0].setAttribute('hidden', true);
    });
  }
}

$(() => {
  $('.js-request-call-form').each((_, node) => {
    new RequestCallForm($(node));
  });
});