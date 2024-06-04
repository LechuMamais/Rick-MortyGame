Anotaciones:

De momento el juego se trata de adivinar qué imagen corresponde con el nombre del personaje que se muestra.
En la Home se puede seleccionar si jugar con Rick, Morty, Summer, Herry o Beth. Al clickar la card de alguno de 
ellos, se navega a la pagina Game con el personaje seleccionado en los params. Además se solicita a la api
todos los personajes en cuyo nombre esté el nombre del personaje seleccionado. Estos se almacenan en 
el state, utilizando useReducer.

En el componente Game se va ejecutando toda la lógica del juego, a traves del reducer, en los archivos:
    Game.reducer    - El reducer, y el estado inicial.
    Game.functions  - Todas las funciones que sirven al componente Game, y que se disparan los dispatch
    Game.actions    - Aquí se definen todas las acciones correctamente, para evitar errores de tipeo



Cuando el array UnSelectedCharacters tiene un lenght <= 4 entonces llegamos al final de la partida y el jugador ha ganado!

Paso a paso:

    Inicialización del Juego:
        Se despacha la acción START_GAME para inicializar el estado.
        Se define y ejecuta una función asíncrona fetchAndSetCharacters para obtener los personajes basados en charName. 
        Los personajes obtenidos se almacenan en el estado mediante la acción GET_ALL_CHARACTERS.

    Actualizar Personajes No Seleccionados:
        Cuando allCharacters cambia (se obtienen nuevos personajes), se despacha la acción RESET_UNSELECTED_CHARACTERS para 
        actualizar los personajes no seleccionados.

    Establecer Personajes Aleatorios y Correctos:
        Cuando UnSelectedCharacters cambia, se llama a setRandomAndCorrectCharacters para seleccionar personajes aleatorios y 
        establecer el personaje correcto para adivinanza.

    Renderizado Condicional:
        Si el juego no ha terminado (gameOver es false) y el jugador no ha ganado (win es false), se muestran los personajes 
        para adivinar y los puntos actuales.
        Si el juego ha terminado (gameOver es true), se muestra el componente GameOver y un botón para reiniciar el juego.
        Si el jugador ha ganado (win es true), se muestra un mensaje de victoria.

    Interacciones del Usuario:
        Cuando el usuario selecciona un personaje, se llama a handleGuessCardSelection, que verifica si el personaje seleccionado
        es el correcto, actualiza los puntos, y decide si el juego continúa o termina. Además actualiza la lista de personajes no
        seleccionados, que son con los que se continua jugando


GameProvider nos provee de un estado para manejar los bestScores alcanzados con cada character. Al iniciarse chequea los valores
    de localStorage para ver si hay puntajes antiguos, y actualiza el estado. Luego, cuando se logra un bestScore nuevo, actualiza
    el localStorage para almacenar los nuevos valores.

    