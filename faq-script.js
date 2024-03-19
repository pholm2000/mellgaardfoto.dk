document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Skift synligheden af ​​det næste element (svaret)
            const answer = question.nextElementSibling;
            answer.classList.toggle('show');
        });
    });
});
