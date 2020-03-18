import './requestCallForm.scss';
import $ from 'jquery';

class RequestCallForm {
  constructor($component) {
    this.$component = $component;
    this._attachEventHandler();
  }

  _attachEventHandler() {
    const _this = this;
    console.log(_this);
  }
}

$(() => {
  $('.js-request-form').each((_, node) => {
    new RequestCallForm($(node));
  });
});