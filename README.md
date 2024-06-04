Who is Rick & Morty GAME!!!

El juego se trata de adivinar qué imagen corresponde con el nombre del personaje que se muestra.

GameProvider nos provee de un estado para manejar los bestScores alcanzados con cada character. Al iniciarse chequea los valores
    de localStorage para ver si hay puntajes antiguos, y actualiza el estado. Luego, cuando se logra un bestScore nuevo, actualiza
    el localStorage para almacenar los nuevos valores.



Funcionamiento de Home:

Primero se realiza una petición a la API al andpoint /characters para obtener la primera pagina de resultados de
personajes, y se almacenan los primeros 5 en el estado mainCharacters.
Luego se muestran en un carousel infinito en forma de cards, para permitir seleccionar si jugar con Rick, Morty,
Summer, Herry o Beth. Al clickar, se navega a la pagina Game con el personaje seleccionado en los params. 



Funcionamiento de Game:

Estructura del reducer:
    Game.reducer    - El reducer, y el estado inicial.
    Game.functions  - Todas las funciones que sirven al componente Game, y que se disparan los dispatch
    Game.actions    - Aquí se definen todas las acciones correctamente, para evitar errores de tipeo

Paso a paso:

    Inicialización del Juego:
        Se despacha la acción START_GAME para inicializar el juego.
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
        es el correcto, actualiza los puntos, y decide si el juego continúa o termina.
        Además actualiza la lista de personajes no seleccionados (UnSelectedCharacters), que son con los que se continua jugando.
        De esta forma no se repiten personajes a lo largo de una partida. Cuando el array UnSelectedCharacters tiene un lenght
        <= 4 entonces llegamos al final de la partida y el jugador ha ganado!

