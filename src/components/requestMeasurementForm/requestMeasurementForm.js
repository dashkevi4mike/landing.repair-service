import './requestMeasurementForm.scss';
import $ from 'jquery';

class RequestMeasurementForm {
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
  $('.js-request-measurement-form').each((_, node) => {
    new RequestMeasurementForm($(node));
  });
});