const changeBoxColor = (color) => {
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = color;
}

const laal = document.getElementById('redBtn');
const nila = document.getElementById('blueBtn');
const hara = document.getElementById('greenBtn');

laal.addEventListener('click', () => changeBoxColor('red'));
nila.addEventListener('click', () => changeBoxColor('blue'));
hara.addEventListener('click', () => changeBoxColor('green'));
