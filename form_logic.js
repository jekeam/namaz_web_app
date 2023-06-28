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



  // КНОПКИ + и -
  // Получаем ссылку на поле ввода
  var reminderMinutesInput = document.getElementById('reminderMinutes');

  // Получаем кнопки "+" и "-"
  var plusButton = document.querySelector('button[data-type="plus"]');
  var minusButton = document.querySelector('button[data-type="minus"]');

  // Обработчик события для кнопки "+"
  plusButton.addEventListener('click', function () {
    incrementValue();
  });

  // Обработчик события для кнопки "-"
  minusButton.addEventListener('click', function () {
    decrementValue();
  });

  // Функция для увеличения значения
  function incrementValue() {
    var currentValue = parseInt(reminderMinutesInput.value);
    var newValue = currentValue + 5;

    if (newValue <= 60) {
      reminderMinutesInput.value = newValue;
    }
  }

  // Функция для уменьшения значения
  function decrementValue() {
    var currentValue = parseInt(reminderMinutesInput.value);
    var newValue = currentValue - 5;

    if (newValue >= 5) {
      reminderMinutesInput.value = newValue;
    }
  }







  // КНОПКИ БЫСТРОЙ ВСТАВКИ МИНУТ
  // Получаем кнопки быстрого выбора значений
  var quickSelectButtons = document.querySelectorAll('.quick-select-button');

  // Обработчик события для кнопок быстрого выбора значений
  function handleQuickSelect(event) {
    // Получаем значение кнопки
    var value = event.target.dataset.value;

    // Находим поле ввода
    var reminderMinutesInput = document.getElementById('reminderMinutes');

    // Устанавливаем значение поля ввода
    reminderMinutesInput.value = value;
  }

  // Добавляем обработчик события для каждой кнопки быстрого выбора
  quickSelectButtons.forEach(function (button) {
    button.addEventListener('click', handleQuickSelect);
  });
});


// МИНУТЫ И ГРАДУСЫ ФАДЖ
function simulateArrowKeyPress(event, inputId) {
  var input = document.getElementById(inputId);
  var step = parseFloat(input.step);
  var value = parseFloat(input.value);
  var min = parseFloat(input.min);
  var max = parseFloat(input.max);

  if (event === 'increment') {
    value += step;
  } else if (event === 'decrement') {
    value -= step;
  }

  value = Math.max(min, Math.min(max, value));

  var keyboardEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    cancelable: true,
    key: 'ArrowUp', // Для инкремента используйте 'ArrowUp', для декремента - 'ArrowDown'
    keyCode: 38, // Код клавиши 'ArrowUp' или 'ArrowDown'
  });

  input.value = value.toFixed(inputId === 'degrees' ? 1 : 0);
  input.dispatchEvent(keyboardEvent);
}

