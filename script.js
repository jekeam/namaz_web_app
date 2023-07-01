// Переключение кнопок для ЗУХР
function showFixedTimeSection() {
  var fixedTimeSection = document.getElementById("fixedTimeSection");
  var minutesSection = document.getElementById("minutesSection");
  fixedTimeSection.style.display = "block";
  minutesSection.style.display = "none";

  var btnFixedTime = document.getElementById("btnFixedTime");
  var btnMinutesLabel = document.querySelector("label[for='btnMinutes']");

  btnFixedTime.checked = true;
  btnMinutesLabel.classList.remove("active");
}

function showMinutesSection() {
  var fixedTimeSection = document.getElementById("fixedTimeSection");
  var minutesSection = document.getElementById("minutesSection");
  fixedTimeSection.style.display = "none";
  minutesSection.style.display = "block";

  var btnFixedTime = document.getElementById("btnFixedTime");
  var btnMinutesLabel = document.querySelector("label[for='btnMinutes']");

  btnFixedTime.checked = false;
  btnMinutesLabel.classList.add("active");
}





document.addEventListener("DOMContentLoaded", function () {
  Telegram.WebApp.expand();

  // Получаем объект ThemeParams
  var themeParams = Telegram.WebApp.themeParams;

  // Если объект существует, применяем настройки темы
  if (themeParams) {
    var root = document.documentElement;
    root.style.setProperty('--tg-theme-bg-color', themeParams.bg_color || '#ffffff');
    root.style.setProperty('--tg-theme-text-color', themeParams.text_color || '#000000');
    root.style.setProperty('--tg-theme-hint-color', themeParams.hint_color || '#888888');
    root.style.setProperty('--tg-theme-link-color', themeParams.link_color || '#0078ff');
    root.style.setProperty('--tg-theme-button-color', themeParams.button_color || '#0078ff');
    root.style.setProperty('--tg-theme-button-text-color', themeParams.button_text_color || '#ffffff');
    root.style.setProperty('--tg-theme-secondary-bg-color', themeParams.secondary_bg_color || '#f2f2f2');
  }

  var objString = JSON.stringify(Telegram.WebApp);
  console.log(objString);



  // Получаем значения из GET-параметров
  var urlParams = new URLSearchParams(window.location.search);
  console.log('urlParams: ' + urlParams);
  var sendNotify = urlParams.get('send_notify');
  var remindMin = urlParams.get('remind_min');
  var lastHourFriday = urlParams.get('last_hour_friday');
  var ramadhanNotify = urlParams.get('ramadhan_notify');
  var weather = urlParams.get('weather');
  var thirdNight = urlParams.get('third_night');
  var fajr = urlParams.get('fajr');
  var fajrMin = urlParams.get('fajr_min');
  var dhuhr = urlParams.get('dhuhr');
  var asrp = urlParams.get('asr');
  var maghrib = urlParams.get('maghrib');

  // Применяем значения к форме
  var notificationSwitch = document.getElementById('notificationSwitch');
  var reminderSwitch = document.getElementById('reminderSwitch');
  var reminderMinutes = document.getElementById('reminderMinutes');
  var lastHourSwitch = document.getElementById('lastHourSwitch');
  var ramadanReminderSwitch = document.getElementById('ramadanReminderSwitch');
  var weatherSwitch = document.getElementById('weatherSwitch');
  var thirdNightSwitch = document.getElementById('thirdNightSwitch');

  var fajrDegrees = document.getElementById('fajrDegrees');
  var fajrMinutes = document.getElementById('fajrMinutes');

  var dhuhrTimeHour = document.getElementById('dhuhrTimeHour');
  var dhuhrTimeMin = document.getElementById('dhuhrTimeMin')
  var dhuhrMinutes = document.getElementById('dhuhrMinutes');

  var autoAsr = document.getElementById('autoAsr');
  var standardAsr = document.getElementById('standardAsr');
  var hanafiAsr = document.getElementById('hanafiAsr');
  var autoAsrLable = document.querySelector("label[for='autoAsr']");
  var autoAsrLableDiv = document.getElementById("autoAsrDiv");

  var maghribMinutes = document.getElementById('maghribMinutes');




  // УСТАНОВКА НАСТРОЕК
  fajrDegrees.value = fajr;
  fajrMinutes.value = fajrMin;
  maghribMinutes.value = maghrib;

  if (asrp == 'Hanafi') {

    autoAsrLable.style.display = "none";
    autoAsrLableDiv.style.display = "none";
    hanafiAsr.checked = true;

  } else if (asrp == 'Standard') {

    autoAsrLable.style.display = "none";
    autoAsrLableDiv.style.display = "none";
    standardAsr.checked = true;

  } else {

    autoAsr.checked = true;
    autoAsrLable.style.display = "block";
    autoAsrLableDiv.style.display = "block";
  }

  if (dhuhr.includes(':')) {
    var times = dhuhr.split(":");
    dhuhrTimeHour.value = times[0];
    dhuhrTimeMin.value = times[1];
  } else {
    dhuhrMinutes.value = dhuhr;
  }

  if (dhuhr && dhuhr.includes(':')) {
    // Активировать вкладку "Фикс. время"
    showFixedTimeSection();
  } else {
    // Активировать вкладку "Минуты"
    showMinutesSection();
  }

  if (weather == 'on') {
    weatherSwitch.checked = true;
  } else {
    weatherSwitch.checked = false;
  }
  if (thirdNight === 'True') {
    thirdNightSwitch.checked = true;
  } else {
    thirdNightSwitch.checked = false;
  }

  if (sendNotify === 'True') {
    notificationSwitch.checked = true;
  } else {
    notificationSwitch.checked = false;
  }

  if (remindMin != "0") {
    reminderSwitch.checked = true;
    reminderMinutes.value = remindMin;
    //    showReminderInput();
  } else {
    reminderSwitch.checked = false;
    reminderMinutes.value = 0;
    //    hideReminderInput();
  }

  if (lastHourFriday === 'True') {
    lastHourSwitch.checked = true;
  } else {
    lastHourSwitch.checked = false;
  }

  if (ramadhanNotify === 'True') {
    ramadanReminderSwitch.checked = true;
  } else {
    ramadanReminderSwitch.checked = false;
  }

  // Имитируем событие change для переключателей, чтобы обновить состояние формы
  var event = new Event('change');
  weatherSwitch.dispatchEvent(event);
  thirdNightSwitch.dispatchEvent(event);
  notificationSwitch.dispatchEvent(event);
  reminderSwitch.dispatchEvent(event);


  Telegram.WebApp.ready();
  Telegram.WebApp.MainButton.setText('Ok').show().onClick(function () {
    const weather = weatherSwitch.checked ? 'on' : 'off';
    const sendNotify = notificationSwitch.checked;
    const thirdNight = thirdNightSwitch.checked;
    const remindMin = reminderSwitch.checked ? reminderMinutes.value : 0;
    const lastHourFriday = lastHourSwitch.checked;
    const ramadanNotify = ramadanReminderSwitch.checked;
    const fajr = fajrDegrees.value;
    const fajrMin = fajrMinutes.value;
    const maghriMin = maghribMinutes.value;

    var fixedTimeRadio = document.getElementById("btnFixedTime");
    const dhuhr = fixedTimeRadio.checked ? dhuhrTimeHour.value + ':' + dhuhrTimeMin.value : dhuhrMinutes.value + ' min';
    const asr_ = hanafiAsr.checked ? 'Hanafi' : standardAsr.checked ? 'Standard' : asrp;

    const data = JSON.stringify({
      sendNotify: sendNotify,
      remindMin: remindMin,
      lastHourFriday: lastHourFriday,
      ramadhanNotify: ramadanNotify,
      weather: weather,
      third_night: thirdNight,
      fajr: fajr,
      fajr_min: fajrMin + ' min',
      dhuhr: dhuhr,
      asr: asr_,
      maghrib: maghriMin + ' min',
    });

    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
  });
});
