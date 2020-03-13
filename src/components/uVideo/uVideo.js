import './uVideo.scss';

import $ from 'jquery';

class UVideo {
  constructor($component) {
    this.$component = $component;
    this.$play = $component.find('.js-u-video__play');
    this.$overlay = $component.find('.js-u-video__overlay');
    this.$video = $component.find('.js-u-video__video');
    this._attachEventHandler();
  }

  _attachEventHandler() {
    this.$play.on('click', () => {
      this.$overlay.attr({
        hidden: true,
      });
      this.$video.attr({
        src: this.$video.attr('data-src'),
      });
    });
  }
}

$(() => {
  $('.js-u-video').each((_, node) => {
    new UVideo($(node));
  });
});