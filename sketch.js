let pokemon;
let pokemonSprite;
let newPokemon = [];
let myBox;

function preload(){
  pokemon = loadJSON("./data/pokedex.json")
  
}

function setup() {
  createCanvas(1600, 1600);

  for(let x = 0; x < 9; x++){
    newPokemon.push(new Pokemon(pokemon[x]))
  }
  myBox = new Box();

}

function draw() {
  background(220);
  noSmooth()
  //console.log(newPokemon.sprite)
  for(let x = 0; x < 9; x ++){
    newPokemon[x].show(64 * x, 200, 64)
  }
  myBox.show();
  
  //text(pokemon[149].name.english, 190,190)
}
