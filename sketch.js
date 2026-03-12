let pokemon;
let pokemonSprite;
let newPokemon = [];

function preload(){
  pokemon = loadJSON("./data/pokedex.json")
  
}

function setup() {
  createCanvas(1600, 400);

  for(let x = 0; x < 9; x++){
    newPokemon.push(new Pokemon(pokemon[x]))
  }

}

function draw() {
  background(220);
  noSmooth()
  //console.log(newPokemon.sprite)
  for(let x = 0; x < 9; x ++){
    image(newPokemon[x].sprite, 96 * x, 200, 128, 128)
  }
  
  //text(pokemon[149].name.english, 190,190)
}
