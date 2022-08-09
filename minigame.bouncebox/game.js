class Renderer {

    constructor(element) {
        this.element = element;
        this.setup();
    }

    setup() {
        let box = document.createElement("div");
        box.style.position = "relative";
        box.style.top = '20px';
        box.style.left = '20px';
        box.style.backgroundColor = 'red';
        box.style.width = '20px';
        box.style.height = '20px';

        this.element.appendChild(box);
        this.box = box;
    }

    render(position) {
        this.box.style.top = position + 'px';
    }
}

class Box {
    constructor() {
        this.position = 0;
        this.speed = 0;
    }

    runLoop() {
        this.speed++;
        this.position = this.position + this.speed;
    }

    moveUp() {
        this.speed = this.speed - 20;
    }
}

class Game {
    constructor(element) {
        this.renderer = new Renderer(element);
        this.box = new Box;
        this.element = element;
        this.running = true;
        this.setup();
    }

    setup() {
        this.element.addEventListener('click', () => {
            this.box.moveUp();
        }, false);
    }


    start() {
        let counter = 0;
        let timer = setInterval(() => {
            counter++;
            this.box.runLoop()
            if (this.box.position < 0) {
                this.running = false;
                clearInterval(timer);
                alert('Oberer  Spielrand erreicht: Game Over ! ' +counter+ ' Punkte');
            }
            if (this.box.position + 20 > this.element.clientHeight) {
                this.running=false
                clearInterval(timer);
                alert('Unterer Spielrand erreicht: Game Over ! ' +counter+ ' Punkte');
            }
            if (this.running == true) {
                this.renderer.render(this.box.position);
            }
        }, 100);
        console.log(timer);
    }

}

let game = new Game(document.getElementById('game'));
game.start();



