//class that represents a pokemon.

class Pokemon {

    constructor(pokemonObject){
        this.dexId = pokemonObject.id;
        this.name = pokemonObject.name.english;
        this.sprite = loadImage(`../sprites/00${[pokemonObject.id]}MS.png`)
    }

    getDexId(){
        return this.dexId;
    }

    getName(){
        return this.name;
    }

    getSprite(){
        return this.sprite;
    }

    show(x, y, size){
        image(this.getSprite(), x, y, size, size)
    }

}