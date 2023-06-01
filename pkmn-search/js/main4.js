const getPKMN = () => {
    let PKMN = document.querySelector('input').value.toLowerCase();
    console.log(PKMN)

    fetch(`https://pokeapi.co/api/v2/pokemon/${PKMN}`) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector("h2").innerText = data.name.toUpperCase();
        document.querySelector("img").src = data.sprites.front_default
    })
    .catch(err => {
        console.log('ERROR')
    });
}

document.querySelector("button").addEventListener('click', getPKMN)