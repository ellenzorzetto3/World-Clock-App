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

updateTime();
setInterval(updateTime, 1000);
