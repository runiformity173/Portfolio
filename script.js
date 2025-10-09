const data = [
    ["Collision Simulator","This is a simple physics engine that I implemented from scratch with the Verlet integration technique for motion. Link balls with fixed-length connections and throw things around.","https://runiformity173.github.io/misc/Collisions","collisions1","💥"],
    ["Sorting Algorithm Visualizer","Visualize the efficiency and individual moves of various sorting algorithms — now with satisfying sounds!","https://runiformity173.github.io/misc/SortingAlgorithms","sorting1","📊"],
    ["Fantasy Map Generator","Procedurally generates a map with biomes, rainfall, and elevation. Then, it populates it with states that claim territory according to their fortes.","https://runiformity173.github.io/MapGenerator/","map1","⛰"],
    ["DM Screen","A modular tool for managing game information as a D&D Dungeon Master. Support for tracking initiative, displaying monster stats, loading tables, and more.","https://runiformity173.github.io/dnd/DMScreen","screen1","📑"],
    ["Creature Evolution","A simulation of behavioral evolution. Creatures have randomly structured and weighted neural networkds that decide their actions, while mutations and time help them emergently fit to the survival conditions.","https://runiformity173.github.io/misc/Evolution/","evolution1","🧠"],
    ["Falling Sand Game","A satisfying game that simulates materials as cellular automata, supporting state transformations and different densities of gas and liquids.","https://runiformity173.github.io/misc/ParticleSim","particle1","⌛️"],
];
for (const [name, description, url, imageName, emoji] of data) {
    document.getElementById("card-container").innerHTML += `<div class="col-sm-6 col-md-4">
        <div class="card shadow-sm h-100">
            <a href="${url}#portfolio" target="_blank">
                <div class="img-container"><img src="images/${imageName}.png" class="card-img-top" alt="${name}"></div>
            </a>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${name}</h5>
                <p class="card-text text-secondary">${description}</p>
                <a href="${url}#portfolio" target="_blank" class="btn btn-primary mt-auto">View ${name} ${emoji}</a>
            </div>
        </div>
    </div>`;
}