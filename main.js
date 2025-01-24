import pokemons from "./pokemons.js";
const pokemonContainer = document.getElementById("huu");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sortBy = document.getElementById("sortBy");



function generator(pokemons) {
    pokemonContainer.innerHTML = ""; 
    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");
        card.innerHTML = `
            <div class="header">
                <h2 class="bull">${pokemon.name}</h2>
                <div class="id-badge">${pokemon.id}</div>
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" class="pokemon-image">
            <div class="type">${pokemon.type.join(" ")}</div>
            <div class="details">
                <p>Candy count: ${pokemon.candy}</p>
                <p>${pokemon.weight}</p>
            </div>
            <div class="weaknesses">
                <p>${pokemon.weaknesses.join(", ")}</p>
            </div>
            <div class="footer">
                <span>${pokemon.time}</span>
            </div>
        `;
        pokemonContainer.appendChild(card);
    });
}


generator(pokemons);

function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = filterType.value;

    
    const filterPokemons = pokemons.filter(pokemon => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.includes(searchValue);
    });

    
    pokemonContainer.innerHTML = '';

    
    if (filterPokemons.length > 0) {
        filterPokemons.forEach(pokemon => {
            const card = document.createElement("div");
            card.classList.add("pokemon-card");
            card.innerHTML = `
            <div class="header">
                <h2 class="bull">${pokemon.name}</h2>
                <div class="id-badge">${pokemon.id}</div>
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" class="pokemon-image">
            <div class="type">${pokemon.type.join(" ")}</div>
            <div class="details">
                <p>Candy count: ${pokemon.candy}</p>
                <p>${pokemon.weight}</p>
            </div>
            <div class="weaknesses">
                <p>${pokemon.weaknesses.join(", ")}</p>
            </div>
            <div class="footer">
                <span>${pokemon.time}</span>
            </div>
        `;
            pokemonContainer.appendChild(card);
        });
    } else {
        
        const noResultMessage = document.createElement("p");
        noResultMessage.textContent = "No results found!";
        pokemonContainer.appendChild(noResultMessage);
    }
}


searchButton.addEventListener('click', searchProduct);
searchInput.addEventListener('keyup', searchProduct);

function filter(){
    const filteredPokemons = pokemons;

    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = filterType.value;

    


    if (sortBy.value === "alphabeticalAsc") {
        filteredPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy.value === "alphabeticalDesc") {
        filteredPokemons.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy.value === "weightAsc") {
        filteredPokemons.sort(
            (a, b) => parseFloat(a.weight) - parseFloat(b.weight) 
        );
    } else if (sortBy.value === "weightDesc") {
        filteredPokemons.sort(
            (a, b) => parseFloat(b.weight) - parseFloat(a.weight) 
        );
    }
    
    
    generator(filteredPokemons);
    

}

generator(pokemons);


searchButton.addEventListener('click', filter);



function filter2() {
    const filterType = document.getElementById('filterType').value;

   
    let filteredPokemons2 = pokemons;


    if (filterType === "all") {
        filteredPokemons2 = pokemons;
    } else {
        filteredPokemons2 = pokemons.filter(pokemon => 
            pokemon.type.includes(filterType)
        );
    }

    
    generator(filteredPokemons2);
}


searchButton.addEventListener('click', filter2);
