let cTempRounded = 0;
let fTempRounded = 0;

const ftoc = function(fTemp) {
  let ftocTemp = (fTemp - 32) * .556;
  if (ftocTemp >= 0) {
    cTempRounded = Math.round(ftocTemp * 10) / 10;
  } else {
    let temporary = Math.round(ftocTemp * 10) / 10 + .1;
    cTempRounded = Math.round(temporary * 10) / 10; 
  }
  console.log("1");
  return cTempRounded;
};

const ctof = function(cTemp) {
  let ctofTemp = (cTemp * 1.8) + 32;
  let fTempRounded = Math.round(ctofTemp * 10) / 10;

  console.log("2");
  return fTempRounded;
};

module.exports = {
  ftoc,
  ctof
};
