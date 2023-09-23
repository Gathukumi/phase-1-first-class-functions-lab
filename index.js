// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
}
const quadrupleFare = createFareMultiplier(4);
const fare1 = 20;
const totalFare = quadrupleFare(fare1); 

const fareDoubler = createFareMultiplier(2);


const fare2 = 20;
const doubledFare = fareDoubler(fare2); // This will result in 40 (20 * 2)

const fareTripler = createFareMultiplier(3);


const fare = 20;
const tripledFare = fareTripler(fare); // This will result in 60 (20 * 3)

function selectDifferentDrivers(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
}


  
  
  
