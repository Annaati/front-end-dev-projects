import generateJoke from './generateJokes';
import './styles/main.scss';
import laughing from './assets/laughing.svg'

const LaughImg = document.getElementById('laughImg')
LaughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke();
