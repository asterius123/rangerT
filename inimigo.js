class Inimigo {
    constructor(x,y,largura,altura,velocidade){
        this.sprite = createSprite(x, y, largura, altura);
        this.sprite.setSpeedAndDirection(velocidade, angulo);
        this.velocidade = velocidade;

    }
}