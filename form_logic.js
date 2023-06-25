document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылки на переключатели и контейнер поля ввода
  const notificationSwitch = document.getElementById('notificationSwitch');
  const reminderSwitch = document.getElementById('reminderSwitch');
  const reminderInputContainer = document.getElementById('reminderInputContainer');

  // Скрываем поле ввода "Напоминать заранее" при загрузке страницы
  if (!notificationSwitch.checked) {
    hideReminderSwitch();
  }
  // Скрываем поле ввода "Дополнительно за" при загрузке страницы
  if (!reminderSwitch.checked) {
    hideReminderInput();
  }

  // Добавляем обработчик события изменения состояния переключателя notificationSwitch
  notificationSwitch.addEventListener('change', function () {
    if (notificationSwitch.checked) {
      showReminderSwitch();
    } else {
      hideReminderSwitch();
    }
  });

  // Добавляем обработчик события изменения состояния переключателя reminderSwitch
  reminderSwitch.addEventListener('change', function () {
    if (reminderSwitch.checked) {
      showReminderInput();
    } else {
      hideReminderInput();
    }
  });

  // Функция для отображения переключателя "Напоминать заранее"
  function showReminderSwitch() {
    reminderSwitch.parentElement.style.display = 'block';
  }

  // Функция для скрытия переключателя "Напоминать заранее"
  function hideReminderSwitch() {
    reminderSwitch.parentElement.style.display = 'none';
  }

  // Функция для отображения поля ввода "Дополнительно за"
  function showReminderInput() {
    reminderInputContainer.style.display = 'block';
  }

  // Функция для скрытия поля ввода "Дополнительно за"
  function hideReminderInput() {
    reminderInputContainer.style.display = 'none';
  }
});
