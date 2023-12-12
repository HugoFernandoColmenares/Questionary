let puntaje = 0;

const preguntas = [
    {
        pregunta: '¿Cuál es la capital de Francia?',
        imagen: '', // url de la imagen
        opciones: [
            { respuesta: 'París', correcta: true },
            { respuesta: 'Berlín', correcta: false },
            { respuesta: 'Madrid', correcta: false },
            { respuesta: 'Londres', correcta: false }
        ]
    },
    // Agrega más preguntas según sea necesario
];

function iniciarPregunta(pregunta) {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // Agregar título de pregunta
    const questionTitle = document.querySelector('.question-tittle');
    questionTitle.textContent = pregunta.pregunta;

    // Agregar imagen
    const imageContainer = document.querySelector('.image-container');
    if (pregunta.imagen) {
        const image = document.createElement('img');
        image.src = pregunta.imagen;
        image.alt = 'Pregunta';
        imageContainer.innerHTML = ''; // Limpiar contenido anterior
        imageContainer.appendChild(image);
    } else {
        // Limpiar imagen si no hay ninguna
        imageContainer.innerHTML = '';
    }

    // Agregar opciones
    pregunta.opciones.forEach((opcion, index) => {
        const optionCard = document.createElement('div');
        optionCard.classList.add('option-card', 'color');
        optionCard.textContent = opcion.respuesta;
        optionCard.onclick = function () {
            checkAnswer(this, opcion.correcta);
        };

        optionsContainer.appendChild(optionCard);
    });
}

function checkAnswer(element, esCorrecta) {
    const options = document.querySelectorAll('.option-card');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect', 'color');
    });

    if (esCorrecta) {
        element.classList.add('correct');
        puntaje = puntaje + 100;
    } else {
        element.classList.add('incorrect');
    }
}