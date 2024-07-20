function postQuestion() {
    const questionInput = document.getElementById('question-input');
    const questionsContainer = document.getElementById('questions-container');

    if (questionInput.value.trim() === '') {
        alert('Please enter a question.');
        return;
    }

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = questionInput.value;

    questionsContainer.appendChild(questionDiv);

    questionInput.value = '';
}
