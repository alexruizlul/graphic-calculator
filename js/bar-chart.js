function getCanvaContext() {
    let canva = document.getElementById('grid');
    // La razón por la que le pasamos el valor '2d' al contexto
    // es para poder dibujar gráficos 2d en el canvas
    let context = canva.getContext('2d');

    return context;
}

function drawCartesianPlane() {
    let context = getCanvaContext();

    // unidades pequeñas/individuales
    for (let i = 5; i < 606; i = i + 6) {
        // lineas verticales
        context.moveTo(i, 5);
        context.lineTo(i, 605);

        // lineas horizontales
        context.moveTo(5, i);
        context.lineTo(605, i);

        context.strokeStyle = "#f0f0f0";
        context.stroke();
    }

    // unidades grandes
    context.beginPath();
    for (let i = 5; i < 606; i = i + 30) {
        // líneas verticales
        context.moveTo(i, 5);
        context.lineTo(i, 605);

        // lineas horizontales
        context.moveTo(5, i);
        context.lineTo(605, i);

        context.strokeStyle = "#c0c0c0";
        context.stroke();
    }

    context.beginPath();

    // eje x
    context.moveTo(5, 305);
    context.lineTo(605, 305);

    // eje y
    context.moveTo(305, 5);
    context.lineTo(305, 605);

    for (let i = 5; i < 606; i = i + 30) {
        // lineas punteadas verticales del eje x --|--|--|--
        context.moveTo(i, 302);
        context.lineTo(i, 307);

        // lineas punteadas horizontales del eje y
        context.moveTo(302, i);
        context.lineTo(307, i);

        // numeros del eje x
        context.fillText(((i - 5) / 30) - 10, i - 5, 315);

        // numeros del eje y
        context.fillText( -((i - 5) / 30) + 10, 307, i + 5);
    }

    context.strokeStyle = '#ff0000';
    context.stroke();
}

function coordinateX(valueAxis) {
    let coordinateX = 5 + (30 * (valueAxis + 10));
    return coordinateX;
}

function coordinateY(valueAxis) {
    let coordinateY = 5 - (30 * (valueAxis - 10));
    return coordinateY;
}

function createBarOn(coordinateX, coordinateY, color) {
    let context = getCanvaContext();

    context.beginPath();
    context.lineWidth = 26;
    context.strokeStyle = color;
    context.moveTo(coordinateX, 305);
    context.lineTo(coordinateX, coordinateY);
    context.stroke();
}

function graficarBarras() {

    const inputAxisX_B1 = document.getElementById('InputAxisX_B1');
    const inputAxisY_B1 = document.getElementById('InputAxisY_B1');

    const inputAxisX_B2 = document.getElementById('InputAxisX_B2');
    const inputAxisY_B2 = document.getElementById('InputAxisY_B2');

    const inputAxisX_B3 = document.getElementById('InputAxisX_B3');
    const inputAxisY_B3 = document.getElementById('InputAxisY_B3');

    const inputAxisX_B4 = document.getElementById('InputAxisX_B4');
    const inputAxisY_B4 = document.getElementById('InputAxisY_B4');

    const inputAxisX_B5 = document.getElementById('InputAxisX_B5');
    const inputAxisY_B5 = document.getElementById('InputAxisY_B5');

    // VALUES
    const valueAxisX_B1 = parseFloat(inputAxisX_B1.value);
    const valueAxisY_B1 = parseFloat(inputAxisY_B1.value, 10);

    const valueAxisX_B2 = parseFloat(inputAxisX_B2.value);
    const valueAxisY_B2 = parseFloat(inputAxisY_B2.value, 10);

    const valueAxisX_B3 = parseFloat(inputAxisX_B3.value);
    const valueAxisY_B3 = parseFloat(inputAxisY_B3.value, 10);

    const valueAxisX_B4 = parseFloat(inputAxisX_B4.value);
    const valueAxisY_B4 = parseFloat(inputAxisY_B4.value, 10);

    const valueAxisX_B5 = parseFloat(inputAxisX_B5.value);
    const valueAxisY_B5 = parseFloat(inputAxisY_B5.value, 10);

    // COORDINATES
    // TODO: Create function that calculates the coordinate
    let coordinateX_B1 = coordinateX(valueAxisX_B1);
    let coordinateY_B1 = coordinateY(valueAxisY_B1);

    let coordinateX_B2 = coordinateX(valueAxisX_B2);
    let coordinateY_B2 = coordinateY(valueAxisY_B2);

    let coordinateX_B3 = coordinateX(valueAxisX_B3);
    let coordinateY_B3 = coordinateY(valueAxisY_B3);

    let coordinateX_B4 = coordinateX(valueAxisX_B4);
    let coordinateY_B4 = coordinateY(valueAxisY_B4);

    let coordinateX_B5 = coordinateX(valueAxisX_B5);
    let coordinateY_B5 = coordinateY(valueAxisY_B5);

    

    // TODO: Create function that draws the bar with the specified coordinates.
    createBarOn(coordinateX_B1, coordinateY_B1, 'orange');
    createBarOn(coordinateX_B2, coordinateY_B2, 'green');
    createBarOn(coordinateX_B3, coordinateY_B3, 'blue');
    createBarOn(coordinateX_B4, coordinateY_B4, 'red');
    createBarOn(coordinateX_B5, coordinateY_B5, 'gray');
}

function limpiarCanvas() {
    let center = document.getElementById('center');
    center.removeChild(document.getElementById('grid'));

    var canvas = document.createElement('canvas');
    canvas.id = 'grid';
    canvas.width = 610;
    canvas.height = 610;
    canvas.style = "border:1px solid #00aa0f;"
    center.appendChild(canvas);

    drawCartesianPlane();
}

drawCartesianPlane();