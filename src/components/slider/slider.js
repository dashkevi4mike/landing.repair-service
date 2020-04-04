import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import $ from 'jquery';

import './slider.scss';

class Slider {
  constructor() {
    this._attachEventHandler();
  }
  
  _attachEventHandler() {
    $('.js-slider').slick();
  }
}
  
$(() => {
  new Slider();
});