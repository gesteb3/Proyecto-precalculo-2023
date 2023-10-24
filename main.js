function calcdist() {
    // Paso 1: Obtén los valores de los campos de entrada
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

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
    const procedimiento = ` <br>
                FÓRUMULA: √(X2-X1)^2+(Y2-Y1)^2<br><br>
    1. X2-X1 = ${diferenciaX}, Y2-Y1 = ${diferenciaY}<br><br>
    
    2. (X2-X1)^2 = ${diferenciaXAlCuadrado}, (Y2-Y1)^2 = ${diferenciaYAlCuadrado}<br><br>
    
    3. (X2-X1)2+(Y2-Y1)2 = ${sumaDeCuadrados}<br><br>
    
    4. √${sumaDeCuadrados} <br><br>`;

    // Mostrar el procedimiento y el resultado 
    const elementoRespuesta = document.getElementById('respuesta');
    elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '\n\nLa distancia entre los puntos es: ' + distancia;
}
function calcpend() {
    // Paso 1: Obtén los valores de los campos de entrada
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

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
    const procedimiento = ` <br>
                FÓRUMULA: √(X2-X1)^2+(Y2-Y1)^2<br><br>
    1. X2-X1 = ${diferenciaX}, Y2-Y1 = ${diferenciaY}<br><br>
    
    2. (X2-X1)^2 = ${diferenciaXAlCuadrado}, (Y2-Y1)^2 = ${diferenciaYAlCuadrado}<br><br>
    
    3. (X2-X1)2+(Y2-Y1)2 = ${sumaDeCuadrados}<br><br>
    
    4. √${sumaDeCuadrados} <br><br>`;

    // Mostrar el procedimiento y el resultado 
    const elementoRespuesta = document.getElementById('respuesta');
    elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '\n\nLa distancia entre los puntos es: ' + distancia;
}

