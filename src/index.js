function updateTime() {
  let LAElement = document.querySelector("#LAElement");
  let LAElementDate = LAElement.querySelector(".date");
  let LAElementTime = LAElement.querySelector(".time");
  let LATime = moment().tz("America/Los_Angeles");
  LAElementDate.innerHTML = LATime.format("MMMM, Do YYYY");
  LAElementTime.innerHTML = LATime.format("h:mm:ss[<small>] a[</small>]");

  let rioElement = document.querySelector("#RioElement");
  let rioElementDate = rioElement.querySelector(".date");
  let rioElementTime = rioElement.querySelector(".time");
  let rioTime = moment().tz("America/Sao_Paulo");
  rioElementDate.innerHTML = rioTime.format("MMMM, Do YYYY");
  rioElementTime.innerHTML = rioTime.format("h:mm:ss[<small>] a[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess().replace("Sao_Paulo", "Concórdia");
  }
  let cityName = cityTimeZone
    .replace("Sao_Paulo", "Rio de Janeiro")
    .replace("_", " ")
    .split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesSelector = document.querySelector("#cityContent");
  citiesSelector.innerHTML = `<div class="city" id="CityElement">
          <div class="city-info">
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM, Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss[<small>] a[</small>]"
          )}</div> </div>
       `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener("change", updateCity);

function turnBack() {
  location.reload();
}

let updateButton = document.querySelector("#updateButton");
updateButton.addEventListener("click", turnBack);
