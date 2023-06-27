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
  

  // УСТАНОВКА НАСТРОЕК
  fajrDegrees.value = fajr;
  fajrMinutes.value = fajrMin;

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

    const data = JSON.stringify({
      sendNotify: sendNotify,
      remindMin: remindMin,
      lastHourFriday: lastHourFriday,
      ramadhanNotify: ramadanNotify,
      weather: weather,
      third_night: thirdNight,
    });

    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
  });
});
