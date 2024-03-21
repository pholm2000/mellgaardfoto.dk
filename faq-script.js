document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {

            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
