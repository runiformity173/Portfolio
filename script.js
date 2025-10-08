const data = [
    ["Collision Simulator","This is a simple physics engine that I implemented from scratch with the Verlet integration technique for motion. Link balls with fixed-length connections and throw things around.","https://runiformity173.github.io/misc/Collisions","collisions1"],
    ["Sorting Algorithm Visualizer","Visualize the efficiency and individual moves of various sorting algorithms — now with satisfying sounds!","https://runiformity173.github.io/misc/SortingAlgorithms","sorting1"],
    ["Fantasy Map Generator","Procedurally generates a map with biomes, rainfall, and elevation. Then, it populates it with states that claim territory according to their fortes.","https://runiformity173.github.io/MapGenerator/","map1"],
    ["Test","this card is just a test for a website, the website will be added later","https://runiformity173.github.io/","image"],
    ["Test","this card is just a test for a website, the website will be added later","https://runiformity173.github.io/","image"],
];
for (const [name, description, url, imageName] of data) {
    document.getElementById("card-container").innerHTML += `<div class="col-sm-6 col-md-4">
        <div class="card shadow-sm h-100">
            <a href="${url}" target="_blank">
                <div class="img-container"><img src="images/${imageName}.png" class="card-img-top" alt="${name}"></div>
            </a>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${name}</h5>
                <p class="card-text text-secondary">${description}</p>
                <a href="${url}" target="_blank" class="btn btn-primary mt-auto">View ${name}</a>
            </div>
        </div>
    </div>`;
}