document.addEventListener("DOMContentLoaded", function() {
  //Bootstrap

  // Получаем ссылки на переключатели
  const notificationSwitch = document.getElementById('notificationSwitch');
  const reminderSwitch = document.getElementById('reminderSwitch');
  // Скрываем блок "remind-min" при загрузке страницы, если notificationSwitch выключен
  if (!notificationSwitch.checked) {
    hideRemindMin();
  }
  // Добавляем обработчик события изменения состояния переключателя notificationSwitch
  notificationSwitch.addEventListener('change', function () {
    if (notificationSwitch.checked) {
      showRemindMin();
    } else {
      hideRemindMin();
    }
  });
  // Функция для скрытия блока "remind-min"
  function hideRemindMin() {
    const remindMin = document.querySelector('.remind-min');
    remindMin.style.display = 'none';
  }
  // Функция для отображения блока "remind-min"
  function showRemindMin() {
    const remindMin = document.querySelector('.remind-min');
    remindMin.style.display = 'block';
  }
});