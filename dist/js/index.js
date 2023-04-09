// Get the battery API
navigator.getBattery().then(function (battery) {
  console.log(
    "Battery will get fully charged in ",
    battery.chargingTime,
    " seconds"
  );
});
