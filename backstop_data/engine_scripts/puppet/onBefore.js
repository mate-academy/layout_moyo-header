module.exports = async (page, scenario, vp) => {
console.log('onBefore: ' + scenario.label);
  await require('./loadCookies')(page, scenario);
};
