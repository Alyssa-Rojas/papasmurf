const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke.Btn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke() {
    const response = await fetch('https://icanhazdadjoke.com'), {
        headers: (Accept: 'application/json')
    }
}