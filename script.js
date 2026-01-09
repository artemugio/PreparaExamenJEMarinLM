// ===== ESTADO GLOBAL DEL JUEGO =====
let gameState = {
    currentQuestion: 0,
    score: 0,
    answers: [],
    selectedQuestions: [],
    selectedAnswer: null,
    difficulty: 'medium',
    selectedTopics: ['xml', 'dtd', 'xsd', 'xpath', 'xquery', 'xslt', 'html', 'css', 'general', 'markup', 'syndication'],
    totalQuestions: 10,
    timePerQuestion: 60,
    timeLeft: 60,
    startTime: null,
    questionStartTime: null
};

// ===== ELEMENTOS DEL DOM =====
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('questionScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const retryBtn = document.getElementById('retryBtn');
const homeBtn = document.getElementById('homeBtn');

const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const scoreText = document.getElementById('scoreText');
const percentageText = document.getElementById('percentageText');
const resultsList = document.getElementById('resultsList');
const progress = document.getElementById('progress');
const timerDisplay = document.getElementById('timerDisplay');

// ===== EVENT LISTENERS =====
startBtn.addEventListener('click', startGame);
skipBtn.addEventListener('click', skipQuestion);
submitBtn.addEventListener('click', submitAnswer);
retryBtn.addEventListener('click', goHome);
homeBtn.addEventListener('click', goHome);

// Botones de selección de nivel de dificultad
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        gameState.difficulty = btn.dataset.difficulty;
        // Determinar número de preguntas según dificultad
        if (btn.dataset.difficulty === 'easy') {
            gameState.totalQuestions = 5;
        } else if (btn.dataset.difficulty === 'medium') {
            gameState.totalQuestions = 10;
        } else if (btn.dataset.difficulty === 'hard') {
            gameState.totalQuestions = 20;
        }
    });
});

// ===== FUNCIONES PRINCIPALES =====

function startGame() {
    // Obtener tópicos seleccionados
    gameState.selectedTopics = [];
    document.querySelectorAll('.topic-checkbox input[type="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
            gameState.selectedTopics.push(checkbox.value);
        }
    });

    if (gameState.selectedTopics.length === 0) {
        alert('Por favor selecciona al menos un tópico');
        return;
    }

    // Filtrar preguntas por tópico seleccionado
    let filteredQuestions = questions.filter(q => gameState.selectedTopics.includes(q.topic));

    // Asegurar que hay suficientes preguntas
    if (filteredQuestions.length < gameState.totalQuestions) {
        gameState.totalQuestions = filteredQuestions.length;
    }

    // Barajar y seleccionar preguntas
    gameState.selectedQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, gameState.totalQuestions);
    
    // Reiniciar estado del juego
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.answers = [];
    gameState.selectedAnswer = null;
    gameState.startTime = Date.now();

    totalQuestionsSpan.textContent = gameState.totalQuestions;
    showScreen('questionScreen');
    loadQuestion();
}

function loadQuestion() {
    if (gameState.currentQuestion >= gameState.selectedQuestions.length) {
        showResults();
        return;
    }

    const question = gameState.selectedQuestions[gameState.currentQuestion];
    currentQuestionSpan.textContent = gameState.currentQuestion + 1;
    questionText.textContent = question.question;
    gameState.selectedAnswer = null;
    submitBtn.disabled = true;

    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';

    // Mostrar opciones
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.innerHTML = `
            <input type="radio" name="answer" value="${index}">
            <span>${option}</span>
        `;
        label.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(label);
    });

    // Iniciar timer
    gameState.questionStartTime = Date.now();
    gameState.timeLeft = gameState.timePerQuestion;
    updateTimerDisplay();
    startTimer();
    updateProgress();
}

function selectAnswer(index) {
    gameState.selectedAnswer = index;
    submitBtn.disabled = false;
    document.querySelectorAll('input[name="answer"]').forEach((input, i) => {
        input.checked = (i === index);
    });
}

function submitAnswer() {
    const question = gameState.selectedQuestions[gameState.currentQuestion];
    const isCorrect = gameState.selectedAnswer === question.correct;

    if (gameState.selectedAnswer === null) {
        alert('Por favor selecciona una respuesta');
        return;
    }

    // Registrar respuesta
    gameState.answers.push({
        questionId: question.id,
        question: question.question,
        selectedAnswer: question.options[gameState.selectedAnswer],
        correctAnswer: question.options[question.correct],
        isCorrect: isCorrect,
        topic: question.topic,
        difficulty: question.difficulty
    });

    // Calcular puntos
    if (isCorrect) {
        gameState.score += question.points;
    }

    // Siguiente pregunta
    gameState.currentQuestion++;
    loadQuestion();
}

function skipQuestion() {
    const question = gameState.selectedQuestions[gameState.currentQuestion];
    gameState.answers.push({
        questionId: question.id,
        question: question.question,
        selectedAnswer: null,
        correctAnswer: question.options[question.correct],
        isCorrect: false,
        topic: question.topic,
        difficulty: question.difficulty
    });

    gameState.currentQuestion++;
    loadQuestion();
}

function startTimer() {
    const timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            clearInterval(timer);
            skipQuestion();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    timerDisplay.textContent = timeString;
    
    // Cambiar color según tiempo restante
    if (gameState.timeLeft > 10) {
        timerDisplay.style.color = '#00ff00'; // Verde
        timerDisplay.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00';
    } else if (gameState.timeLeft > 5) {
        timerDisplay.style.color = '#ffff00'; // Amarillo
        timerDisplay.style.textShadow = '0 0 10px #ffff00, 0 0 20px #ffff00';
    } else {
        timerDisplay.style.color = '#ff0000'; // Rojo
        timerDisplay.style.textShadow = '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000';
    }
}

function updateProgress() {
    const percentage = ((gameState.currentQuestion + 1) / gameState.totalQuestions) * 100;
    progress.style.width = percentage + '%';
}

function showResults() {
    showScreen('resultsScreen');
    
    // Calcular puntuación máxima
    let maxScore = 0;
    gameState.selectedQuestions.forEach(q => {
        maxScore += q.points;
    });

    const percentage = Math.round((gameState.score / maxScore) * 100);
    
    scoreText.innerHTML = `<strong>Puntuación: ${gameState.score} / ${maxScore}</strong>`;
    percentageText.innerHTML = `${percentage}%`;

    // Mostrar resultados detallados
    resultsList.innerHTML = '';
    gameState.answers.forEach((answer, index) => {
        const resultDiv = document.createElement('div');
        resultDiv.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        resultDiv.innerHTML = `
            <h4>Pregunta ${index + 1}: ${answer.question}</h4>
            <p><strong>Tu respuesta:</strong> ${answer.selectedAnswer || 'No respondida'}</p>
            <p><strong>Respuesta correcta:</strong> ${answer.correctAnswer}</p>
            <p><strong>Tema:</strong> ${answer.topic} | <strong>Dificultad:</strong> ${answer.difficulty}</p>
        `;
        resultsList.appendChild(resultDiv);
    });
}

function goHome() {
    gameState.currentQuestion = 0;
    gameState.score = 0;
    gameState.answers = [];
    gameState.selectedAnswer = null;
    showScreen('startScreen');
    document.querySelectorAll('.difficulty-btn')[1].classList.add('active');
}

function showScreen(screenId) {
    startScreen.style.display = (screenId === 'startScreen') ? 'block' : 'none';
    gameScreen.style.display = (screenId === 'questionScreen') ? 'block' : 'none';
    resultsScreen.style.display = (screenId === 'resultsScreen') ? 'block' : 'none';
}
