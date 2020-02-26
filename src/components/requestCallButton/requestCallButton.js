import './RequestCallButton.scss';
import $ from 'jquery';

class RequestCallButton {
  constructor($component) {
    this.$component = $component;
    this._attachEventHandler();
    this.$requestCallForm = $('.js-request-call-form', this.$component);
  }

  _attachEventHandler() {
    $('.js-request-call-button', this.$component).on('click', () => this.$list.toggleClass('request-call-form_open'));
  }
}

$(() => {
  $('.js-request-call-button').each((index, node) => {
    new RequestCallButton($(node));
  });
});