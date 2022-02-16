class Paredes{
    constructor(x,y,largura,altura,angulo,inimigo){
        this.sprite = createSprite(x,y,largura,altura,angulo);
        this.sprite.visible=false;
        this.angulo = angulo;
        this.toque = false;
        this.inimigo = inimigo;
    }
    virar(){
        if (this.inimigo.sprite.isTouching(this.sprite) && !this.toque) {
            angulo = this.angulo;
            this.inimigo.sprite.setSpeedAndDirection(this.inimigo.velocidade, angulo);
            this.toque = true;
          }
    }
}