class Inimigo {
    constructor(velocidade,vida,valor,vivo){
        this.sprite = createSprite(15,230);
        this.sprite.setSpeedAndDirection(velocidade, angulo);
        this.velocidade = velocidade;
        this.toque = false ; 
        this.sprite.lifeTime = 5000;
        this.vida = vida;
        this.valor = valor;
        this.vivo = vivo;
        this.imagem = loadImage("soldier.png");
        this.sprite.addImage(this.imagem);
        this.sprite.scale = 0.1;
    }
}
