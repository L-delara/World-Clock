let cityElement = document.querySelector("#cityName");

//change the city once it's been selected
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2 id="cityName">${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}
//event listener on the selector
let citySelect = document.querySelector("#choose-city");
citySelect.addEventListener("change", updateCity);
