// Правильный ответ
const CORRECT_ANSWER_VALUE = 'c'; 

// Получаем ссылки на элементы DOM
const optionsList = document.getElementById('options-list');
const resultText = document.getElementById('result-text');
const showSolutionBtn = document.getElementById('show-solution-btn');
const solutionText = document.getElementById('solution-text');

// Добавляем обработчик событий на весь список, используя делегирование
optionsList.addEventListener('change', function(event) {
    const clickedCheckbox = event.target;
    
    // Отключаем все чекбоксы сразу после первого выбора
    disableCheckboxes();

    if (clickedCheckbox.value === CORRECT_ANSWER_VALUE) {
        // Логика для правильного ответа
        resultText.textContent = 'Верно! Отлично!';
        // Добавляем класс 'correct' к родительскому label
        clickedCheckbox.closest('label').classList.add('correct');

    } else {
        // Логика для неправильного ответа
        resultText.textContent = 'Неверно, попробуйте еще раз.';
        // Добавляем класс 'incorrect' к родительскому label
        clickedCheckbox.closest('label').classList.add('incorrect');
        
        // Показываем кнопку "Посмотреть решение"
        showSolutionBtn.style.display = 'inline-block';
    }
});

// Добавляем обработчик на кнопку "Посмотреть решение"
showSolutionBtn.addEventListener('click', function() {
    // Показываем скрытый блок с решением
    solutionText.style.display = 'block';
    // Опционально: скрываем кнопку после нажатия
    showSolutionBtn.style.display = 'none'; 

    // Также можно подсветить правильный ответ зеленым, когда решение показано
    const correctLabel = document.querySelector(`[data-value="${CORRECT_ANSWER_VALUE}"]`);
    if (correctLabel && !correctLabel.classList.contains('correct')) {
         correctLabel.classList.add('correct');
         correctLabel.querySelector('.feedback-icon').style.display = 'inline';
    }
});

function disableCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(box => {
        box.disabled = true;
    });
}