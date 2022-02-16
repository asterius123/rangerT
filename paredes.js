class Paredes{
    constructor(x,y,largura,altura,angulo){
        this.sprite = createSprite(x,y,largura,altura,angulo);
        //this.sprite.visible = false;
        this.angulo = angulo;
        this.toque = false;
    }
    virar(Monstro){
        this.sprite.isTouching(Monstro.sprite,(inimigo,parede)=>{
            if (!Monstro.toque) {
                angulo = this.angulo;
                inimigo.setSpeedAndDirection(inimigo.velocidade, angulo);
                Monstro.toque = "P1";
            }
        })  
    }
}