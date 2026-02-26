function updateTime() {
  //nairobi
  let nairobiDay = document.querySelector("#nairobi-date");
  let nairobiTime = document.querySelector("#nairobi-time");
  let ampm = document.querySelector("#ampm");
  let nowNairobi = moment().tz("Africa/Nairobi");

  nairobiTime.innerHTML = nowNairobi.format("h:mm:ss");
  nairobiDay.innerHTML = nowNairobi.format("MMMM Do YYYY");
  ampm.innerHTML = nowNairobi.format("A");

  //Egypt
  let egyptDay = document.querySelector("#egypt-date");
  let egyptTime = document.querySelector("#egypt-time");
  let egyptAmpm = document.querySelector("#egypt-ampm");
  let nowCairo = moment().tz("Africa/Cairo");

  egyptTime.innerHTML = nowCairo.format("h:mm:ss");
  egyptDay.innerHTML = nowCairo.format("MMMM Do YYYY");
  egyptAmpm.innerHTML = nowCairo.format("A");

  //London
  let londonDay = document.querySelector("#london-date");
  let londonTime = document.querySelector("#london-time");
  let londonAmpm = document.querySelector("#london-ampm");
  let nowLondon = moment().tz("Europe/London");

  londonTime.innerHTML = nowLondon.format("h:mm:ss");
  londonDay.innerHTML = nowLondon.format("MMMM Do YYYY");
  londonAmpm.innerHTML = nowLondon.format("A");

  //China
  let chinaDay = document.querySelector("#china-date");
  let chinaTime = document.querySelector("#china-time");
  let chinaAmpm = document.querySelector("#china-ampm");
  let nowChina = moment().tz("Asia/Shanghai");

  chinaTime.innerHTML = nowChina.format("h:mm:ss");
  chinaDay.innerHTML = nowChina.format("MMMM Do YYYY");
  chinaAmpm.innerHTML = nowChina.format("A");

  //Kiribati
  let kiribatiDay = document.querySelector("#kiribati-date");
  let kiribatiTime = document.querySelector("#kiribati-time");
  let KiribatiAmpm = document.querySelector("#kiribati-ampm");
  let nowKiribati = moment().tz("Pacific/Kiritimati");

  kiribatiTime.innerHTML = nowKiribati.format("h:mm:ss");
  kiribatiDay.innerHTML = nowKiribati.format("MMMM Do YYYY");
  KiribatiAmpm.innerHTML = nowKiribati.format("A");

  //baker
  let bakerDay = document.querySelector("#baker-date");
  let bakerTime = document.querySelector("#baker-time");
  let bakerAmpm = document.querySelector("#baker-ampm");
  let nowBaker = moment().tz("Etc/GMT+12");

  bakerTime.innerHTML = nowBaker.format("h:mm:ss");
  bakerDay.innerHTML = nowBaker.format("MMMM Do YYYY");
  bakerAmpm.innerHTML = nowBaker.format("A");
}


updateTime();
setInterval(updateTime, 1000);
