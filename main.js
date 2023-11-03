function calcdist() {
    // Paso 1: Obtén los valores de las divisiones o números decimales
    const inputX1 = document.getElementById('divisionX1').value;
    const inputY1 = document.getElementById('divisionY1').value;
    const inputX2 = document.getElementById('divisionX2').value;
    const inputY2 = document.getElementById('divisionY2').value;

    // Función para convertir una entrada en número (si es un número válido)
    const parseNumber = (input) => {
        if (/^\d+\/\d+$/.test(input)) {
            // Es una fracción, divídela
            const [numerador, denominador] = input.split('/');
            return parseFloat(numerador) / parseFloat(denominador);
        } else if (!isNaN(input)) {
            // Es un número decimal válido
            return parseFloat(input);
        }
        return NaN; // Valor no válido
    };

    const x1 = parseNumber(inputX1);
    const y1 = parseNumber(inputY1);
    const x2 = parseNumber(inputX2);
    const y2 = parseNumber(inputY2);

    // Verifica si los valores son números válidos
    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        // Paso 2: Calcular la diferencia en las coordenadas x e y
        const diferenciaX = x2 - x1;
        const diferenciaY = y2 - y1;

        // Paso 3: Calcular el cuadrado de las diferencias
        const diferenciaXAlCuadrado = Math.pow(diferenciaX, 2);
        const diferenciaYAlCuadrado = Math.pow(diferenciaY, 2);

        // Paso 4: Sumar los cuadrados de las diferencias
        const sumaDeCuadrados = diferenciaXAlCuadrado + diferenciaYAlCuadrado;

        // Paso 5: Calcular la raíz cuadrada de la suma de los cuadrados para obtener la distancia
        const distancia = Math.sqrt(sumaDeCuadrados);

        // Paso 6: Crea una cadena con el procedimiento y el resultado
        const procedimiento = `
            FÓRMULA: √(X2-X1)^2 + (Y2-Y1)^2<br><br>
            1. X2-X1 = ${diferenciaX}, Y2-Y1 = ${diferenciaY}<br><br>
            2. (X2-X1)^2 = ${diferenciaXAlCuadrado}, (Y2-Y1)^2 = ${diferenciaYAlCuadrado}<br><br>
            3. (X2-X1)^2 + (Y2-Y1)^2 = ${sumaDeCuadrados}<br><br>
            4. √${sumaDeCuadrados}<br><br>
        `;

        // Mostrar el procedimiento y el resultado
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '<br>La distancia entre los puntos es: ' + distancia;
    } else {
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Por favor, ingrese números válidos o divisiones en los campos de entrada.';
    }
}



function calcpend() {
    // Paso 1: Obtén los valores de las divisiones o números decimales
    const inputX1 = document.getElementById('x1').value;
    const inputY1 = document.getElementById('y1').value;
    const inputX2 = document.getElementById('x2').value;
    const inputY2 = document.getElementById('y2').value;

    // Función para convertir una entrada en número (si es un número válido)
    const parseNumber = (input) => {
        if (/^\d+\/\d+$/.test(input)) {
            // Es una fracción, divídela
            const [numerador, denominador] = input.split('/');
            return parseFloat(numerador) / parseFloat(denominador);
        } else if (!isNaN(input)) {
            // Es un número decimal válido
            return parseFloat(input);
        }
        return NaN; // Valor no válido
    };

    const x1 = parseNumber(inputX1);
    const y1 = parseNumber(inputY1);
    const x2 = parseNumber(inputX2);
    const y2 = parseNumber(inputY2);

    // Verifica si los valores son números válidos
    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        // Paso 2: Calcular la diferencia en las coordenadas x e y
        const diferenciaY = y2 - y1;
        const diferenciaX = x2 - x1;

        // Paso 3: Calcular la pendiente
        const calpendiente = diferenciaY / diferenciaX;

        // Paso 4: Crea una cadena con el procedimiento y el resultado
        const procedimiento = ` <br>
                FÓRMULA: (Y2-Y1)/(X2-X1)<br><br>
        1. Y2-Y1 = ${diferenciaY}, X2-X1 = ${diferenciaX}<br><br>
        
        2. (Y2-Y1)/(X2-X1) = ${calpendiente}<br><br>`;

        // Mostrar el procedimiento y el resultado 
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '\n\nLa pendiente entre los puntos es: ' + calpendiente;
    } else {
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Por favor, ingrese números válidos o divisiones en los campos de entrada.';
    }
}

function calpm() {
    // Paso 1: Obtén los valores de las divisiones o números decimales
    const inputX1 = document.getElementById('x1').value;
    const inputY1 = document.getElementById('y1').value;
    const inputX2 = document.getElementById('x2').value;
    const inputY2 = document.getElementById('y2').value;

    // Función para convertir una entrada en número (si es un número válido)
    const parseNumber = (input) => {
        if (/^\d+\/\d+$/.test(input)) {
            // Es una fracción, divídela
            const [numerador, denominador] = input.split('/');
            return parseFloat(numerador) / parseFloat(denominador);
        } else if (!isNaN(input)) {
            // Es un número decimal válido
            return parseFloat(input);
        }
        return NaN; // Valor no válido
    };

    const x1 = parseNumber(inputX1);
    const y1 = parseNumber(inputY1);
    const x2 = parseNumber(inputX2);
    const y2 = parseNumber(inputY2);

    // Verifica si los valores son números válidos
    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
        // Paso 2: Calcular la suma 
        const sumaY = y2 + y1;
        const sumaX = x2 + x1;

        // Paso 3: Dividir dentro de 2 
        const divY = sumaY / 2;
        const divX = sumaX / 2;

        // Paso 4: Crea una cadena con el procedimiento y el resultado
        const procedimiento = ` <br>
             FÓRMULA: (X2-X1)/2, (Y2-Y1)/2 <br><br>
        1. X2+X1 = ${sumaX}, Y2+Y1 = ${sumaY} <br><br>
        
        2. (X2+X1)/2, (Y2+Y1)/2 = (${divX} , ${divY})<br><br>`;

        // Mostrar el procedimiento y el resultado 
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '<br>El punto medio es: (' + divX + ',' + divY + ')';
    } else {
        const elementoRespuesta = document.getElementById('respuesta');
        elementoRespuesta.innerHTML = 'Por favor, ingrese números válidos o divisiones en los campos de entrada.';
    }
}
