import './tabs.scss'
import $ from 'jquery';

class Tabs {
  constructor() {
    this.$tabList = $('.js-tab');
    this.$tabContentList = $('.js-tab-content');
    this._attachEventHandler();
  }

  _attachEventHandler() {
    const _this = this;
    this.$tabList.on('click', (el) => {
      const $currentTab = $(el.currentTarget);
      const scope = el.currentTarget.getAttribute('data-scope');
      const tabIndex = el.currentTarget.getAttribute('data-tab-index');
      _this._setStylesForTab($currentTab, scope);
      _this._setStylesForTabContent(scope, tabIndex);
    });
  }

  _setStylesForTab($currentTab, scope) {
    const $tabs = $(document.querySelectorAll(`.js-tab[data-scope=${scope}]`));
    $tabs.removeClass('tabs__tab_active');
    $tabs.addClass('tabs__tab_inactive');
    $currentTab.addClass('tabs__tab_active');
    $currentTab.removeClass('tabs__tab_inactive');
  }

  _setStylesForTabContent(scope, tabIndex) {
    const $tabsContents = $(document.querySelectorAll(`.js-tab-content[data-scope=${scope}]`))
    const $tabContent = $(document.querySelectorAll(`.js-tab-content[data-scope="${scope}"][data-tab-index="${tabIndex}"]`));
    $tabsContents.attr('hidden', true);
    $tabContent.attr('hidden', false);
  }
}

$(() => {
  new Tabs();
});