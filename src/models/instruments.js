const PubSub = require('../helpers/pub_sub.js');

const Instruments = function(instrumentFamilies) {
  this.instrumentFamilies = instrumentFamilies;
};

Instruments.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:selected', (event) => {
    const chosenInstrumentName = event.detail;
    const selectedInstrumentObject = this.findByName(chosenInstrumentName);
    PubSub.publish('Instruments:instrument-ready', selectedInstrumentObject);
  });
};

Instruments.prototype.findByName = function(searchName) {
  const foundInstrument = this.instrument.find((currentInstrument) => {
    return currentInstrument.name === searchName;
  });
  return foundInstrument;
};

module.exports = Instruments;
