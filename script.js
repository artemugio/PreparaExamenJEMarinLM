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
    questionStartTime: null,
    currentTimer: null,
    ttsEnabled: true,
    ttsRate: 1,
    ttsPitch: 1,
    ttsVolume: 1,
    ttsVoice: null,
    currentUtterance: null,
    currentExercise: 0,
    selectedExercises: [],
    exerciseAnswers: [],
    exerciseScore: 0,
    totalExercises: 10
};

// ===== ELEMENTOS DEL DOM =====
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('questionScreen');
const resultsScreen = document.getElementById('resultsScreen');
const exercisesScreen = document.getElementById('exercisesScreen');
const formGameScreen = document.getElementById('formGameScreen');

const startBtn = document.getElementById('startBtn');
const exercisesBtn = document.getElementById('exercisesBtn');
const submitBtn = document.getElementById('nextBtn');
const skipBtn = document.getElementById('skipBtn');
const retryBtn = document.getElementById('retryBtn');
const homeBtn = document.getElementById('homeBtn');
const repeatBtn = document.getElementById('repeatBtn');
const submitExerciseBtn = document.getElementById('submitExerciseBtn');
const skipExerciseBtn = document.getElementById('skipExerciseBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentExerciseSpan = document.getElementById('currentExercise');
const totalExercisesSpan = document.getElementById('totalExercises');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const exerciseContainer = document.getElementById('exerciseContainer');
const scoreText = document.getElementById('scoreText');
const percentageText = document.getElementById('percentageText');
const resultsList = document.getElementById('resultsList');
const progress = document.getElementById('progress');
const timerDisplay = document.getElementById('timerDisplay');

// Elementos de TTS
const enableTTSCheckbox = document.getElementById('enableTTS');
const ttsOptions = document.querySelector('.tts-options');
const ttsVoiceSelect = document.getElementById('ttsVoice');
const ttsRateSlider = document.getElementById('ttsRate');
const ttsPitchSlider = document.getElementById('ttsPitch');
const ttsVolumeSlider = document.getElementById('ttsVolume');
const testTtsBtn = document.getElementById('testTtsBtn');

// ===== EVENT LISTENERS =====
startBtn.addEventListener('click', startGame);
exercisesBtn.addEventListener('click', startExercises);
skipBtn.addEventListener('click', skipQuestion);
submitBtn.addEventListener('click', submitAnswer);
retryBtn.addEventListener('click', goHome);
homeBtn.addEventListener('click', goHome);
repeatBtn.addEventListener('click', speakCurrentQuestion);
submitExerciseBtn.addEventListener('click', submitExercise);
skipExerciseBtn.addEventListener('click', skipExercise);
backToMenuBtn.addEventListener('click', goHome);

// Event Listeners para TTS
enableTTSCheckbox.addEventListener('change', () => {
    gameState.ttsEnabled = enableTTSCheckbox.checked;
    if (ttsOptions) {
        ttsOptions.classList.toggle('hidden', !gameState.ttsEnabled);
    }
});

ttsRateSlider.addEventListener('input', (e) => {
    gameState.ttsRate = parseFloat(e.target.value);
});

ttsPitchSlider.addEventListener('input', (e) => {
    gameState.ttsPitch = parseFloat(e.target.value);
});

ttsVolumeSlider.addEventListener('input', (e) => {
    gameState.ttsVolume = parseFloat(e.target.value);
});

ttsVoiceSelect.addEventListener('change', (e) => {
    gameState.ttsVoice = e.target.value === 'default' ? null : e.target.value;
});

testTtsBtn.addEventListener('click', () => {
    speakText('Esta es una prueba de voz. La velocidad, tono y volumen pueden ser ajustados desde los controles.');
});

// Inicializar voces disponibles
initializeTTSVoices();
exercisesBtn.addEventListener('click', startExercises);
skipBtn.addEventListener('click', skipQuestion);
submitBtn.addEventListener('click', submitAnswer);
retryBtn.addEventListener('click', goHome);
homeBtn.addEventListener('click', goHome);
repeatBtn.addEventListener('click', speakCurrentQuestion);
submitExerciseBtn.addEventListener('click', submitExercise);
skipExerciseBtn.addEventListener('click', skipExercise);
backToMenuBtn.addEventListener('click', goHome);

// Event Listeners para TTS
enableTTSCheckbox.addEventListener('change', () => {
    gameState.ttsEnabled = enableTTSCheckbox.checked;
    if (ttsOptions) {
        ttsOptions.classList.toggle('hidden', !gameState.ttsEnabled);
    }
});

ttsRateSlider.addEventListener('input', (e) => {
    gameState.ttsRate = parseFloat(e.target.value);
});

ttsPitchSlider.addEventListener('input', (e) => {
    gameState.ttsPitch = parseFloat(e.target.value);
});

ttsVolumeSlider.addEventListener('input', (e) => {
    gameState.ttsVolume = parseFloat(e.target.value);
});

ttsVoiceSelect.addEventListener('change', (e) => {
    gameState.ttsVoice = e.target.value === 'default' ? null : e.target.value;
});

testTtsBtn.addEventListener('click', () => {
    speakText('Esta es una prueba de voz. La velocidad, tono y volumen pueden ser ajustados desde los controles.');
});

// Inicializar voces disponibles
initializeTTSVoices();

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

// Función para escapar caracteres especiales HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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
            <span>${escapeHtml(option)}</span>
        `;
        label.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(label);
    });

    // Detener timer anterior si existe
    if (gameState.currentTimer) {
        clearInterval(gameState.currentTimer);
    }

    // Iniciar timer
    gameState.questionStartTime = Date.now();
    gameState.timeLeft = gameState.timePerQuestion;
    updateTimerDisplay();
    startTimer();
    updateProgress();
    
    // Leer pregunta si TTS está activado
    if (gameState.ttsEnabled) {
        setTimeout(() => speakCurrentQuestion(), 300);
    }
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

    // Detener timer
    if (gameState.currentTimer) {
        clearInterval(gameState.currentTimer);
        gameState.currentTimer = null;
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
    // Detener timer
    if (gameState.currentTimer) {
        clearInterval(gameState.currentTimer);
        gameState.currentTimer = null;
    }

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
    gameState.currentTimer = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();

        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.currentTimer);
            gameState.currentTimer = null;
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
            <h4>Pregunta ${index + 1}: ${escapeHtml(answer.question)}</h4>
            <p><strong>Tu respuesta:</strong> ${answer.selectedAnswer ? escapeHtml(answer.selectedAnswer) : 'No respondida'}</p>
            <p><strong>Respuesta correcta:</strong> ${escapeHtml(answer.correctAnswer)}</p>
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
    exercisesScreen.style.display = (screenId === 'exercisesScreen') ? 'block' : 'none';
    formGameScreen.style.display = (screenId === 'formGameScreen') ? 'block' : 'none';
}
// ===== FUNCIONES DE TTS (Text-to-Speech) =====

function initializeTTSVoices() {
    const voices = window.speechSynthesis.getVoices();
    const spanishVoices = voices.filter(voice => voice.lang.startsWith('es'));
    
    // Limpiar opciones anteriores
    ttsVoiceSelect.innerHTML = '<option value="default">Automática</option>';
    
    // Agregar voces disponibles
    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;
        ttsVoiceSelect.appendChild(option);
    });
}

function speakText(text) {
    // Cancelar cualquier síntesis en progreso
    window.speechSynthesis.cancel();
    
    if (!gameState.ttsEnabled || !text) return;
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = gameState.ttsRate;
    utterance.pitch = gameState.ttsPitch;
    utterance.volume = gameState.ttsVolume;
    utterance.lang = 'es-ES';
    
    // Seleccionar voz específica si se eligió
    if (gameState.ttsVoice) {
        const voices = window.speechSynthesis.getVoices();
        utterance.voice = voices[gameState.ttsVoice];
    }
    
    // Agregar animación al botón repeat
    utterance.onstart = () => {
        if (repeatBtn) repeatBtn.classList.add('speaking');
    };
    
    utterance.onend = () => {
        if (repeatBtn) repeatBtn.classList.remove('speaking');
    };
    
    utterance.onerror = (event) => {
        console.error('Error en síntesis de voz:', event.error);
        if (repeatBtn) repeatBtn.classList.remove('speaking');
    };
    
    gameState.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

function speakCurrentQuestion() {
    if (gameState.selectedQuestions.length === 0) return;
    
    const currentQuestion = gameState.selectedQuestions[gameState.currentQuestion];
    speakText(currentQuestion.question);
}

// Inicializar voces cuando estén listas
window.speechSynthesis.onvoiceschanged = initializeTTSVoices;

// ===== FUNCIONES DE EJERCICIOS =====

function startExercises() {
    // Obtener ejercicios aleatorios
    gameState.selectedExercises = exercises.sort(() => Math.random() - 0.5).slice(0, gameState.totalExercises);
    gameState.currentExercise = 0;
    gameState.exerciseAnswers = [];
    gameState.exerciseScore = 0;
    
    totalExercisesSpan.textContent = gameState.totalExercises;
    showScreen('exercisesScreen');
    loadExercise();
}

function loadExercise() {
    if (gameState.currentExercise >= gameState.selectedExercises.length) {
        showExerciseResults();
        return;
    }
    
    const exercise = gameState.selectedExercises[gameState.currentExercise];
    currentExerciseSpan.textContent = gameState.currentExercise + 1;
    exerciseContainer.innerHTML = '';
    
    // Generar HTML según el tipo de ejercicio
    let htmlContent = `
        <div class="exercise-title">${exercise.title || 'Ejercicio'}</div>
        <div class="exercise-instruction">${exercise.instruction || ''}</div>
    `;
    
    switch(exercise.type) {
        case 'complete':
            htmlContent += generateCompleteExercise(exercise);
            break;
        case 'trueFalse':
            htmlContent += generateTrueFalseExercise(exercise);
            break;
        case 'matching':
            htmlContent += generateMatchingExercise(exercise);
            break;
        case 'ordering':
            htmlContent += generateOrderingExercise(exercise);
            break;
        case 'errorIdentification':
            htmlContent += generateErrorIdentificationExercise(exercise);
            break;
        case 'fillBlanks':
            htmlContent += generateFillBlanksExercise(exercise);
            break;
        case 'multipleCorrect':
            htmlContent += generateMultipleCorrectExercise(exercise);
            break;
        default:
            htmlContent += '<p>Tipo de ejercicio desconocido</p>';
    }
    
    exerciseContainer.innerHTML = htmlContent;
    submitExerciseBtn.disabled = false;
}

function generateCompleteExercise(exercise) {
    let html = `<div class="exercise-content">`;
    let content = exercise.content;
    
    // Crear array de líneas para mejor visualización
    const lines = content.split('\n');
    let htmlLines = [];
    
    // Procesar cada línea
    for (let line of lines) {
        let processedLine = line;
        
        // Reemplazar blanks con selects
        exercise.blanks.forEach((blank, index) => {
            const options = blank.options.map((opt, optIndex) => 
                `<option value="${optIndex}"${optIndex === blank.correct ? ' selected' : ''}>${escapeHtml(opt)}</option>`
            ).join('');
            
            const selectHtml = `<select class="blank-select" data-blank-index="${index}" data-blank-id="${blank.blankId}" title="Selecciona la opción correcta">
                <option value="">-- Selecciona --</option>
                ${options}
            </select>`;
            
            if (processedLine.includes(blank.blankId)) {
                processedLine = processedLine.replace(blank.blankId, selectHtml);
            }
        });
        
        htmlLines.push(processedLine);
    }
    
    // Mostrar como bloque de código
    html += `<pre class="code-display"><code>${htmlLines.join('\n')}</code></pre>`;
    
    html += `<div class="blanks-explanation">
        <p style="margin-top: 1.5rem; font-size: 0.95rem; color: var(--light-text);">
            💡 Completa cada espacio en blanco seleccionando la opción correcta en los desplegables.
        </p>
    </div>`;
    
    html += '</div>';
    return html;
}

function generateTrueFalseExercise(exercise) {
    return `
        <div class="exercise-content">
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${exercise.statement}</p>
            <div class="true-false-buttons">
                <button class="tf-btn" data-answer="true">✓ Verdadero</button>
                <button class="tf-btn" data-answer="false">✗ Falso</button>
            </div>
        </div>
    `;
}

function generateMatchingExercise(exercise) {
    let html = '<div class="matching-pairs">';
    
    exercise.pairs.forEach(pair => {
        html += `
            <div class="matching-pair">
                <div class="pair-left">${pair.left}</div>
                <div class="pair-right">
                    ${pair.rightOptions.map((opt, idx) => 
                        `<button class="pair-button" data-pair-id="${pair.id}" data-option="${idx}">${opt}</button>`
                    ).join('')}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

function generateOrderingExercise(exercise) {
    let html = '<div class="ordering-items">';
    
    exercise.items.forEach((item, index) => {
        html += `<div class="ordering-item" draggable="true" data-index="${index}">${escapeHtml(item)}</div>`;
    });
    
    html += '</div>';
    return html;
}

function generateErrorIdentificationExercise(exercise) {
    let html = `<div class="error-identification-container">`;
    html += `<div class="code-display error-code">`;
    
    exercise.code.forEach(codeLine => {
        const isError = codeLine.line === exercise.errorLine;
        html += `
            <div class="code-line-wrapper ${isError ? 'error-line' : ''}" data-line="${codeLine.line}">
                <div class="line-number">${codeLine.line.toString().padStart(2, ' ')}</div>
                <div class="code-line ${isError ? 'error' : 'normal'} clickable-line" data-line="${codeLine.line}" style="cursor: pointer;">
                    ${escapeHtml(codeLine.content)}
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    html += `<div class="error-instruction">
        <p>👆 Haz clic en la línea donde creas que está el error</p>
    </div>`;
    html += `</div>`;
    return html;
}

function generateFillBlanksExercise(exercise) {
    let html = `<div class="exercise-content">${exercise.template}`;
    
    exercise.blanks.forEach((blank, index) => {
        const options = blank.options.map((opt, optIndex) => 
            `<option value="${optIndex}">${opt}</option>`
        ).join('');
        
        const selectHtml = `<select class="blank-select" data-blank-index="${index}" title="${blank.label}">
            <option value="">-- ${blank.label} --</option>
            ${options}
        </select>`;
        
        html = html.replace(`___${index + 1}___`, selectHtml);
    });
    
    html += '</div>';
    return html;
}

function generateMultipleCorrectExercise(exercise) {
    let html = `
        <div class="exercise-content">
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${exercise.question}</p>
            <div class="multi-correct-options">
    `;
    
    exercise.options.forEach((option, index) => {
        html += `
            <label class="multi-option">
                <input type="checkbox" data-option="${index}" value="${option.text}">
                <span>${option.text}</span>
            </label>
        `;
    });
    
    html += '</div></div>';
    return html;
}

function submitExercise() {
    const exercise = gameState.selectedExercises[gameState.currentExercise];
    let isCorrect = false;
    
    switch(exercise.type) {
        case 'complete':
        case 'fillBlanks':
            isCorrect = checkCompleteExercise(exercise);
            break;
        case 'trueFalse':
            isCorrect = checkTrueFalseExercise(exercise);
            break;
        case 'matching':
            isCorrect = checkMatchingExercise(exercise);
            break;
        case 'ordering':
            isCorrect = checkOrderingExercise(exercise);
            break;
        case 'errorIdentification':
            isCorrect = checkErrorIdentificationExercise(exercise);
            break;
        case 'multipleCorrect':
            isCorrect = checkMultipleCorrectExercise(exercise);
            break;
    }
    
    if (isCorrect) {
        gameState.exerciseScore += exercise.points || 10;
        showFeedback('success', '✓ ¡Correcto! ' + exercise.explanation);
    } else {
        // Mostrar más información cuando falla
        let feedbackText = '✗ Incorrecto. ' + exercise.explanation;
        if (exercise.tip) {
            feedbackText += '\n\n' + exercise.tip;
        }
        showFeedback('error', feedbackText);
    }
    
    gameState.exerciseAnswers.push({
        exerciseId: exercise.id,
        title: exercise.title,
        isCorrect: isCorrect,
        explanation: exercise.explanation,
        tip: exercise.tip
    });
    
    submitExerciseBtn.disabled = true;
    // Tiempo diferenciado: 5 segundos si falla, 3 si acierta
    const delay = isCorrect ? 3000 : 5000;
    setTimeout(() => {
        gameState.currentExercise++;
        loadExercise();
    }, delay);
}

function skipExercise() {
    const exercise = gameState.selectedExercises[gameState.currentExercise];
    gameState.exerciseAnswers.push({
        exerciseId: exercise.id,
        title: exercise.title,
        isCorrect: false,
        explanation: exercise.explanation + ' (Saltado)'
    });
    
    gameState.currentExercise++;
    loadExercise();
}

function checkCompleteExercise(exercise) {
    const selects = exerciseContainer.querySelectorAll('.blank-select');
    let allCorrect = true;
    let feedback = '';
    
    // Verificar si hay blanks sin responder
    for (let i = 0; i < selects.length; i++) {
        if (selects[i].value === '') {
            alert('Por favor completa todos los espacios en blanco');
            return false;
        }
    }
    
    // Verificar corrección
    selects.forEach((select, index) => {
        const selectedValue = parseInt(select.value);
        const blank = exercise.blanks[index];
        
        if (selectedValue !== blank.correct) {
            allCorrect = false;
            select.classList.add('error');
            select.style.borderColor = '#ef4444';
            select.style.backgroundColor = 'rgba(239, 68, 68, 0.05)';
        } else {
            select.classList.remove('error');
            select.style.borderColor = '#10b981';
            select.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
        }
    });
    
    return allCorrect;
}

function checkTrueFalseExercise(exercise) {
    const selectedBtn = exerciseContainer.querySelector('.tf-btn.selected');
    if (!selectedBtn) {
        alert('Por favor selecciona una opción');
        return false;
    }
    
    const answer = selectedBtn.dataset.answer === 'true';
    const isCorrect = answer === exercise.correct;
    
    exerciseContainer.querySelectorAll('.tf-btn').forEach(btn => {
        if (isCorrect && answer === (btn.dataset.answer === 'true')) {
            btn.classList.add('correct');
        } else if (!isCorrect && answer === (btn.dataset.answer === 'true')) {
            btn.classList.add('incorrect');
        }
    });
    
    return isCorrect;
}

function checkMatchingExercise(exercise) {
    let allCorrect = true;
    
    exercise.pairs.forEach(pair => {
        const buttons = exerciseContainer.querySelectorAll(`[data-pair-id="${pair.id}"]`);
        const selectedBtn = Array.from(buttons).find(btn => btn.classList.contains('selected'));
        
        if (!selectedBtn) {
            allCorrect = false;
            return;
        }
        
        const selectedIndex = parseInt(selectedBtn.dataset.option);
        if (selectedIndex !== pair.correct) {
            allCorrect = false;
            selectedBtn.classList.add('incorrect');
        } else {
            selectedBtn.classList.add('correct');
        }
    });
    
    return allCorrect;
}

function checkOrderingExercise(exercise) {
    const items = Array.from(exerciseContainer.querySelectorAll('.ordering-item'));
    const currentOrder = items.map(item => parseInt(item.dataset.index));
    
    return JSON.stringify(currentOrder) === JSON.stringify(exercise.correctOrder);
}

function checkErrorIdentificationExercise(exercise) {
    let selectedLine = exerciseContainer.querySelector('.clickable-line.selected') || 
                       exerciseContainer.querySelector('.code-line.selected');
    
    if (!selectedLine) {
        alert('Por favor selecciona la línea que contiene el error');
        return false;
    }
    
    const lineNumber = parseInt(selectedLine.dataset.line);
    const isCorrect = lineNumber === exercise.errorLine;
    
    if (isCorrect) {
        selectedLine.classList.add('correct');
        selectedLine.closest('.code-line-wrapper')?.classList.add('correct');
    } else {
        selectedLine.classList.add('incorrect');
        selectedLine.closest('.code-line-wrapper')?.classList.add('incorrect');
        
        // Mostrar también la línea correcta
        const correctLine = exerciseContainer.querySelector(`[data-line="${exercise.errorLine}"]`);
        if (correctLine) {
            correctLine.classList.add('correct');
            correctLine.closest('.code-line-wrapper')?.classList.add('highlight-correct');
        }
    }
    
    return isCorrect;
}

function checkMultipleCorrectExercise(exercise) {
    const checkboxes = exerciseContainer.querySelectorAll('input[type="checkbox"]');
    let allCorrect = true;
    let anySelected = false;
    
    checkboxes.forEach((checkbox, index) => {
        const isChecked = checkbox.checked;
        const shouldBeChecked = exercise.options[index].correct;
        
        if (isChecked) anySelected = true;
        
        if (isChecked !== shouldBeChecked) {
            allCorrect = false;
        }
        
        const label = checkbox.closest('.multi-option');
        if (shouldBeChecked) {
            label.classList.add('correct');
        } else if (isChecked) {
            label.classList.add('incorrect');
        }
    });
    
    if (!anySelected) {
        alert('Por favor selecciona al menos una opción');
        return false;
    }
    
    return allCorrect;
}

function showFeedback(type, message) {
    let feedback = exerciseContainer.querySelector('.exercise-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'exercise-feedback';
        exerciseContainer.appendChild(feedback);
    }
    
    feedback.className = `exercise-feedback show ${type}`;
    // Convertir saltos de línea en <br> para mostrar correctamente
    const formattedMessage = message.replace(/\n/g, '<br>');
    feedback.innerHTML = `<h4>${type === 'success' ? '✓ Correcto' : '✗ Incorrecto'}</h4><p>${formattedMessage}</p>`;
}

function showExerciseResults() {
    showScreen('exercisesScreen');
    
    const totalPoints = gameState.selectedExercises.reduce((sum, ex) => sum + (ex.points || 10), 0);
    const percentage = Math.round((gameState.exerciseScore / totalPoints) * 100);
    
    exerciseContainer.innerHTML = `
        <div style="text-align: center;">
            <h2>Resultados de Ejercicios</h2>
            <div class="score">
                <p>Puntuación: ${gameState.exerciseScore} / ${totalPoints}</p>
                <p style="font-size: 2rem; color: var(--primary-color);">${percentage}%</p>
            </div>
        </div>
    `;
    
    submitExerciseBtn.style.display = 'none';
    skipExerciseBtn.style.display = 'none';
    backToMenuBtn.style.display = 'inline-block';
}

// Event listeners para ejercicios interactivos
document.addEventListener('click', (e) => {
    // True/False buttons
    if (e.target.classList.contains('tf-btn')) {
        const parent = e.target.parentElement;
        parent.querySelectorAll('.tf-btn').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        submitExerciseBtn.disabled = false;
    }
    
    // Matching buttons
    if (e.target.classList.contains('pair-button')) {
        e.target.parentElement.querySelectorAll('.pair-button').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        
        // Check if all pairs are selected
        const allSelected = Array.from(exerciseContainer.querySelectorAll('.pair-right')).every(
            pair => pair.querySelector('.pair-button.selected')
        );
        submitExerciseBtn.disabled = !allSelected;
    }
    
    // Error identification
    if (e.target.classList.contains('code-line') || e.target.classList.contains('clickable-line')) {
        // Encontrar el contenedor del código
        const codeContainer = e.target.closest('.error-identification-container') || e.target.closest('.code-block');
        if (codeContainer) {
            codeContainer.querySelectorAll('.clickable-line, .code-line').forEach(line => line.classList.remove('selected'));
            e.target.classList.add('selected');
            submitExerciseBtn.disabled = false;
        }
    }
});

// Drag and drop para ordering
document.addEventListener('dragstart', (e) => {
    if (e.target.classList.contains('ordering-item')) {
        e.target.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }
});

document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
});

document.addEventListener('drop', (e) => {
    const dragging = exerciseContainer.querySelector('.ordering-item.dragging');
    const afterElement = getDragAfterElement(exerciseContainer, e.clientY);
    
    if (afterElement == null) {
        exerciseContainer.appendChild(dragging);
    } else {
        exerciseContainer.insertBefore(dragging, afterElement);
    }
    
    dragging.classList.remove('dragging');
    submitExerciseBtn.disabled = false;
});

function getDragAfterElement(container, y) {
    const draggableElements = Array.from(container.querySelectorAll('.ordering-item:not(.dragging)'));
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Change select blanks color on change
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('blank-select')) {
        if (e.target.value !== '') {
            e.target.style.borderColor = 'var(--primary-color)';
        }
        submitExerciseBtn.disabled = false;
    }
});
window.speechSynthesis.onvoiceschanged = initializeTTSVoices;

// ===== ACORDEÓN PARA RESUMEN POR TEMAS =====
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Cerrar todos los otros acordeones
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Abrir el actual si no estaba abierto
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// ===== NAVEGACIÓN FIJA Y SCROLL =====
function scrollToSection(event, sectionId) {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
        // Si es startScreen, mostrar la pantalla
        if (sectionId === 'startScreen') {
            showScreen('startScreen');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Para otras secciones, desplazarse a ellas
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// Evento para mostrar/ocultar navbar en móvil
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.classList.remove('active');
        });
    });
});
