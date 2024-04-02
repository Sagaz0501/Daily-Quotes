const fraseSpan = document.getElementById("frase")
const authorSpan = document.getElementById("author")
const boton = document.getElementById("random")
const copy = document.getElementById("copy")

const frases = [
    {
        frase: ' "cada dia mas crack"',
        author: 'Sagaz',
    },
    {
        frase: "'Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento'",
        author: 'Henry Ford',
    },
    {
        frase: "'El objetivo no está siempre destinado a ser alcanzado, a menudo sirve simplemente como una meta a la cual que apuntar'",
        author: 'Lao Tsé',
    },
    {
        frase: "'No hay que ir para atrás ni para darse impulso'",
        author: 'Bruce Lee',
    },
    {
        frase: "'Solo imagina lo precioso que puede ser arriesgarse y que todo salga bien'",
        author: 'Victor Hugo',
    },
]

fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      fraseSpan.textContent = `"${data.content}"`;
      authorSpan.textContent = `- ${data.author}`;
    });

function fraseRandom(){
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      fraseSpan.textContent = data.content;
      authorSpan.textContent = `- ${data.author}`;
    });
}


boton.addEventListener("click", fraseRandom)
copy.addEventListener('click', () =>{
    let text = fraseSpan.textContent;
    let author = authorSpan.textContent;
    navigator.clipboard.writeText(`${text} ${author}`);

    alert(`Quote by ${author} copied to clipboard!`);
})


