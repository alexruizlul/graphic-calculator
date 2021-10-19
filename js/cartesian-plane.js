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

function drawEmoji() {
    cleanCanvas();
    let context = getCanvaContext();

    const inputAxisX = document.getElementById('InputAxisX');
    const inputAxisY = document.getElementById('InputAxisY');

    const valueAxisX = parseFloat(inputAxisX.value);
    const valueAxisY = parseFloat(inputAxisY.value, 10);

    let coordinateX = 5 + (30 * (valueAxisX + 10));
    let coordinateY = 5 - (30 * (valueAxisY - 10));

    context.beginPath();
    context.arc(coordinateX, coordinateY, 10, 0, 2 * Math.PI, false);
    context.fillStyle = 'yellow';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();
}

function cleanCanvas() {
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