const button = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ['#FF5733', '#F9FF33', '#3371FF', 'red', 'blue', 'rgb(85, 255, 51)']

button.addEventListener('click', () => {
    let hexColor = colors[getRandomNumber()];
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

