class Inimigo {
    constructor(velocidade, vida, valor, vivo) {
        this.sprite = createSprite(15, 230);
        this.sprite.setSpeedAndDirection(velocidade, 45);
        this.velocidade = velocidade;
        this.toque1 = false;
        this.toque2 = false;
        this.toque3 = false;
        this.toque4 = false;
        this.toque5 = false;
        this.sprite.lifeTime = 5000;
        this.vida = vida;
        this.valor = valor;
        this.vivo = vivo;
        this.imagem = loadImage("soldier.png");
        this.sprite.addImage(this.imagem);
        this.sprite.scale = 0.1;
    }
    virar() {
        
        if (this.sprite.isTouching(P1.sprite) && !this.toque1){
            this.sprite.setSpeedAndDirection(this.velocidade, P1.angulo);
            this.toque1 = true;
        }
        if (this.sprite.isTouching(P2.sprite) && !this.toque2){
            this.sprite.setSpeedAndDirection(this.velocidade, P2.angulo);
            this.toque2 = true;
        }
        if (this.sprite.isTouching(P3.sprite) && !this.toque3){
            this.sprite.setSpeedAndDirection(this.velocidade, P3.angulo);
            this.toque3 = true;
        }
        if (this.sprite.isTouching(P4.sprite) && !this.toque4){
            this.sprite.setSpeedAndDirection(this.velocidade, P4.angulo);
            this.toque4 = true;
        }
    }
}