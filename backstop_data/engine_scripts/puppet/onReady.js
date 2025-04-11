module.exports = async (page, scenario, vp) => {
  console.log('onReady: ' + scenario.label);
  await new Promise(resolve => setTimeout(resolve, 1000));

  // add more ready handlers here...
};
