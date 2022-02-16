class Paredes{
    constructor(x,y,largura,altura,angulo){
        this.sprite = createSprite(x,y,largura,altura,angulo);
        this.sprite.visible = false;
        this.angulo = angulo;
        this.toque = false;
    }
}