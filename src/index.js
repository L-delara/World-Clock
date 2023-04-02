function updateTime() {
  //change city html
  let cityElement = document.querySelector("#cityName");
  if (cityElement) {
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let createdTime = moment.tz.setDefault();

    dateElement.innerHTML = createdTime.format("MMMM	Do YYYY");
    timeElement.innerHTML = createdTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

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
  <div class=">
    <div>
      <h2 id="city-name">${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}
updateTime();
setInterval(updateTime, 1);
//event listener on the selector
let citySelect = document.querySelector("#choose-city");
citySelect.addEventListener("change", updateCity);
