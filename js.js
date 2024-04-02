const tlacitkoNacistData = document.getElementById('fetchData');
const nacitaniDiv = document.getElementById('loading');
const filmDiv = document.getElementById('film');
nacitaniDiv.style.display = 'none';
tlacitkoNacistData.addEventListener('click', async () => {
    tlacitkoNacistData.disabled = true;
    nacitaniDiv.style.display = 'block';
    filmDiv.textContent = '';
        const odpoved = await fetch('https://swapi.dev/api/films');
        const data = await odpoved.json();
        const filmy = data.results;
        filmy.forEach(film => {
            const div = document.createElement('div');
            const jmeno = document.createElement('div');
            jmeno.textContent = `Název filmu: ${film.title}`;
            div.appendChild(jmeno);
            const episode = document.createElement('div');
            episode.textContent = `Číslo eizody: ${film.episode_id}`;
            div.appendChild(episode);
            const character = document.createElement('div');
            character.textContent = `Charakter: ${film.characters}`;
            div.appendChild(character);
            filmDiv.appendChild(div);
        });
        tlacitkoNacistData.disabled = false;
        nacitaniDiv.style.display = 'none';
});