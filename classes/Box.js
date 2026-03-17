DEFAULT_BOX_X = 0;
DEFAULT_BOX_Y = 0;
DEFAULT_BOX_WIDTH = 400;
DEFAULT_BOX_HEIGHT = 600;

class Box {

    constructor(x, y, width, height){
        this.x = x || DEFAULT_BOX_X;
        this.y = y || DEFAULT_BOX_Y;
        this.width = width || DEFAULT_BOX_WIDTH;
        this.height = height || DEFAULT_BOX_HEIGHT;
        this.background = loadImage(`../sprites/boxBackgrounds/test.png`)
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getSize(){
        return {width: this.width, height: this.height};
    }

    getBackground(){
        return this.background;
    }

    show(){
        const size = this.getSize();
        circle(50,50,50)
        image(this.background, this.getX(), this.getY, size.width, size.height);
    }

}