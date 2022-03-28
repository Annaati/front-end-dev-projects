import generateJoke from './generateJokes';
import './styles/main.scss';
import laughing from './assets/laughing.svg'

const LaughImg = document.getElementById('laughImg')
LaughImg.src = laughing

console.log(generateJoke());
