const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(menuItems) {
  this.menuItems = menuItems;
};

SelectView.prototype.bindEvents = function() {
  this.menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (evt) => {

      
}
