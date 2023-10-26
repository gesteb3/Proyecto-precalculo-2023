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
                FÓRMULA: √(X2-X1)^2+(Y2-Y1)^2<br><br>
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
    
}
function calpm(){
 // Paso 1: Obtén los valores de los campos de entrada
 const x1 = parseFloat(document.getElementById('x1').value);
 const y1 = parseFloat(document.getElementById('y1').value);
 const x2 = parseFloat(document.getElementById('x2').value);
 const y2 = parseFloat(document.getElementById('y2').value);

 // Paso 2: Calcular la suma 
 const sumaY = y2 + y1;
 const sumaX = x2 + x1;

 // Paso 3: Dividir dentro de 2 
 const divY = sumaY/2;
 const divX = sumaX/2;

 // Paso 4: Crea una cadena con el procedimiento y el resultado
 const procedimiento = ` <br>
             FÓRMULA: (X2-X1)/2, (Y2-Y1)/2 <br><br>
 1. X2+X1 = ${sumaX},Y2+Y1 = ${sumaY} <br><br>
 
 2. (X2-X1)/2, (Y2-Y1)/2 = (${divX} , ${divY})<br><br>`;

 // Mostrar el procedimiento y el resultado 
 const elementoRespuesta = document.getElementById('respuesta');
 elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '\n\nEl punto medio es: ('+ divX +','+divY+')';


}
function calpp(){
 // Paso 1: Obtén los valores de los campos de entrada
 const pe1 = parseFloat(document.getElementById('pe1').value);
 const x1 = parseFloat(document.getElementById('x1').value);
 const y1 = parseFloat(document.getElementById('y1').value);

 

 // Paso 2: Crea una cadena con el procedimiento y el resultado
 const procedimiento = ` <br>
             FÓRMULA: Y - Y1 = m(X -X1) <br><br>
 1.Y - ${y1} = ${pe1}(X - ${x1})<br><br>
 2.Y -${y1} = ${pe1}X - ${pe1*x1})<br><br>
 3.Y = ${pe1}X + (${y1 - pe1  *x1} )<br><br>`
 //3.Y = ${pe1}X - ${pe1*x1} (${-1*y1})<br><br>
 //4.Y = ${pe1}X - ${(pe1*x1)+(-1*y1)}<br><br>;

 // Mostrar el procedimiento y el resultado 
 const elementoRespuesta = document.getElementById('respuesta');
 elementoRespuesta.innerHTML = 'Procedimiento:<br>' + procedimiento + '\n\nLa ecuacion de la recta punto pendiente es: '+`Y = ${pe1}X + (${y1 - pe1  *x1} )<br><br>`;
}