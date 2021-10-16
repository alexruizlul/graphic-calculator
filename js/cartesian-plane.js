function graficarPunto() {
    const inputAxisX = document.getElementById('InputAxisX');
    const inputAxisY = document.getElementById('InputAxisY');

    const valueAxisX = parseFloat(inputAxisX.value);
    const valueAxisY = parseFloat(inputAxisY.value, 10);

    let coordinateX = 5 + (30 * (valueAxisX + 10));
    // console.log('X ' + coordinateX);
    let coordinateY = 5 - (30 * (valueAxisY - 10));
    // console.log('Y ' + coordinateY);

    context.fillText( '😀', coordinateX - 5, coordinateY + 2);
}