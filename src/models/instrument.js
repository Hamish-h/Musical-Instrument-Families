const PubSub = require('../helpers/pub_sub.js');

const Instrument = function(instrumentFamilies) {
  this.instrumentFamilies = instrumentFamilies;
};

Instrument.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:selected', (event) => {
    const chosenInstrumentName = event.detail;
    const selectedInstrumentObject = this.findByName(chosenInstrumentName);
    PubSub.publish('Instrument:instrument-ready', selectedInstrumentObject);
  });
};

Instrument.prototype.findByName = function(searchName) {
  const foundInstrument = this.instrument.find((currentInstrument) => {
    return currentInstrument.name === searchName;
  });
  return foundInstrument;
};

module.exports = Instrument;
