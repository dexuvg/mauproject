const CORRECT_ANSWER_VALUE = 'a'; 

const optionsList = document.getElementById('options-list');
const resultText = document.getElementById('result-text');
const showSolutionBtn = document.getElementById('show-solution-btn');
const solutionText = document.getElementById('solution-text');

optionsList.addEventListener('change', function(event) {
    const clickedCheckbox = event.target;
    if (clickedCheckbox.tagName !== 'INPUT') return; 
    disableCheckboxes();

    if (clickedCheckbox.value === CORRECT_ANSWER_VALUE) {
        resultText.textContent = 'Верно! Отлично!';
        clickedCheckbox.closest('label').classList.add('correct');
    } else {
        resultText.textContent = 'Неверно. Посмотрите решение.';
        clickedCheckbox.closest('label').classList.add('incorrect');
        showSolutionBtn.style.display = 'inline-block';
    }
});

showSolutionBtn.addEventListener('click', function() {
    solutionText.style.display = 'block';
    showSolutionBtn.style.display = 'none'; 

    const correctLabel = document.querySelector(`[data-value="${CORRECT_ANSWER_VALUE}"]`);
    if (correctLabel) {
        correctLabel.classList.add('correct');
    }
    
    if (window.renderMathInElement) {
        renderMathInElement(solutionText);
    }
});

function disableCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(box => box.disabled = true);
}
