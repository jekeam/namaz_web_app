window.onload = function() {
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
};

var objString = JSON.stringify(Telegram.WebApp);
console.log(objString);

var urlParams = new URLSearchParams(window.location.search);

var sendNotify = urlParams.get('send_notify');
console.log("sendNotify=" + sendNotify);

var remindMin = urlParams.get('remind_min');
console.log("remindMin=" + remindMin);

Telegram.WebApp.ready();
Telegram.WebApp.MainButton.setText('Ok').show().onClick(function () {
    const data = JSON.stringify({sendNotify: sendNotify, remindMin: remindMin});
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});

